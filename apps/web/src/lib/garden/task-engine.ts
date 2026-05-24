import type { SupabaseClient } from '@supabase/supabase-js';
import { addDays } from 'date-fns';
import type { ClimateRegion, TaskType, Locale } from '@pestuj/shared';

type AnySupabase = SupabaseClient;

type TriggerType =
  | 'recurring_days'
  | 'days_after_planting'
  | 'month'
  | 'season'
  | 'weather_based';

interface RuleRow {
  id: string;
  catalog_plant_id: string;
  task_type: TaskType;
  trigger_type: TriggerType;
  trigger_config: {
    interval_days?: number;
    starts_after_days?: number;
    days?: number;
    month?: number;
    day?: number;
    season?: 'spring' | 'summer' | 'autumn' | 'winter';
  };
  priority: number;
  climate_regions: string[] | null;
  instructions_i18n: Record<string, string>;
  active: boolean;
}

interface UserPlantRow {
  id: string;
  user_id: string;
  catalog_plant_id: string | null;
  custom_name: string;
  nickname: string | null;
  planted_at: string | null;
  created_at: string;
  deleted_at: string | null;
  state: string;
  plants_catalog?: {
    common_names: Record<string, string[] | undefined>;
    scientific_name: string;
  } | null;
}

interface UserProfile {
  climate_zone: ClimateRegion | null;
  locale: Locale;
}

const HORIZON_DAYS = 30;

const TASK_VERBS: Record<TaskType, Record<Locale, string>> = {
  water: { cs: 'Zalít', sk: 'Zaliať', en: 'Water' },
  fertilize: { cs: 'Pohnojit', sk: 'Pohnojiť', en: 'Fertilize' },
  prune: { cs: 'Zastřihnout', sk: 'Zastrihnúť', en: 'Prune' },
  harvest_check: { cs: 'Zkontrolovat zralost', sk: 'Skontrolovať zrelosť', en: 'Check ripeness' },
  pest_check: { cs: 'Zkontrolovat na škůdce', sk: 'Skontrolovať škodcov', en: 'Pest check' },
  repot: { cs: 'Přesadit', sk: 'Presadiť', en: 'Repot' },
  mulch: { cs: 'Přihrnout / mulčovat', sk: 'Prihrnúť / mulčovať', en: 'Mulch' },
  cover: { cs: 'Zakrýt před mrazem', sk: 'Zakryť pred mrazom', en: 'Cover against frost' },
  sow: { cs: 'Vysít', sk: 'Vysiať', en: 'Sow' },
  transplant: { cs: 'Vysadit ven', sk: 'Vysadiť von', en: 'Transplant out' },
};

function buildTitle(task: TaskType, plantName: string): Record<Locale, string> {
  return {
    cs: `${TASK_VERBS[task].cs} – ${plantName}`,
    sk: `${TASK_VERBS[task].sk} – ${plantName}`,
    en: `${TASK_VERBS[task].en} – ${plantName}`,
  };
}

function isRuleApplicableToRegion(
  rule: RuleRow,
  region: ClimateRegion | null,
): boolean {
  if (!rule.climate_regions || rule.climate_regions.length === 0) return true;
  if (!region) return true;
  return rule.climate_regions.includes(region);
}

function computeDueDate(
  rule: RuleRow,
  plant: UserPlantRow,
  today: Date,
): Date | null {
  const cfg = rule.trigger_config ?? {};
  switch (rule.trigger_type) {
    case 'recurring_days': {
      const interval = Number(cfg.interval_days ?? 7);
      const start = Number(cfg.starts_after_days ?? 0);
      const anchor = plant.planted_at ? new Date(plant.planted_at) : new Date(plant.created_at);
      const earliest = addDays(anchor, start);
      if (today < earliest) return earliest;
      // align next occurrence to the recurrence grid relative to anchor
      const elapsed = Math.floor((today.getTime() - earliest.getTime()) / 86400000);
      const offset = elapsed % interval === 0 ? 0 : interval - (elapsed % interval);
      return addDays(today, offset);
    }
    case 'days_after_planting': {
      if (!plant.planted_at) return null;
      const days = Number(cfg.days ?? 0);
      return addDays(new Date(plant.planted_at), days);
    }
    case 'month': {
      const targetMonth = Number(cfg.month ?? 0);
      if (!targetMonth) return null;
      const day = Number(cfg.day ?? 15);
      const year = today.getFullYear();
      let candidate = new Date(year, targetMonth - 1, day);
      if (candidate < today) candidate = new Date(year + 1, targetMonth - 1, day);
      return candidate;
    }
    case 'season': {
      // Map seasons to mid-month dates for northern hemisphere.
      const season = String(cfg.season ?? '');
      const monthMap: Record<string, number> = { spring: 4, summer: 7, autumn: 10, winter: 1 };
      const m = monthMap[season];
      if (!m) return null;
      const year = today.getFullYear();
      let candidate = new Date(year, m - 1, 15);
      if (candidate < today) candidate = new Date(year + 1, m - 1, 15);
      return candidate;
    }
    case 'weather_based':
      return null;
    default:
      return null;
  }
}

function pickPlantName(plant: UserPlantRow, locale: Locale): string {
  if (plant.nickname) return plant.nickname;
  const cat = plant.plants_catalog;
  if (cat) {
    const order: Locale[] = [locale, 'cs', 'en', 'sk'];
    for (const l of order) {
      const arr = cat.common_names?.[l];
      if (arr && arr[0]) return arr[0];
    }
  }
  return plant.custom_name;
}

export async function generateTasksForUserPlant(
  supabase: AnySupabase,
  userId: string,
  userPlantId: string,
): Promise<number> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const { data: profile } = await supabase
    .from('profiles')
    .select('climate_zone, locale')
    .eq('id', userId)
    .maybeSingle();

  const userProfile: UserProfile = {
    climate_zone: (profile?.climate_zone ?? null) as ClimateRegion | null,
    locale: ((profile?.locale ?? 'cs') as Locale),
  };

  const { data: plant } = await supabase
    .from('user_plants')
    .select('id, user_id, catalog_plant_id, custom_name, nickname, planted_at, created_at, deleted_at, state, plants_catalog(common_names, scientific_name)')
    .eq('id', userPlantId)
    .maybeSingle();

  if (!plant) return 0;
  const p = plant as unknown as UserPlantRow;
  if (p.deleted_at || p.state !== 'active') return 0;
  if (!p.catalog_plant_id) return 0;

  const { data: rules } = await supabase
    .from('plant_care_rules')
    .select('id, catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active')
    .eq('catalog_plant_id', p.catalog_plant_id)
    .eq('active', true);

  if (!rules?.length) return 0;

  const horizon = addDays(today, HORIZON_DAYS);
  const plantName = pickPlantName(p, userProfile.locale);
  const inserts: Record<string, unknown>[] = [];

  for (const r of rules as unknown as RuleRow[]) {
    if (!isRuleApplicableToRegion(r, userProfile.climate_zone)) continue;
    const due = computeDueDate(r, p, today);
    if (!due) continue;
    if (due > horizon) continue;
    if (due < addDays(today, -7)) continue; // skip way in the past

    // Check if a pending/done task from this rule already exists for the same due window
    const { data: existing } = await supabase
      .from('care_tasks')
      .select('id, status, due_date')
      .eq('user_plant_id', p.id)
      .eq('source_rule_id', r.id)
      .gte('due_date', addDays(due, -1).toISOString().slice(0, 10))
      .lte('due_date', addDays(due, 1).toISOString().slice(0, 10))
      .limit(1);

    if (existing?.length) continue;

    inserts.push({
      user_id: userId,
      user_plant_id: p.id,
      task_type: r.task_type,
      due_date: due.toISOString().slice(0, 10),
      title_i18n: buildTitle(r.task_type, plantName),
      instructions_i18n: r.instructions_i18n,
      status: 'pending',
      generated_by: 'rule_engine',
      source_rule_id: r.id,
      priority: r.priority,
    });
  }

  if (!inserts.length) return 0;

  const { error, count } = await supabase
    .from('care_tasks')
    .insert(inserts, { count: 'exact' });

  if (error) {
    console.error('insert care_tasks failed', error);
    return 0;
  }
  return count ?? inserts.length;
}

export async function generateTasksForAllUserPlants(
  supabase: AnySupabase,
  userId: string,
): Promise<number> {
  const { data } = await supabase
    .from('user_plants')
    .select('id')
    .eq('user_id', userId)
    .eq('state', 'active')
    .is('deleted_at', null);

  let total = 0;
  for (const row of (data ?? []) as Array<{ id: string }>) {
    total += await generateTasksForUserPlant(supabase, userId, row.id);
  }
  return total;
}
