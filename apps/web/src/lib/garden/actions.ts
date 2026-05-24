'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { userPlantInputSchema, type Locale, type UserPlantInput } from '@pestuj/shared';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { generateTasksForUserPlant } from '@/lib/garden/task-engine';
import { pickCommonName, type CatalogLite } from './queries';

/**
 * Debounced (client-side) catalog search. Looks up to 10 matches by
 * scientific name or any localised common name. Locale guides which
 * common name is surfaced first.
 */
export async function searchCatalog(query: string, locale: Locale): Promise<CatalogLite[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  const supabase = await createSupabaseServerClient();
  const pattern = `%${trimmed}%`;

  // Run two narrow queries in parallel: scientific-name match (cheap, indexed
  // ilike) and a slightly wider scan (catalog is small — a few hundred rows
  // at most). We then deduplicate and clip to 10 in JS.
  const [byScientific, all] = await Promise.all([
    supabase
      .from('plants_catalog')
      .select('id, slug, scientific_name, common_names')
      .ilike('scientific_name', pattern)
      .limit(10),
    supabase
      .from('plants_catalog')
      .select('id, slug, scientific_name, common_names')
      .limit(500),
  ]);

  if (byScientific.error) {
    console.error('searchCatalog scientific error', byScientific.error);
  }
  if (all.error) {
    console.error('searchCatalog all error', all.error);
  }

  const needle = trimmed.toLowerCase();
  const byCommonName = (all.data ?? []).filter((row) => {
    const map = row.common_names as Record<string, string[]> | null;
    if (!map) return false;
    for (const list of Object.values(map)) {
      if (Array.isArray(list)) {
        for (const name of list) {
          if (typeof name === 'string' && name.toLowerCase().includes(needle)) return true;
        }
      }
    }
    return false;
  });

  type CatalogRow = {
    id: string;
    slug: string;
    scientific_name: string;
    common_names: Record<string, string[]> | null;
  };

  const merged = new Map<string, CatalogRow>();
  for (const row of (byScientific.data ?? []) as CatalogRow[]) {
    merged.set(row.id, row);
  }
  for (const row of byCommonName as CatalogRow[]) {
    if (!merged.has(row.id)) merged.set(row.id, row);
    if (merged.size >= 10) break;
  }

  return Array.from(merged.values())
    .slice(0, 10)
    .map((row) => ({
      id: row.id,
      slug: row.slug,
      scientific_name: row.scientific_name,
      common_name: pickCommonName(row.common_names, locale, row.scientific_name),
    }));
}

function normaliseInput(raw: UserPlantInput): UserPlantInput {
  // Strip empty strings so we can store NULLs where the user left a field
  // blank.
  return {
    ...raw,
    nickname: raw.nickname?.trim() ? raw.nickname.trim() : null,
    planted_at: raw.planted_at?.trim() ? raw.planted_at.trim() : null,
    location_label: raw.location_label?.trim() ? raw.location_label.trim() : null,
    location_type: raw.location_type ?? null,
    notes: raw.notes?.trim() ? raw.notes.trim() : null,
    catalog_plant_id: raw.catalog_plant_id ?? null,
    custom_name: raw.custom_name.trim(),
    quantity: raw.quantity ?? 1,
  };
}

export type AddUserPlantResult =
  | { ok: true; id: string }
  | { ok: false; error: string };

/**
 * Inserts a row into user_plants for the signed-in user, validates with
 * the shared zod schema, then redirects to the new plant's detail page.
 */
export async function addUserPlant(input: UserPlantInput): Promise<AddUserPlantResult> {
  const parsed = userPlantInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: 'invalid_input' };
  }
  const data = normaliseInput(parsed.data);

  const supabase = await createSupabaseServerClient();
  const { data: userResp } = await supabase.auth.getUser();
  if (!userResp.user) {
    return { ok: false, error: 'unauthorized' };
  }

  const { data: inserted, error } = await supabase
    .from('user_plants')
    .insert({
      user_id: userResp.user.id,
      catalog_plant_id: data.catalog_plant_id,
      custom_name: data.custom_name,
      nickname: data.nickname,
      planted_at: data.planted_at,
      location_label: data.location_label,
      location_type: data.location_type,
      quantity: data.quantity,
      notes: data.notes,
    })
    .select('id')
    .single();

  if (error || !inserted) {
    console.error('addUserPlant error', error);
    return { ok: false, error: 'insert_failed' };
  }

  // Best-effort: seed initial care tasks for the new plant. Failures are
  // non-fatal (the daily cron picks them up later).
  try {
    await generateTasksForUserPlant(supabase, userResp.user.id, inserted.id);
  } catch (err) {
    console.error('initial task generation failed', err);
  }

  revalidatePath('/moje-zahrada');
  redirect(`/moje-zahrada/${inserted.id}`);
}

export type UpdateUserPlantResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * Updates an existing plant. Accepts a partial payload; only sets fields
 * that were provided. RLS scopes the update to the owner.
 */
export async function updateUserPlant(
  id: string,
  input: UserPlantInput,
): Promise<UpdateUserPlantResult> {
  const parsed = userPlantInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: 'invalid_input' };
  }
  const data = normaliseInput(parsed.data);

  const supabase = await createSupabaseServerClient();
  const { data: userResp } = await supabase.auth.getUser();
  if (!userResp.user) {
    return { ok: false, error: 'unauthorized' };
  }

  const { error } = await supabase
    .from('user_plants')
    .update({
      catalog_plant_id: data.catalog_plant_id,
      custom_name: data.custom_name,
      nickname: data.nickname,
      planted_at: data.planted_at,
      location_label: data.location_label,
      location_type: data.location_type,
      quantity: data.quantity,
      notes: data.notes,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .eq('user_id', userResp.user.id);

  if (error) {
    console.error('updateUserPlant error', error);
    return { ok: false, error: 'update_failed' };
  }

  revalidatePath('/moje-zahrada');
  revalidatePath(`/moje-zahrada/${id}`);
  return { ok: true };
}

export type SoftDeleteResult = { ok: true } | { ok: false; error: string };

/**
 * Soft-deletes a plant by setting deleted_at = now(). The row stays
 * recoverable through support tooling.
 */
export async function softDeleteUserPlant(id: string): Promise<SoftDeleteResult> {
  const supabase = await createSupabaseServerClient();
  const { data: userResp } = await supabase.auth.getUser();
  if (!userResp.user) {
    return { ok: false, error: 'unauthorized' };
  }

  const { error } = await supabase
    .from('user_plants')
    .update({ deleted_at: new Date().toISOString() })
    .eq('id', id)
    .eq('user_id', userResp.user.id);

  if (error) {
    console.error('softDeleteUserPlant error', error);
    return { ok: false, error: 'delete_failed' };
  }

  revalidatePath('/moje-zahrada');
  return { ok: true };
}
