export const CLIMATE_REGIONS = [
  'CZ-lowland',
  'CZ-highland',
  'CZ-mountain',
  'SK-lowland',
  'SK-highland',
  'SK-mountain',
  'AT',
  'DE',
  'PL',
  'HU',
] as const;
export type ClimateRegion = (typeof CLIMATE_REGIONS)[number];

export const COUNTRIES = ['CZ', 'SK', 'AT', 'DE', 'PL', 'HU'] as const;
export type Country = (typeof COUNTRIES)[number];

export const SUPPORTED_LOCALES = ['cs', 'sk', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'cs';

export const CLIMATE_REGION_LABELS: Record<ClimateRegion, Record<Locale, string>> = {
  'CZ-lowland': {
    cs: 'Česko – nížiny (do 300 m n. m.)',
    sk: 'Česko – nížiny (do 300 m n. m.)',
    en: 'Czech Republic – lowlands (up to 300 m)',
  },
  'CZ-highland': {
    cs: 'Česko – vrchovina (300–600 m n. m.)',
    sk: 'Česko – vrchovina (300–600 m n. m.)',
    en: 'Czech Republic – highlands (300–600 m)',
  },
  'CZ-mountain': {
    cs: 'Česko – hory (nad 600 m n. m.)',
    sk: 'Česko – hory (nad 600 m n. m.)',
    en: 'Czech Republic – mountains (above 600 m)',
  },
  'SK-lowland': {
    cs: 'Slovensko – nížiny',
    sk: 'Slovensko – nížiny',
    en: 'Slovakia – lowlands',
  },
  'SK-highland': {
    cs: 'Slovensko – vrchovina',
    sk: 'Slovensko – vrchovina',
    en: 'Slovakia – highlands',
  },
  'SK-mountain': {
    cs: 'Slovensko – hory',
    sk: 'Slovensko – hory',
    en: 'Slovakia – mountains',
  },
  AT: { cs: 'Rakousko', sk: 'Rakúsko', en: 'Austria' },
  DE: { cs: 'Německo', sk: 'Nemecko', en: 'Germany' },
  PL: { cs: 'Polsko', sk: 'Poľsko', en: 'Poland' },
  HU: { cs: 'Maďarsko', sk: 'Maďarsko', en: 'Hungary' },
};
