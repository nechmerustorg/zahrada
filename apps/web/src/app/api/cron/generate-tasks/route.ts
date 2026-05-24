import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { generateTasksForAllUserPlants } from '@/lib/garden/task-engine';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const maxDuration = 60;

/**
 * Runs daily via Vercel cron (see apps/web/vercel.json). Iterates over every
 * profile that has at least one active plant and generates upcoming tasks.
 * Uses the service-role client so it bypasses RLS.
 */
export async function GET(request: NextRequest) {
  // Vercel adds Authorization: Bearer <CRON_SECRET> automatically when the
  // route is hit from the cron scheduler. Reject anything else.
  const auth = request.headers.get('authorization');
  const expected = process.env.CRON_SECRET;
  if (!expected || auth !== `Bearer ${expected}`) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ ok: false, error: 'config_missing' }, { status: 500 });
  }
  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  });

  // Find every user_id with at least one active plant. Distinct via a head=true
  // count would not return rows; instead do a paged scan.
  const userIds = new Set<string>();
  let from = 0;
  const pageSize = 500;
  while (true) {
    const { data, error } = await admin
      .from('user_plants')
      .select('user_id')
      .eq('state', 'active')
      .is('deleted_at', null)
      .range(from, from + pageSize - 1);
    if (error || !data?.length) break;
    for (const row of data) userIds.add(row.user_id as string);
    if (data.length < pageSize) break;
    from += pageSize;
  }

  let total = 0;
  for (const userId of userIds) {
    try {
      total += await generateTasksForAllUserPlants(admin, userId);
    } catch (err) {
      console.error('cron generate failed for user', userId, err);
    }
  }

  // Also expire pending tasks whose due_date is more than 30 days in the past:
  // mark them as 'skipped' so they stop blocking new ones from generating.
  const threshold = new Date();
  threshold.setHours(0, 0, 0, 0);
  threshold.setDate(threshold.getDate() - 30);
  await admin
    .from('care_tasks')
    .update({ status: 'skipped' })
    .eq('status', 'pending')
    .lt('due_date', threshold.toISOString().slice(0, 10));

  return NextResponse.json({ ok: true, users: userIds.size, tasks_inserted: total });
}
