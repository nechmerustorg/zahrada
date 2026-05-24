import type { Locale, PlantCategory } from '@pestuj/shared';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export type LocalizedRichSection = Partial<Record<Locale, string>>;

export interface CatalogListItem {
  id: string;
  slug: string;
  scientific_name: string;
  category: PlantCategory;
  common_names: Record<string, string[] | undefined>;
  lifecycle: string | null;
  sun_requirement: string | null;
  water_requirement: string | null;
}

export interface CatalogDetail extends CatalogListItem {
  family: string | null;
  hardiness_min_c: number | null;
  soil_type: string[] | null;
  companion_plants: string[] | null;
  incompatible_plants: string[] | null;
  content: {
    planting?: LocalizedRichSection;
    watering?: LocalizedRichSection;
    fertilizing?: LocalizedRichSection;
    pruning?: LocalizedRichSection;
    harvesting?: LocalizedRichSection;
    common_issues?: LocalizedRichSection;
  } | null;
}

const LIST_COLUMNS =
  'id, slug, scientific_name, category, common_names, lifecycle, sun_requirement, water_requirement';
const DETAIL_COLUMNS =
  'id, slug, scientific_name, category, common_names, lifecycle, sun_requirement, water_requirement, family, hardiness_min_c, soil_type, companion_plants, incompatible_plants, content';

export async function listCatalogPlants(opts: {
  search?: string;
  category?: PlantCategory;
  locale: Locale;
}): Promise<CatalogListItem[]> {
  const supabase = await createSupabaseServerClient();
  let query = supabase
    .from('plants_catalog')
    .select(LIST_COLUMNS)
    .not('published_at', 'is', null)
    .order('slug');

  if (opts.category) {
    query = query.eq('category', opts.category);
  }

  if (opts.search?.trim()) {
    const term = opts.search.trim();
    query = query.or(
      `scientific_name.ilike.%${term}%,slug.ilike.%${term}%`,
    );
  }

  const { data, error } = await query.limit(200);
  if (error) {
    console.error('listCatalogPlants', error);
    return [];
  }

  const rows = (data ?? []) as unknown as CatalogListItem[];

  // Locale-aware client-side filter for common names if search term is set
  if (opts.search?.trim()) {
    const t = opts.search.trim().toLowerCase();
    return rows.filter((p) => {
      if (p.scientific_name.toLowerCase().includes(t)) return true;
      if (p.slug.includes(t)) return true;
      const names = (p.common_names?.[opts.locale] ?? []).concat(
        p.common_names?.cs ?? [],
        p.common_names?.sk ?? [],
        p.common_names?.en ?? [],
      );
      return names.some((n) => n.toLowerCase().includes(t));
    });
  }

  return rows;
}

export async function getCatalogPlantBySlug(slug: string): Promise<CatalogDetail | null> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from('plants_catalog')
    .select(DETAIL_COLUMNS)
    .eq('slug', slug)
    .maybeSingle();
  if (error) {
    console.error('getCatalogPlantBySlug', error);
    return null;
  }
  return data as unknown as CatalogDetail | null;
}

export async function getCompanionDetails(
  slugs: string[],
): Promise<Array<{ slug: string; scientific_name: string; common_names: Record<string, string[]> }>> {
  if (!slugs.length) return [];
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from('plants_catalog')
    .select('slug, scientific_name, common_names')
    .in('slug', slugs);
  return (data ?? []) as never;
}

export function pickCommonName(
  names: Record<string, string[] | undefined> | null | undefined,
  locale: Locale,
  fallback: string,
): string {
  if (!names) return fallback;
  const order: Locale[] = [locale, 'cs', 'en', 'sk'];
  for (const l of order) {
    const arr = names[l];
    if (arr && arr.length > 0 && arr[0]) return arr[0];
  }
  return fallback;
}
