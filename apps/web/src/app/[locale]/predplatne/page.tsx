import { getTranslations } from 'next-intl/server';
import { TIER_PRICES_CZK, TIER_DIAGNOSIS_QUOTA_PER_MONTH } from '@pestuj/shared';
import { Link } from '@/i18n/navigation';

export default async function PricingPage() {
  const t = await getTranslations('pricing');

  const tiers = [
    {
      key: 'monthly' as const,
      price: TIER_PRICES_CZK.monthly,
      perKey: 'perMonth' as const,
      quota: TIER_DIAGNOSIS_QUOTA_PER_MONTH.monthly,
      highlight: false,
    },
    {
      key: 'yearly' as const,
      price: TIER_PRICES_CZK.yearly,
      perKey: 'perYear' as const,
      quota: TIER_DIAGNOSIS_QUOTA_PER_MONTH.yearly,
      saveAmount: TIER_PRICES_CZK.monthly * 12 - TIER_PRICES_CZK.yearly,
      highlight: true,
    },
    {
      key: 'family' as const,
      price: TIER_PRICES_CZK.family,
      perKey: 'perMonth' as const,
      quota: TIER_DIAGNOSIS_QUOTA_PER_MONTH.family,
      highlight: false,
      familyNote: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-leaf-50 to-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-xl font-semibold text-leaf-800">
          Pestuj
        </Link>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-balance text-center text-4xl font-bold text-leaf-900 sm:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-3 text-center text-lg text-leaf-700">{t('subtitle')}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.key}
              className={`rounded-3xl border-2 p-8 ${
                tier.highlight ? 'border-leaf-600 bg-leaf-50 shadow-lg' : 'border-leaf-200 bg-white'
              }`}
            >
              <h2 className="text-xl font-semibold text-leaf-900">{t(tier.key)}</h2>
              <p className="mt-4 text-4xl font-bold text-leaf-900">
                {tier.price.toLocaleString('cs-CZ')} Kč
                <span className="ml-1 text-base font-normal text-leaf-700">{t(tier.perKey)}</span>
              </p>
              {'saveAmount' in tier && tier.saveAmount && (
                <p className="mt-2 text-sm font-medium text-leaf-700">
                  {t('save', { amount: tier.saveAmount.toLocaleString('cs-CZ') })}
                </p>
              )}

              <ul className="mt-6 space-y-2 text-sm text-leaf-800">
                <li>✓ {t('diagnosesPerMonth', { count: tier.quota })}</li>
                <li>✓ {t('unlimitedPlants')}</li>
                <li>✓ {t('pushNotifications')}</li>
                {tier.familyNote && <li>✓ {t('familyFeature')}</li>}
              </ul>

              <button
                type="button"
                disabled
                className="mt-8 w-full rounded-full bg-leaf-600 px-6 py-3 text-sm font-semibold text-white opacity-60"
              >
                {t('selectPlan')}
              </button>
              <p className="mt-2 text-center text-xs text-leaf-500">(Stripe — W6)</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-leaf-600">{t('moneyBack')}</p>
      </section>
    </main>
  );
}
