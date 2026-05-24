import { getTranslations } from 'next-intl/server';

export async function GardenViewToggle({ current }: { current: 'list' | 'map' }) {
  const t = await getTranslations('garden');
  return (
    <div
      role="tablist"
      className="inline-flex items-center gap-1 rounded-full border border-leaf-200 bg-white p-1 shadow-sm"
    >
      <a
        role="tab"
        aria-selected={current === 'list'}
        href="/moje-zahrada?view=list"
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
          current === 'list'
            ? 'bg-leaf-600 text-white shadow-sm'
            : 'text-leaf-700 hover:bg-leaf-50'
        }`}
      >
        {t('viewList')}
      </a>
      <a
        role="tab"
        aria-selected={current === 'map'}
        href="/moje-zahrada?view=map"
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
          current === 'map'
            ? 'bg-leaf-600 text-white shadow-sm'
            : 'text-leaf-700 hover:bg-leaf-50'
        }`}
      >
        {t('viewMap')}
      </a>
    </div>
  );
}
