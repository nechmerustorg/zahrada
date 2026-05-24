import { getTranslations } from 'next-intl/server';
import type { Locale } from '@pestuj/shared';
import { Link } from '@/i18n/navigation';
import { pickCommonName, type UserPlantRow } from '@/lib/garden/queries';
import { formatPlantedSince } from '@/lib/garden/format';
import {
  computeUrgency,
  plantSprite,
  urgencyColor,
  urgencyLabel,
} from '@/lib/garden/urgency';
import type { TaskListItem } from '@/lib/garden/tasks';

interface Props {
  plants: UserPlantRow[];
  tasks: TaskListItem[];
  locale: Locale;
}

export async function GardenList({ plants, tasks, locale }: Props) {
  const t = await getTranslations('garden');

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {plants.map((plant) => {
        const headline = plant.nickname || plant.custom_name;
        const scientific = plant.plants_catalog?.scientific_name ?? null;
        const sinceLabel = formatPlantedSince(plant.planted_at, locale);
        const commonCatalogName = plant.plants_catalog
          ? pickCommonName(
              plant.plants_catalog.common_names,
              locale,
              plant.plants_catalog.scientific_name,
            )
          : null;
        const summary = computeUrgency(plant.id, tasks);
        const sprite = plantSprite(plant.plants_catalog?.slug, plant.plants_catalog?.category);
        const c = urgencyColor(summary.urgency);
        return (
          <li key={plant.id}>
            <Link
              href={`/moje-zahrada/${plant.id}`}
              className="flex h-full flex-col rounded-3xl border border-leaf-200 bg-white p-5 shadow-sm transition hover:border-leaf-400 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 ${c.border} ${c.bg} text-2xl`}
                >
                  {sprite}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="truncate text-xl font-semibold text-leaf-900">{headline}</h2>
                    {plant.quantity > 1 && (
                      <span className="shrink-0 rounded-full bg-leaf-100 px-2.5 py-1 text-xs font-medium text-leaf-800">
                        {t('quantityShort', { count: plant.quantity })}
                      </span>
                    )}
                  </div>
                  {plant.nickname && plant.custom_name !== plant.nickname && (
                    <p className="mt-0.5 truncate text-sm text-leaf-700">{plant.custom_name}</p>
                  )}
                  {scientific && (
                    <p className="mt-0.5 truncate text-sm italic text-leaf-600">{scientific}</p>
                  )}
                  {commonCatalogName && commonCatalogName !== plant.custom_name && (
                    <p className="mt-0.5 truncate text-xs text-leaf-500">{commonCatalogName}</p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}
                >
                  <span aria-hidden className={`inline-block h-2 w-2 rounded-full ${c.dot}`} />
                  {urgencyLabel(summary.urgency, locale)}
                  {summary.urgency !== 'ok' && (
                    <>
                      {' · '}
                      {summary.overdueCount + summary.todayCount + summary.soonCount}{' '}
                      {t('urgency.tasksShort')}
                    </>
                  )}
                </span>
              </div>

              <div className="mt-auto pt-4 text-sm text-leaf-700">
                {plant.location_label && <p>{plant.location_label}</p>}
                {sinceLabel && <p className="text-leaf-600">{sinceLabel}</p>}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
