import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@pestuj/shared';
import { Link } from '@/i18n/navigation';
import { SiteHeader } from '@/components/site-header';
import {
  getCatalogPlantBySlug,
  getCompanionDetails,
  pickCommonName,
  type LocalizedRichSection,
} from '@/lib/catalog/queries';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const plant = await getCatalogPlantBySlug(slug);
  if (!plant) return { title: 'Rostlina' };
  const name = pickCommonName(plant.common_names, locale, plant.scientific_name);
  const teaser = pickLocalized(plant.content?.planting, locale)?.slice(0, 160) ?? '';
  return {
    title: `${name} (${plant.scientific_name})`,
    description: teaser,
  };
}

export default async function CatalogDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}) {
  const { slug, locale } = await params;
  const plant = await getCatalogPlantBySlug(slug);
  if (!plant) notFound();

  const t = await getTranslations('catalog');

  const name = pickCommonName(plant.common_names, locale, plant.scientific_name);
  const companions = plant.companion_plants?.length
    ? await getCompanionDetails(plant.companion_plants)
    : [];
  const incompatible = plant.incompatible_plants?.length
    ? await getCompanionDetails(plant.incompatible_plants)
    : [];

  const sections: Array<{ key: string; text: string | null }> = [
    { key: 'sectionPlanting', text: pickLocalized(plant.content?.planting, locale) },
    { key: 'sectionWatering', text: pickLocalized(plant.content?.watering, locale) },
    { key: 'sectionFertilizing', text: pickLocalized(plant.content?.fertilizing, locale) },
    { key: 'sectionPruning', text: pickLocalized(plant.content?.pruning, locale) },
    { key: 'sectionHarvesting', text: pickLocalized(plant.content?.harvesting, locale) },
    { key: 'sectionIssues', text: pickLocalized(plant.content?.common_issues, locale) },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-leaf-50 to-white">
      <SiteHeader variant="public" />

      <section className="mx-auto max-w-4xl px-6 py-4">
        <Link href="/rostliny" className="text-sm font-medium text-leaf-700 hover:text-leaf-900">
          {t('backToCatalog')}
        </Link>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-8">
        <h1 className="text-balance text-5xl font-bold capitalize text-leaf-900">{name}</h1>
        <p className="mt-2 text-lg italic text-leaf-600">{plant.scientific_name}</p>

        <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <Fact label={t('facts.lifecycle')} value={plant.lifecycle && t(`lifecycle.${plant.lifecycle}`)} />
          <Fact label={t('facts.sun')} value={plant.sun_requirement && t(`sun.${plant.sun_requirement}`)} />
          <Fact label={t('facts.water')} value={plant.water_requirement && t(`water.${plant.water_requirement}`)} />
          {plant.family && <Fact label={t('facts.family')} value={plant.family} />}
          {plant.hardiness_min_c != null && (
            <Fact label={t('facts.hardiness')} value={t('hardinessValue', { value: plant.hardiness_min_c })} />
          )}
          {plant.soil_type?.length ? (
            <Fact label={t('facts.soil')} value={plant.soil_type.join(', ')} />
          ) : null}
        </dl>

        <Link
          href={`/moje-zahrada/pridat?catalog=${plant.slug}`}
          className="mt-8 inline-block rounded-full bg-leaf-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-leaf-700"
        >
          {t('addToGarden')}
        </Link>

        <div className="mt-12 space-y-8">
          {sections.map((s) =>
            s.text ? (
              <section key={s.key}>
                <h2 className="text-2xl font-semibold text-leaf-900">{t(s.key)}</h2>
                <p className="mt-3 whitespace-pre-line text-leaf-800">{s.text}</p>
              </section>
            ) : null,
          )}
        </div>

        {companions.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-leaf-900">{t('companions')}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {companions.map((c) => {
                const cName = pickCommonName(c.common_names, locale, c.scientific_name);
                return (
                  <li key={c.slug}>
                    <Link
                      href={`/rostliny/${c.slug}`}
                      className="rounded-full bg-leaf-100 px-4 py-2 text-sm font-medium capitalize text-leaf-800 hover:bg-leaf-200"
                    >
                      {cName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {incompatible.length > 0 && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-leaf-900">{t('incompatible')}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {incompatible.map((c) => {
                const cName = pickCommonName(c.common_names, locale, c.scientific_name);
                return (
                  <li key={c.slug}>
                    <Link
                      href={`/rostliny/${c.slug}`}
                      className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium capitalize text-red-800 hover:bg-red-100"
                    >
                      {cName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
}

function pickLocalized(section: LocalizedRichSection | undefined, locale: Locale): string | null {
  if (!section) return null;
  return section[locale] ?? section.cs ?? section.en ?? section.sk ?? null;
}

function Fact({ label, value }: { label: string; value: string | null | undefined }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wider text-leaf-600">{label}</dt>
      <dd className="mt-1 text-base font-medium text-leaf-900">{value}</dd>
    </div>
  );
}
