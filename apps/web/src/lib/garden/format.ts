import type { Locale } from '@pestuj/shared';

/**
 * Formats a date as "od dubna 2025" / "od apríla 2025" / "since April 2025"
 * (rough equivalents). Returns null for empty or invalid input.
 */
export function formatPlantedSince(value: string | null | undefined, locale: Locale): string | null {
  if (!value) return null;
  // date columns come back as "YYYY-MM-DD"; treat them as local midnight to
  // avoid timezone drift moving the month backward.
  const d = new Date(`${value}T00:00:00`);
  if (Number.isNaN(d.getTime())) return null;
  const localeTag = localeToTag(locale);
  const month = new Intl.DateTimeFormat(localeTag, { month: 'long', year: 'numeric' }).format(d);
  const prefix = locale === 'cs' ? 'od ' : locale === 'sk' ? 'od ' : 'since ';
  return `${prefix}${month}`;
}

/**
 * Long date for plant detail page ("12. dubna 2025" / "April 12, 2025").
 */
export function formatLongDate(value: string | null | undefined, locale: Locale): string | null {
  if (!value) return null;
  const d = new Date(`${value}T00:00:00`);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat(localeToTag(locale), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

function localeToTag(locale: Locale): string {
  switch (locale) {
    case 'cs':
      return 'cs-CZ';
    case 'sk':
      return 'sk-SK';
    case 'en':
      return 'en-GB';
    default:
      return 'cs-CZ';
  }
}
