import { cache } from 'react';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import type { Locale, Country, ClimateRegion } from '@pestuj/shared';

export interface UserSession {
  userId: string;
  email: string | null;
  profile: ProfileSummary;
}

export interface ProfileSummary {
  displayName: string | null;
  locale: Locale;
  country: Country | null;
  climateZone: ClimateRegion | null;
  onboardedAt: string | null;
}

export const getUserSession = cache(async (): Promise<UserSession | null> => {
  const supabase = await createSupabaseServerClient();
  const { data: userResp } = await supabase.auth.getUser();
  const user = userResp.user;
  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('display_name, locale, country, climate_zone, onboarded_at')
    .eq('id', user.id)
    .maybeSingle();

  return {
    userId: user.id,
    email: user.email ?? null,
    profile: {
      displayName: profile?.display_name ?? null,
      locale: (profile?.locale ?? 'cs') as Locale,
      country: (profile?.country ?? null) as Country | null,
      climateZone: (profile?.climate_zone ?? null) as ClimateRegion | null,
      onboardedAt: profile?.onboarded_at ?? null,
    },
  };
});

export function isOnboardingComplete(profile: ProfileSummary): boolean {
  return Boolean(profile.climateZone && profile.country && profile.onboardedAt);
}
