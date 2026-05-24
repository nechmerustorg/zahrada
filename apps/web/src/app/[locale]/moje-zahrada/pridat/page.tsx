import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getUserSession, isOnboardingComplete } from '@/lib/auth/session';
import { getCatalogBySlug } from '@/lib/garden/queries';
import { AddPlantForm } from '@/components/garden/add-plant-form';

interface PageProps {
  searchParams: Promise<{ catalog?: string }>;
}

export default async function AddPlantPage({ searchParams }: PageProps) {
  const session = await getUserSession();
  if (!session) redirect('/sign-in');
  if (!isOnboardingComplete(session.profile)) redirect('/onboarding');

  const t = await getTranslations('garden');
  const { catalog } = await searchParams;

  const initialCatalog = catalog ? await getCatalogBySlug(catalog) : null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-leaf-50 to-white">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <div className="text-xl font-semibold text-leaf-800">Pestuj</div>
        <Link
          href="/moje-zahrada"
          className="text-sm text-leaf-800 hover:text-leaf-600"
        >
          {t('backToGarden')}
        </Link>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-3xl font-bold text-leaf-900">{t('addPlantTitle')}</h1>
        <div className="mt-8 rounded-3xl border border-leaf-200 bg-white p-6 shadow-sm sm:p-8">
          <AddPlantForm
            locale={session.profile.locale}
            initialCatalog={
              initialCatalog
                ? { id: initialCatalog.id, common_name: initialCatalog.common_name }
                : null
            }
            submitLabel={t('save')}
          />
        </div>
      </section>
    </main>
  );
}
