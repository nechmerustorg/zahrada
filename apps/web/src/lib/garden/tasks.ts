'use server';

import { revalidatePath } from 'next/cache';
import { addDays } from 'date-fns';
import { z } from 'zod';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import {
  generateTasksForUserPlant,
  generateTasksForAllUserPlants,
} from '@/lib/garden/task-engine';
export interface TaskListItem {
  id: string;
  task_type: string;
  due_date: string;
  status: 'pending' | 'done' | 'skipped' | 'overdue';
  priority: number;
  title_i18n: Record<string, string>;
  instructions_i18n: Record<string, string> | null;
  user_plant: {
    id: string;
    custom_name: string;
    nickname: string | null;
  };
}

export async function listUserTasks(opts: {
  userId: string;
  windowEndDays?: number;
}): Promise<TaskListItem[]> {
  const supabase = await createSupabaseServerClient();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const horizon = addDays(today, opts.windowEndDays ?? 14);

  const { data, error } = await supabase
    .from('care_tasks')
    .select(
      'id, task_type, due_date, status, priority, title_i18n, instructions_i18n, user_plant:user_plants(id, custom_name, nickname)',
    )
    .eq('user_id', opts.userId)
    .in('status', ['pending', 'overdue'])
    .lte('due_date', horizon.toISOString().slice(0, 10))
    .order('due_date', { ascending: true })
    .order('priority', { ascending: true });

  if (error) {
    console.error('listUserTasks', error);
    return [];
  }
  return (data ?? []) as unknown as TaskListItem[];
}

const completeSchema = z.object({ taskId: z.string().uuid() });

export async function completeTask(formData: FormData): Promise<void> {
  const { taskId } = completeSchema.parse({ taskId: formData.get('taskId') });
  const supabase = await createSupabaseServerClient();
  const { data: userResp } = await supabase.auth.getUser();
  if (!userResp.user) return;

  const { data: task } = await supabase
    .from('care_tasks')
    .select('id, task_type, user_plant_id')
    .eq('id', taskId)
    .maybeSingle();

  await supabase
    .from('care_tasks')
    .update({ status: 'done', completed_at: new Date().toISOString() })
    .eq('id', taskId);

  // Side effects: bump last_watered_at / last_fertilized_at on plant
  if (task && task.user_plant_id) {
    const updates: Record<string, string> = {};
    if (task.task_type === 'water') updates.last_watered_at = new Date().toISOString();
    if (task.task_type === 'fertilize') updates.last_fertilized_at = new Date().toISOString();
    if (Object.keys(updates).length) {
      await supabase.from('user_plants').update(updates).eq('id', task.user_plant_id);
    }
    // Regenerate so the next recurrence shows up
    await generateTasksForUserPlant(supabase, userResp.user.id, task.user_plant_id);
  }

  revalidatePath('/moje-zahrada');
}

const snoozeSchema = z.object({
  taskId: z.string().uuid(),
  days: z.coerce.number().int().min(1).max(30),
});

export async function snoozeTask(formData: FormData): Promise<void> {
  const { taskId, days } = snoozeSchema.parse({
    taskId: formData.get('taskId'),
    days: formData.get('days'),
  });
  const supabase = await createSupabaseServerClient();
  const { data: task } = await supabase
    .from('care_tasks')
    .select('due_date')
    .eq('id', taskId)
    .maybeSingle();
  if (!task) return;
  const next = addDays(new Date(task.due_date), days);
  await supabase
    .from('care_tasks')
    .update({ due_date: next.toISOString().slice(0, 10) })
    .eq('id', taskId);
  revalidatePath('/moje-zahrada');
}

export async function regenerateMyTasks(): Promise<void> {
  const supabase = await createSupabaseServerClient();
  const { data: userResp } = await supabase.auth.getUser();
  if (!userResp.user) return;
  await generateTasksForAllUserPlants(supabase, userResp.user.id);
  revalidatePath('/moje-zahrada');
}
