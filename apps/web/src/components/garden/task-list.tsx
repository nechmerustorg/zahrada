import { getTranslations } from 'next-intl/server';
import type { Locale } from '@pestuj/shared';
import { listUserTasks, completeTask, snoozeTask } from '@/lib/garden/tasks';
import { pickI18nText } from '@/lib/garden/i18n';

const DAY_MS = 86400000;

function diffDays(due: string, today: Date): number {
  const d = new Date(due);
  d.setHours(0, 0, 0, 0);
  return Math.round((d.getTime() - today.getTime()) / DAY_MS);
}

export async function TaskList({
  userId,
  locale,
}: {
  userId: string;
  locale: Locale;
}) {
  const t = await getTranslations('tasks');
  const tasks = await listUserTasks({ userId, windowEndDays: 14 });
  if (tasks.length === 0) {
    return (
      <section className="rounded-3xl border-2 border-dashed border-leaf-200 bg-white px-6 py-8 text-center text-sm text-leaf-600">
        {t('empty')}
      </section>
    );
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const groups: Record<string, typeof tasks> = { overdue: [], today: [], soon: [] };
  for (const task of tasks) {
    const diff = diffDays(task.due_date, today);
    if (diff < 0) groups.overdue!.push(task);
    else if (diff === 0) groups.today!.push(task);
    else groups.soon!.push(task);
  }

  return (
    <div className="space-y-6">
      {groups.overdue!.length > 0 && (
        <TaskGroup
          title={t('overdueTitle', { count: groups.overdue!.length })}
          tasks={groups.overdue!}
          locale={locale}
          tone="overdue"
        />
      )}
      {groups.today!.length > 0 && (
        <TaskGroup
          title={t('todayTitle')}
          tasks={groups.today!}
          locale={locale}
          tone="today"
        />
      )}
      {groups.soon!.length > 0 && (
        <TaskGroup
          title={t('upcomingTitle')}
          tasks={groups.soon!}
          locale={locale}
          tone="soon"
        />
      )}
    </div>
  );
}

async function TaskGroup({
  title,
  tasks,
  locale,
  tone,
}: {
  title: string;
  tasks: Awaited<ReturnType<typeof listUserTasks>>;
  locale: Locale;
  tone: 'overdue' | 'today' | 'soon';
}) {
  const t = await getTranslations('tasks');
  const toneClass =
    tone === 'overdue'
      ? 'border-red-300 bg-red-50'
      : tone === 'today'
        ? 'border-leaf-400 bg-leaf-50'
        : 'border-leaf-200 bg-white';

  return (
    <section>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-leaf-700">
        {title}
      </h3>
      <ul className="space-y-2">
        {tasks.map((task) => {
          const title = pickI18nText(task.title_i18n, locale);
          const instructions = task.instructions_i18n
            ? pickI18nText(task.instructions_i18n, locale)
            : null;
          return (
            <li
              key={task.id}
              className={`flex flex-col gap-3 rounded-2xl border ${toneClass} px-5 py-4 sm:flex-row sm:items-center sm:justify-between`}
            >
              <div className="min-w-0">
                <p className="font-semibold text-leaf-900">{title}</p>
                {instructions && (
                  <p className="mt-0.5 text-sm text-leaf-700">{instructions}</p>
                )}
                <p className="mt-1 text-xs text-leaf-500">
                  {new Intl.DateTimeFormat(locale === 'cs' ? 'cs-CZ' : locale === 'sk' ? 'sk-SK' : 'en-GB', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                  }).format(new Date(task.due_date))}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <form action={snoozeTask}>
                  <input type="hidden" name="taskId" value={task.id} />
                  <input type="hidden" name="days" value="1" />
                  <button
                    type="submit"
                    className="rounded-full border border-leaf-300 bg-white px-4 py-2 text-sm font-medium text-leaf-800 hover:bg-leaf-50"
                  >
                    {t('snoozeOneDay')}
                  </button>
                </form>
                <form action={completeTask}>
                  <input type="hidden" name="taskId" value={task.id} />
                  <button
                    type="submit"
                    className="rounded-full bg-leaf-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-leaf-700"
                  >
                    {t('complete')}
                  </button>
                </form>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
