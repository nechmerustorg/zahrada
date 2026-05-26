import { getTranslations } from 'next-intl/server';
import { PLANT_CATEGORIES, type PlantCategory, type Locale } from '@pestuj/shared';
import { Link } from '@/i18n/navigation';
import { listCatalogPlants, pickCommonName } from '@/lib/catalog/queries';
import { SiteHeader } from '@/components/site-header';

const CATEGORY_FILTERS: Array<{ value: PlantCategory; key: string }> = [
  { value: 'vegetable', key: 'filterVegetables' },
  { value: 'herb', key: 'filterHerbs' },
  { value: 'fruit', key: 'filterFruits' },
  { value: 'ornamental', key: 'filterOrnamentals' },
  { value: 'houseplant', key: 'filterHouseplants' },
  { value: 'tree', key: 'filterTrees' },
  { value: 'shrub', key: 'filterShrubs' },
];

const CATEGORY_EMOJI: Record<PlantCategory, string> = {
  vegetable: '🥬',
  herb: '🌿',
  fruit: '🍎',
  ornamental: '🌸',
  houseplant: '🪴',
  tree: '🌳',
  shrub: '🌳',
};

export default async function CatalogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  const t = await getTranslations('catalog');

  const category =
    sp.category && (PLANT_CATEGORIES as readonly string[]).includes(sp.category)
      ? (sp.category as PlantCategory)
      : undefined;
  const search = sp.q?.trim() || undefined;

  const plants = await listCatalogPlants({ search, category, locale });

  return (
    <main className="min-h-screen bg-gradient-to-b from-leaf-50 to-white">
      <SiteHeader variant="public" />

      <section className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="text-4xl font-bold text-leaf-900 sm:text-5xl">{t('title')}</h1>
        <p className="mt-2 max-w-2xl text-leaf-700">{t('subtitle')}</p>

        <form className="mt-6 flex flex-col gap-3 sm:flex-row" method="get">
          <input
            type="search"
            name="q"
            defaultValue={search ?? ''}
            placeholder={t('searchPlaceholder')}
            className="flex-1 rounded-2xl border border-leaf-300 bg-white px-5 py-3 text-base text-leaf-900 placeholder-leaf-400 focus:border-leaf-500 focus:outline-none focus:ring-2 focus:ring-leaf-500/30"
          />
          {category && <input type="hidden" name="category" value={category} />}
          <button
            type="submit"
            className="rounded-2xl bg-leaf-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-leaf-700"
          >
            {t('searchPlaceholder').replace('…', '')}
          </button>
        </form>

        <nav className="mt-4 flex flex-wrap gap-2">
          <CategoryChip
            href={search ? `/rostliny?q=${encodeURIComponent(search)}` : '/rostliny'}
            active={!category}
            label={t('filterAll')}
          />
          {CATEGORY_FILTERS.map((f) => {
            const params = new URLSearchParams();
            if (search) params.set('q', search);
            params.set('category', f.value);
            return (
              <CategoryChip
                key={f.value}
                href={`/rostliny?${params.toString()}`}
                active={category === f.value}
                label={t(f.key)}
              />
            );
          })}
        </nav>

        <p className="mt-6 text-sm text-leaf-700">
          {t('resultsCount', { count: plants.length })}
        </p>

        {plants.length === 0 ? (
          <div className="mt-8 rounded-3xl border-2 border-dashed border-leaf-200 bg-white px-8 py-16 text-center">
            <p className="text-leaf-700">{t('noResults')}</p>
          </div>
        ) : (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {plants.map((p) => {
              const name = pickCommonName(p.common_names, locale, p.scientific_name);
              return (
                <li key={p.id}>
                  <Link
                    href={`/rostliny/${p.slug}`}
                    className="flex h-full flex-col rounded-3xl border border-leaf-200 bg-white p-5 shadow-sm transition hover:border-leaf-400 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="text-xl font-semibold capitalize text-leaf-900">{name}</h2>
                      <span className="shrink-0 text-2xl" aria-hidden>
                        {CATEGORY_EMOJI[p.category]}
                      </span>
                    </div>
                    <p className="mt-1 text-sm italic text-leaf-600">{p.scientific_name}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.lifecycle && (
                        <Tag label={t(`lifecycle.${p.lifecycle}`)} />
                      )}
                      {p.sun_requirement && (
                        <Tag label={t(`sun.${p.sun_requirement}`)} />
                      )}
                      {p.water_requirement && (
                        <Tag label={t(`water.${p.water_requirement}`)} />
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

function CategoryChip({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <a
      href={href}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? 'border-leaf-600 bg-leaf-600 text-white'
          : 'border-leaf-300 bg-white text-leaf-800 hover:bg-leaf-50'
      }`}
    >
      {label}
    </a>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-leaf-100 px-2.5 py-1 text-xs font-medium text-leaf-800">
      {label}
    </span>
  );
}
