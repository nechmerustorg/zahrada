export const PLANT_CATEGORIES = [
  'vegetable',
  'herb',
  'fruit',
  'ornamental',
  'houseplant',
  'tree',
  'shrub',
] as const;
export type PlantCategory = (typeof PLANT_CATEGORIES)[number];

export const SUN_REQUIREMENTS = ['full_sun', 'partial_shade', 'shade'] as const;
export type SunRequirement = (typeof SUN_REQUIREMENTS)[number];

export const WATER_REQUIREMENTS = ['low', 'medium', 'high'] as const;
export type WaterRequirement = (typeof WATER_REQUIREMENTS)[number];

export const LIFECYCLES = ['annual', 'biennial', 'perennial'] as const;
export type Lifecycle = (typeof LIFECYCLES)[number];

export const TASK_TYPES = [
  'water',
  'fertilize',
  'prune',
  'harvest_check',
  'pest_check',
  'repot',
  'mulch',
  'cover',
  'sow',
  'transplant',
] as const;
export type TaskType = (typeof TASK_TYPES)[number];

export const TASK_STATUSES = ['pending', 'done', 'skipped', 'overdue'] as const;
export type TaskStatus = (typeof TASK_STATUSES)[number];

export const LOCATION_TYPES = ['indoor', 'outdoor', 'greenhouse', 'balcony'] as const;
export type LocationType = (typeof LOCATION_TYPES)[number];

export const TRIGGER_TYPES = [
  'days_after_planting',
  'season',
  'month',
  'recurring_days',
  'weather_based',
] as const;
export type TriggerType = (typeof TRIGGER_TYPES)[number];
