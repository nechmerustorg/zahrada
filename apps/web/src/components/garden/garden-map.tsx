import { getTranslations } from 'next-intl/server';
import type { Locale } from '@pestuj/shared';
import { Link } from '@/i18n/navigation';
import { pickCommonName, type UserPlantRow } from '@/lib/garden/queries';
import {
  computeUrgency,
  plantSprite,
  urgencyColor,
  urgencyLabel,
  type PlantUrgencySummary,
} from '@/lib/garden/urgency';
import type { TaskListItem } from '@/lib/garden/tasks';

interface Props {
  plants: UserPlantRow[];
  tasks: TaskListItem[];
  locale: Locale;
}

const GRID_COLS = 6;
const MIN_ROWS = 4;
const TILE = 88; // px

export async function GardenMap({ plants, tasks, locale }: Props) {
  const t = await getTranslations('garden');

  const rows = Math.max(MIN_ROWS, Math.ceil(plants.length / GRID_COLS));
  const cells = rows * GRID_COLS;

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border-4 border-leaf-800 bg-leaf-700 p-2 shadow-[0_4px_0_#1d421e]">
        <div
          className="garden-soil rounded-2xl border-2 border-leaf-900/40 p-3"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${GRID_COLS}, ${TILE}px)`,
            gridAutoRows: `${TILE}px`,
            gap: '4px',
            backgroundImage:
              'repeating-linear-gradient(0deg,#7a4a25 0,#7a4a25 4px,#6a3e1d 4px,#6a3e1d 8px),repeating-linear-gradient(90deg,#7a4a25 0,#7a4a25 4px,#6a3e1d 4px,#6a3e1d 8px)',
            backgroundBlendMode: 'multiply',
            backgroundSize: '8px 8px',
            imageRendering: 'pixelated',
          }}
        >
          {Array.from({ length: cells }, (_, i) => {
            const plant = plants[i];
            if (!plant) return <EmptyTile key={i} />;
            const summary = computeUrgency(plant.id, tasks);
            return (
              <PlantTile
                key={plant.id}
                plant={plant}
                locale={locale}
                summary={summary}
                tShortcut={{
                  due: t('urgency.dueOn'),
                  noTasks: t('urgency.allCalm'),
                }}
              />
            );
          })}
        </div>
      </div>

      <Legend t={(k) => t(`urgency.${k}`)} locale={locale} />
    </div>
  );
}

function EmptyTile() {
  return (
    <div
      aria-hidden
      className="relative flex items-center justify-center rounded-sm"
      style={{
        backgroundImage:
          'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06) 1px, transparent 2px), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.15) 1px, transparent 2px)',
        backgroundSize: '12px 12px, 16px 16px',
      }}
    />
  );
}

function PlantTile({
  plant,
  locale,
  summary,
  tShortcut,
}: {
  plant: UserPlantRow;
  locale: Locale;
  summary: PlantUrgencySummary;
  tShortcut: { due: string; noTasks: string };
}) {
  const colors = urgencyColor(summary.urgency);
  const catalog = plant.plants_catalog;
  const sprite = plantSprite(catalog?.slug, catalog?.category);
  const label =
    plant.nickname || pickCommonName(catalog?.common_names, locale, plant.custom_name);

  const tooltip =
    summary.nextDueDate && summary.urgency !== 'ok'
      ? `${tShortcut.due}: ${formatShortDate(summary.nextDueDate, locale)}`
      : tShortcut.noTasks;

  return (
    <Link
      href={`/moje-zahrada/${plant.id}`}
      title={`${label} — ${tooltip}`}
      className={`group relative flex items-center justify-center rounded-md border-2 ${colors.border} bg-leaf-50/80 transition hover:scale-105 hover:shadow-lg`}
      style={{
        boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.4), 0 2px 0 rgba(0,0,0,0.3)',
      }}
    >
      <span className="select-none text-4xl drop-shadow-[1px_1px_0_rgba(0,0,0,0.4)]">{sprite}</span>
      <span
        aria-hidden
        className={`absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-white ${colors.dot}`}
      />
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 truncate whitespace-nowrap rounded bg-leaf-900/85 px-1.5 py-0.5 text-[10px] font-medium text-white opacity-0 transition group-hover:opacity-100">
        {label}
      </span>
    </Link>
  );
}

function Legend({ t, locale }: { t: (key: string) => string; locale: Locale }) {
  const items: Array<{ key: 'overdue' | 'today' | 'soon' | 'ok' }> = [
    { key: 'overdue' },
    { key: 'today' },
    { key: 'soon' },
    { key: 'ok' },
  ];
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-leaf-700">
      <span className="font-medium uppercase tracking-wider text-leaf-600">{t('legend')}:</span>
      {items.map((i) => {
        const c = urgencyColor(i.key);
        return (
          <span key={i.key} className="flex items-center gap-1.5">
            <span className={`inline-block h-3 w-3 rounded-full border border-white ${c.dot}`} />
            {urgencyLabel(i.key, locale)}
          </span>
        );
      })}
    </div>
  );
}

function formatShortDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(
    locale === 'cs' ? 'cs-CZ' : locale === 'sk' ? 'sk-SK' : 'en-GB',
    { day: 'numeric', month: 'short' },
  ).format(new Date(iso));
}
