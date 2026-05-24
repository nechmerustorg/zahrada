import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { CLIMATE_REGION_LABELS } from '@pestuj/shared';
import { Link } from '@/i18n/navigation';
import { getUserSession, isOnboardingComplete } from '@/lib/auth/session';
import { listUserPlants } from '@/lib/garden/queries';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { generateTasksForAllUserPlants } from '@/lib/garden/task-engine';
import { listUserTasks } from '@/lib/garden/tasks';
import { TaskList } from '@/components/garden/task-list';
import { GardenList } from '@/components/garden/garden-list';
import { GardenMap } from '@/components/garden/garden-map';
import { GardenViewToggle } from '@/components/garden/view-toggle';

export default async function GardenPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const session = await getUserSession();
  if (!session) redirect('/sign-in');
  if (!isOnboardingComplete(session.profile)) redirect('/onboarding');

  const sp = await searchParams;
  const view: 'list' | 'map' = sp.view === 'map' ? 'map' : 'list';

  const t = await getTranslations('garden');
  const tTasks = await getTranslations('tasks');
  const locale = session.profile.locale;
  const regionLabel =
    session.profile.climateZone && CLIMATE_REGION_LABELS[session.profile.climateZone][locale];

  const plants = await listUserPlants(session.userId);

  // Lazy backfill: if the user has plants but no pending tasks, seed them now.
  if (plants.length > 0) {
    const supabase = await createSupabaseServerClient();
    const { count } = await supabase
      .from('care_tasks')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', session.userId)
      .in('status', ['pending', 'overdue']);
    if (!count) {
      await generateTasksForAllUserPlants(supabase, session.userId).catch(() => {});
    }
  }

  const tasks = plants.length > 0 ? await listUserTasks({ userId: session.userId, windowEndDays: 14 }) : [];

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

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-leaf-900">{t('title')}</h1>
            {session.profile.displayName && (
              <p className="mt-2 text-leaf-700">
                {t('greetingDisplayName', { name: session.profile.displayName })}
              </p>
            )}
            {regionLabel && (
              <p className="text-sm text-leaf-600">{t('regionLine', { region: regionLabel })}</p>
            )}
          </div>
          {plants.length > 0 && (
            <Link
              href="/moje-zahrada/pridat"
              className="rounded-full bg-leaf-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-leaf-700"
            >
              {t('addPlant')}
            </Link>
          )}
        </div>

        {plants.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-4 text-xl font-semibold text-leaf-900">{tTasks('sectionTitle')}</h2>
            <TaskList userId={session.userId} locale={locale} />
          </div>
        )}

        {plants.length === 0 ? (
          <div className="mt-10 rounded-3xl border-2 border-dashed border-leaf-200 bg-white px-8 py-16 text-center">
            <div
              aria-hidden
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-leaf-100 text-4xl"
            >
              🌱
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-leaf-900">{t('emptyTitle')}</h2>
            <p className="mx-auto mt-2 max-w-md text-leaf-700">{t('emptyBody')}</p>
            <Link
              href="/moje-zahrada/pridat"
              className="mt-6 inline-block rounded-full bg-leaf-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-leaf-700"
            >
              {t('addPlant')}
            </Link>
          </div>
        ) : (
          <div className="mt-12">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-leaf-900">{t('plantsHeading')}</h2>
              <GardenViewToggle current={view} />
            </div>
            {view === 'map' ? (
              <GardenMap plants={plants} tasks={tasks} locale={locale} />
            ) : (
              <GardenList plants={plants} tasks={tasks} locale={locale} />
            )}
          </div>
        )}
      </section>
    </main>
  );
}
