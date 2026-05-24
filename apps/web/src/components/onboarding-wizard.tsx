'use client';

import { useState, useTransition } from 'react';
import { useTranslations } from 'next-intl';
import {
  CLIMATE_REGIONS,
  CLIMATE_REGION_LABELS,
  COUNTRIES,
  SUPPORTED_LOCALES,
  type ClimateRegion,
  type Country,
  type Locale,
} from '@pestuj/shared';
import { completeOnboarding, guessRegionFromCoordinates } from '@/lib/onboarding/actions';

const TOTAL_STEPS = 3;

const LOCALE_OPTIONS: Array<{ value: Locale; labelKey: 'languageCs' | 'languageSk' | 'languageEn' }> = [
  { value: 'cs', labelKey: 'languageCs' },
  { value: 'sk', labelKey: 'languageSk' },
  { value: 'en', labelKey: 'languageEn' },
];

const COUNTRY_OPTIONS: Array<{
  value: Country;
  labelKey: 'countryCz' | 'countrySk' | 'countryAt' | 'countryDe' | 'countryPl' | 'countryHu';
}> = [
  { value: 'CZ', labelKey: 'countryCz' },
  { value: 'SK', labelKey: 'countrySk' },
  { value: 'AT', labelKey: 'countryAt' },
  { value: 'DE', labelKey: 'countryDe' },
  { value: 'PL', labelKey: 'countryPl' },
  { value: 'HU', labelKey: 'countryHu' },
];

export function OnboardingWizard({
  initialLocale,
}: {
  initialLocale: Locale;
}) {
  const t = useTranslations('onboarding');
  const tCommon = useTranslations();
  const [step, setStep] = useState(1);
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [country, setCountry] = useState<Country | null>(null);
  const [climate, setClimate] = useState<ClimateRegion | null>(null);
  const [geoState, setGeoState] = useState<'idle' | 'detecting' | 'error'>('idle');
  const [climateFromGps, setClimateFromGps] = useState(false);
  const [, startTransition] = useTransition();
  const [submitting, setSubmitting] = useState(false);

  function useGeolocation() {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setGeoState('error');
      return;
    }
    setGeoState('detecting');
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const guess = await guessRegionFromCoordinates({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
          if (guess.country) setCountry(guess.country);
          if (guess.climate_zone) {
            setClimate(guess.climate_zone);
            setClimateFromGps(true);
            setStep(3);
          }
          setGeoState('idle');
        } catch {
          setGeoState('error');
        }
      },
      () => setGeoState('error'),
      { timeout: 8000, maximumAge: 0 },
    );
  }

  async function handleFinish() {
    if (!country || !climate) return;
    setSubmitting(true);
    startTransition(async () => {
      await completeOnboarding({ locale, country, climate_zone: climate });
    });
  }

  return (
    <div className="w-full max-w-xl">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-leaf-600">
        {t('stepIndicator', { current: step, total: TOTAL_STEPS })}
      </p>
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-leaf-100">
        <div
          className="h-full bg-leaf-600 transition-all"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      {step === 1 && (
        <section>
          <h1 className="text-3xl font-bold text-leaf-900">{t('step1Title')}</h1>
          <p className="mt-2 text-sm text-leaf-700">{t('step1Subtitle')}</p>
          <div className="mt-6 space-y-3">
            {LOCALE_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={`flex cursor-pointer items-center justify-between rounded-2xl border-2 px-5 py-4 transition ${
                  locale === opt.value
                    ? 'border-leaf-600 bg-leaf-50'
                    : 'border-leaf-200 hover:border-leaf-400'
                }`}
              >
                <span className="text-base font-medium text-leaf-900">{t(opt.labelKey)}</span>
                <input
                  type="radio"
                  name="locale"
                  className="sr-only"
                  checked={locale === opt.value}
                  onChange={() => setLocale(opt.value)}
                />
                {locale === opt.value && <CheckIcon />}
              </label>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="rounded-full bg-leaf-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-leaf-700"
            >
              {t('continue')}
            </button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section>
          <h1 className="text-3xl font-bold text-leaf-900">{t('step2Title')}</h1>
          <p className="mt-2 text-sm text-leaf-700">{t('step2Subtitle')}</p>

          <button
            type="button"
            onClick={useGeolocation}
            disabled={geoState === 'detecting'}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-leaf-300 bg-white px-5 py-4 text-sm font-medium text-leaf-800 transition hover:border-leaf-500 hover:bg-leaf-50 disabled:opacity-60"
          >
            <PinIcon />
            {geoState === 'detecting' ? t('locationDetecting') : t('useMyLocation')}
          </button>
          {geoState === 'error' && (
            <p className="mt-2 text-sm text-red-700">{t('locationError')}</p>
          )}

          <p className="mt-6 text-xs uppercase tracking-wider text-leaf-600">
            {t('selectManually')}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {COUNTRY_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setCountry(opt.value)}
                className={`rounded-2xl border-2 px-4 py-3 text-sm font-medium transition ${
                  country === opt.value
                    ? 'border-leaf-600 bg-leaf-50 text-leaf-900'
                    : 'border-leaf-200 text-leaf-800 hover:border-leaf-400'
                }`}
              >
                {t(opt.labelKey)}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-full border border-leaf-300 px-6 py-3 text-sm font-semibold text-leaf-800 hover:bg-leaf-50"
            >
              {t('back')}
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!country}
              className="rounded-full bg-leaf-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-leaf-700 disabled:opacity-50"
            >
              {t('continue')}
            </button>
          </div>
        </section>
      )}

      {step === 3 && country && (
        <section>
          <h1 className="text-3xl font-bold text-leaf-900">{t('step3Title')}</h1>
          <p className="mt-2 text-sm text-leaf-700">{t('step3Subtitle')}</p>

          {climateFromGps && (
            <p className="mt-4 flex items-center gap-2 rounded-2xl bg-leaf-100 px-4 py-3 text-sm text-leaf-800">
              <PinIcon />
              {t('detectedFromGps')}
            </p>
          )}

          <div className="mt-6 space-y-2">
            {availableRegions(country).map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => {
                  setClimate(region);
                  setClimateFromGps(false);
                }}
                className={`block w-full rounded-2xl border-2 px-5 py-4 text-left text-sm font-medium transition ${
                  climate === region
                    ? 'border-leaf-600 bg-leaf-50 text-leaf-900'
                    : 'border-leaf-200 text-leaf-800 hover:border-leaf-400'
                }`}
              >
                {CLIMATE_REGION_LABELS[region][locale]}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="rounded-full border border-leaf-300 px-6 py-3 text-sm font-semibold text-leaf-800 hover:bg-leaf-50"
            >
              {tCommon('onboarding.back')}
            </button>
            <button
              type="button"
              onClick={handleFinish}
              disabled={!climate || submitting}
              className="rounded-full bg-leaf-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-leaf-700 disabled:opacity-50"
            >
              {t('finish')}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

function availableRegions(country: Country): readonly ClimateRegion[] {
  return CLIMATE_REGIONS.filter((r) => {
    if (country === 'CZ') return r.startsWith('CZ-');
    if (country === 'SK') return r.startsWith('SK-');
    return r === country;
  });
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M16.667 5L7.5 14.167L3.333 10"
        stroke="currentColor"
        className="text-leaf-600"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 0a6 6 0 0 0-6 6c0 4.5 6 12 6 12s6-7.5 6-12a6 6 0 0 0-6-6Zm0 8.25A2.25 2.25 0 1 1 9 3.75a2.25 2.25 0 0 1 0 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
