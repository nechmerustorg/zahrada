'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import {
  CLIMATE_REGIONS,
  COUNTRIES,
  SUPPORTED_LOCALES,
  type ClimateRegion,
  type Country,
  type Locale,
} from '@pestuj/shared';
import { createSupabaseServerClient } from '@/lib/supabase/server';

const onboardingSchema = z.object({
  locale: z.enum(SUPPORTED_LOCALES),
  country: z.enum(COUNTRIES),
  climate_zone: z.enum(CLIMATE_REGIONS),
});

export type OnboardingInput = z.infer<typeof onboardingSchema>;

export async function completeOnboarding(input: OnboardingInput): Promise<void> {
  const parsed = onboardingSchema.parse(input);

  const supabase = await createSupabaseServerClient();
  const { data: userResp } = await supabase.auth.getUser();
  if (!userResp.user) redirect('/sign-in');

  const { error } = await supabase
    .from('profiles')
    .update({
      locale: parsed.locale,
      country: parsed.country,
      climate_zone: parsed.climate_zone,
      onboarded_at: new Date().toISOString(),
    })
    .eq('id', userResp.user.id);

  if (error) {
    console.error('onboarding update error', error);
    throw new Error('onboarding_failed');
  }

  redirect(parsed.locale === 'cs' ? '/moje-zahrada' : `/${parsed.locale}/moje-zahrada`);
}

const reverseGeocodeSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

export type GeolocationGuess = {
  country: Country | null;
  climate_zone: ClimateRegion | null;
};

export async function guessRegionFromCoordinates(input: {
  latitude: number;
  longitude: number;
}): Promise<GeolocationGuess> {
  const { latitude, longitude } = reverseGeocodeSchema.parse(input);

  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=8&addressdetails=1`;
  let countryCode: string | undefined;
  let elevationGuess: number | undefined;

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'pestuj.app (info@nechmerust.org)' },
      cache: 'no-store',
    });
    if (res.ok) {
      const data = (await res.json()) as { address?: { country_code?: string } };
      countryCode = data.address?.country_code?.toUpperCase();
    }
  } catch (err) {
    console.error('nominatim reverse geocode failed', err);
  }

  try {
    const elev = await fetch(
      `https://api.open-elevation.com/api/v1/lookup?locations=${latitude},${longitude}`,
      { cache: 'no-store' },
    );
    if (elev.ok) {
      const data = (await elev.json()) as { results?: Array<{ elevation: number }> };
      elevationGuess = data.results?.[0]?.elevation;
    }
  } catch (err) {
    console.error('elevation lookup failed', err);
  }

  return mapToRegion(countryCode, elevationGuess);
}

function mapToRegion(
  countryCode: string | undefined,
  elevation: number | undefined,
): GeolocationGuess {
  const country = countryFromCode(countryCode);

  let climateZone: ClimateRegion | null = null;
  if (country === 'CZ') {
    if (elevation == null) climateZone = 'CZ-lowland';
    else if (elevation > 600) climateZone = 'CZ-mountain';
    else if (elevation > 300) climateZone = 'CZ-highland';
    else climateZone = 'CZ-lowland';
  } else if (country === 'SK') {
    if (elevation == null) climateZone = 'SK-lowland';
    else if (elevation > 600) climateZone = 'SK-mountain';
    else if (elevation > 300) climateZone = 'SK-highland';
    else climateZone = 'SK-lowland';
  } else if (country === 'AT') climateZone = 'AT';
  else if (country === 'DE') climateZone = 'DE';
  else if (country === 'PL') climateZone = 'PL';
  else if (country === 'HU') climateZone = 'HU';

  return { country, climate_zone: climateZone };
}

function countryFromCode(code: string | undefined): Country | null {
  if (!code) return null;
  const upper = code.toUpperCase();
  return (COUNTRIES as readonly string[]).includes(upper) ? (upper as Country) : null;
}

export async function setLocaleOnly(locale: Locale): Promise<void> {
  const supabase = await createSupabaseServerClient();
  const { data: userResp } = await supabase.auth.getUser();
  if (!userResp.user) return;
  await supabase.from('profiles').update({ locale }).eq('id', userResp.user.id);
}
