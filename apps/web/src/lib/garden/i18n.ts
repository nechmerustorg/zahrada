import type { Locale } from '@pestuj/shared';

export function pickI18nText(map: Record<string, string> | null | undefined, locale: Locale): string {
  if (!map) return '';
  return map[locale] ?? map.cs ?? map.en ?? Object.values(map)[0] ?? '';
}
