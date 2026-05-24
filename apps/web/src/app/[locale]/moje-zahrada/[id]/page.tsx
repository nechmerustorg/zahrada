import { notFound, redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getUserSession, isOnboardingComplete } from '@/lib/auth/session';
import { getUserPlant, pickCommonName } from '@/lib/garden/queries';
import { formatLongDate } from '@/lib/garden/format';
import { PlantDetailActions } from '@/components/garden/plant-detail-actions';
import type { PlantFormValues } from '@/components/garden/plant-form';
import type { LocationType } from '@pestuj/shared';

interface PageProps {
  params: Promise<{ id: string; locale: string }>;
}

const LOCATION_LABEL_KEY: Record<LocationType, 'locationIndoor' | 'locationOutdoor' | 'locationGreenhouse' | 'locationBalcony'> = {
  indoor: 'locationIndoor',
  outdoor: 'locationOutdoor',
  greenhouse: 'locationGreenhouse',
  balcony: 'locationBalcony',
};

export default async function PlantDetailPage({ params }: PageProps) {
  const session = await getUserSession();
  if (!session) redirect('/sign-in');
  if (!isOnboardingComplete(session.profile)) redirect('/onboarding');

  const { id } = await params;
  const plant = await getUserPlant(id, session.userId);
  if (!plant) notFound();

  const t = await getTranslations('garden');
  const locale = session.profile.locale;
  const catalog = plant.plants_catalog;
  const catalogCommonName = catalog
    ? pickCommonName(catalog.common_names, locale, catalog.scientific_name)
    : null;
  const plantedLabel = formatLongDate(plant.planted_at, locale);

  const initialValues: PlantFormValues = {
    catalog_plant_id: plant.catalog_plant_id,
    catalog_label: catalogCommonName,
    custom_name: plant.custom_name,
    nickname: plant.nickname ?? '',
    planted_at: plant.planted_at ?? '',
    location_type: (plant.location_type as LocationType | null) ?? '',
    location_label: plant.location_label ?? '',
    quantity: plant.quantity ?? 1,
    notes: plant.notes ?? '',
  };

  const headline = plant.nickname || plant.custom_name;

  return (
    <main className="min-h-screen bg-gradient-to-b from-leaf-50 to-white">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <div className="text-xl font-semibold text-leaf-800">Pestuj</div>
        <Link href="/moje-zahrada" className="text-sm text-leaf-800 hover:text-leaf-600">
          {t('backToGarden')}
        </Link>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="rounded-3xl border border-leaf-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-leaf-900">{headline}</h1>
              {plant.nickname && plant.custom_name !== plant.nickname && (
                <p className="mt-1 text-leaf-700">{plant.custom_name}</p>
              )}
              {catalog ? (
                <>
                  <p className="mt-2 text-sm italic text-leaf-700">{catalog.scientific_name}</p>
                  {catalogCommonName && catalogCommonName !== plant.custom_name && (
                    <p className="text-xs text-leaf-500">{catalogCommonName}</p>
                  )}
                </>
              ) : (
                <p className="mt-2 text-sm text-leaf-600">{t('notLinkedToCatalog')}</p>
              )}
            </div>
            {plant.quantity > 1 && (
              <span className="rounded-full bg-leaf-100 px-3 py-1.5 text-sm font-medium text-leaf-800">
                {t('quantityShort', { count: plant.quantity })}
              </span>
            )}
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <Detail label={t('fieldPlantedAt')}>
              {plantedLabel ?? <span className="text-leaf-500">{t('noPlantedDate')}</span>}
            </Detail>
            <Detail label={t('fieldLocationType')}>
              {plant.location_type
                ? t(LOCATION_LABEL_KEY[plant.location_type as LocationType])
                : '—'}
            </Detail>
            <Detail label={t('fieldLocationLabel')}>
              {plant.location_label || '—'}
            </Detail>
            <Detail label={t('fieldQuantity')}>{plant.quantity}</Detail>
          </dl>

          {plant.notes && (
            <div className="mt-6">
              <h2 className="text-sm font-medium text-leaf-900">{t('fieldNotes')}</h2>
              <p className="mt-1 whitespace-pre-wrap text-leaf-800">{plant.notes}</p>
            </div>
          )}
        </div>

        <div className="mt-6">
          <PlantDetailActions
            locale={locale}
            plantId={plant.id}
            initialValues={initialValues}
          />
        </div>
      </section>
    </main>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wider text-leaf-600">{label}</dt>
      <dd className="mt-1 text-leaf-900">{children}</dd>
    </div>
  );
}
