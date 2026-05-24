import type { ClimateRegion } from '../domain/region';

export interface SeasonConfig {
  region: ClimateRegion;
  lastFrostDay: { month: number; day: number };
  firstFrostDay: { month: number; day: number };
  growingSeasonMonths: readonly number[];
  notes?: string;
}

export const SEASON_CONFIG: Record<ClimateRegion, SeasonConfig> = {
  'CZ-lowland': {
    region: 'CZ-lowland',
    lastFrostDay: { month: 5, day: 15 },
    firstFrostDay: { month: 10, day: 15 },
    growingSeasonMonths: [4, 5, 6, 7, 8, 9, 10],
    notes: 'Ledoví muži 12.–14. května',
  },
  'CZ-highland': {
    region: 'CZ-highland',
    lastFrostDay: { month: 5, day: 20 },
    firstFrostDay: { month: 10, day: 5 },
    growingSeasonMonths: [5, 6, 7, 8, 9, 10],
  },
  'CZ-mountain': {
    region: 'CZ-mountain',
    lastFrostDay: { month: 6, day: 1 },
    firstFrostDay: { month: 9, day: 20 },
    growingSeasonMonths: [5, 6, 7, 8, 9],
  },
  'SK-lowland': {
    region: 'SK-lowland',
    lastFrostDay: { month: 5, day: 10 },
    firstFrostDay: { month: 10, day: 20 },
    growingSeasonMonths: [4, 5, 6, 7, 8, 9, 10],
  },
  'SK-highland': {
    region: 'SK-highland',
    lastFrostDay: { month: 5, day: 20 },
    firstFrostDay: { month: 10, day: 5 },
    growingSeasonMonths: [5, 6, 7, 8, 9, 10],
  },
  'SK-mountain': {
    region: 'SK-mountain',
    lastFrostDay: { month: 6, day: 5 },
    firstFrostDay: { month: 9, day: 15 },
    growingSeasonMonths: [5, 6, 7, 8, 9],
  },
  AT: {
    region: 'AT',
    lastFrostDay: { month: 5, day: 15 },
    firstFrostDay: { month: 10, day: 15 },
    growingSeasonMonths: [4, 5, 6, 7, 8, 9, 10],
  },
  DE: {
    region: 'DE',
    lastFrostDay: { month: 5, day: 15 },
    firstFrostDay: { month: 10, day: 15 },
    growingSeasonMonths: [4, 5, 6, 7, 8, 9, 10],
  },
  PL: {
    region: 'PL',
    lastFrostDay: { month: 5, day: 18 },
    firstFrostDay: { month: 10, day: 10 },
    growingSeasonMonths: [4, 5, 6, 7, 8, 9, 10],
  },
  HU: {
    region: 'HU',
    lastFrostDay: { month: 4, day: 25 },
    firstFrostDay: { month: 10, day: 25 },
    growingSeasonMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
};

export function isInGrowingSeason(region: ClimateRegion, month: number): boolean {
  return SEASON_CONFIG[region].growingSeasonMonths.includes(month);
}

export function isAfterLastFrost(region: ClimateRegion, date: Date): boolean {
  const cfg = SEASON_CONFIG[region].lastFrostDay;
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return m > cfg.month || (m === cfg.month && d >= cfg.day);
}
