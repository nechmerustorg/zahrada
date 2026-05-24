import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { CLIMATE_REGION_LABELS } from '@pestuj/shared';
import { getUserSession, isOnboardingComplete } from '@/lib/auth/session';

export default async function GardenPage() {
  const session = await getUserSession();
  if (!session) redirect('/sign-in');
  if (!isOnboardingComplete(session.profile)) redirect('/onboarding');

  const t = await getTranslations('garden');
  const regionLabel =
    session.profile.climateZone &&
    CLIMATE_REGION_LABELS[session.profile.climateZone][session.profile.locale];

  return (
    <main className="min-h-screen bg-gradient-to-b from-leaf-50 to-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="text-xl font-semibold text-leaf-800">Pestuj</div>
        <form action="/sign-out" method="post">
          <button
            type="submit"
            className="rounded-full border border-leaf-300 px-4 py-2 text-sm text-leaf-800 hover:bg-leaf-50"
          >
            Odhlásit
          </button>
        </form>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold text-leaf-900">{t('title')}</h1>
        {session.profile.displayName && (
          <p className="mt-2 text-leaf-700">
            Ahoj, {session.profile.displayName}! {regionLabel && `Region: ${regionLabel}`}
          </p>
        )}

        <div className="mt-12 rounded-3xl border-2 border-dashed border-leaf-200 bg-white px-8 py-16 text-center">
          <p className="text-lg text-leaf-700">{t('empty')}</p>
          <button
            type="button"
            disabled
            className="mt-6 rounded-full bg-leaf-600 px-6 py-3 text-sm font-semibold text-white opacity-60"
          >
            {t('addPlant')}
          </button>
          <p className="mt-3 text-xs text-leaf-500">(brzy — W3)</p>
        </div>
      </section>
    </main>
  );
}
