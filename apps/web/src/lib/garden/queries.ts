import { createSupabaseServerClient } from '@/lib/supabase/server';
import type { Locale } from '@pestuj/shared';

export interface CatalogJoin {
  id: string;
  slug: string;
  scientific_name: string;
  category: string;
  common_names: Record<string, string[]> | null;
  images: Array<{ path: string; alt?: string }> | null;
}

export interface UserPlantRow {
  id: string;
  user_id: string;
  catalog_plant_id: string | null;
  custom_name: string;
  nickname: string | null;
  planted_at: string | null;
  location_label: string | null;
  location_type: 'indoor' | 'outdoor' | 'greenhouse' | 'balcony' | null;
  quantity: number;
  notes: string | null;
  cover_image_path: string | null;
  state: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  plants_catalog: CatalogJoin | null;
}

const PLANT_SELECT = `
  id,
  user_id,
  catalog_plant_id,
  custom_name,
  nickname,
  planted_at,
  location_label,
  location_type,
  quantity,
  notes,
  cover_image_path,
  state,
  created_at,
  updated_at,
  deleted_at,
  plants_catalog:catalog_plant_id (
    id,
    slug,
    scientific_name,
    category,
    common_names,
    images
  )
`;

/**
 * Lists the current user's non-deleted plants, joined with catalog metadata.
 * RLS scopes results to auth.uid() automatically.
 */
export async function listUserPlants(userId: string): Promise<UserPlantRow[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from('user_plants')
    .select(PLANT_SELECT)
    .eq('user_id', userId)
    .is('deleted_at', null)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('listUserPlants error', error);
    return [];
  }
  return (data ?? []) as unknown as UserPlantRow[];
}

/**
 * Fetches a single plant by id; returns null if missing, deleted, or owned
 * by another user (RLS blocks access).
 */
export async function getUserPlant(id: string, userId: string): Promise<UserPlantRow | null> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from('user_plants')
    .select(PLANT_SELECT)
    .eq('id', id)
    .eq('user_id', userId)
    .is('deleted_at', null)
    .maybeSingle();

  if (error) {
    console.error('getUserPlant error', error);
    return null;
  }
  return (data as unknown as UserPlantRow | null) ?? null;
}

export interface CatalogLite {
  id: string;
  slug: string;
  scientific_name: string;
  common_name: string;
}

/**
 * Pick a single common-name string from the catalog row, preferring the
 * user's locale and falling back through cs/sk/en, then to the scientific
 * name.
 */
export function pickCommonName(
  commonNames: Record<string, string[]> | null | undefined,
  locale: Locale,
  fallback: string,
): string {
  if (commonNames) {
    const order: Locale[] = [locale, 'cs', 'sk', 'en'];
    for (const lang of order) {
      const list = commonNames[lang];
      const first = list?.[0];
      if (typeof first === 'string' && first.length > 0) return first;
    }
    // Last resort: any value in the map.
    for (const list of Object.values(commonNames)) {
      if (Array.isArray(list)) {
        const first = list[0];
        if (typeof first === 'string' && first.length > 0) return first;
      }
    }
  }
  return fallback;
}

/**
 * Fetches a single catalog row by slug. Used for the ?catalog=<slug> deep
 * link on the add-plant page.
 */
export async function getCatalogBySlug(slug: string): Promise<CatalogLite | null> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from('plants_catalog')
    .select('id, slug, scientific_name, common_names')
    .eq('slug', slug)
    .maybeSingle();

  if (error || !data) {
    if (error) console.error('getCatalogBySlug error', error);
    return null;
  }
  return {
    id: data.id as string,
    slug: data.slug as string,
    scientific_name: data.scientific_name as string,
    common_name: pickCommonName(
      data.common_names as Record<string, string[]> | null,
      'cs',
      data.scientific_name as string,
    ),
  };
}
