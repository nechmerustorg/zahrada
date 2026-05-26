import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getUserSession, isOnboardingComplete } from '@/lib/auth/session';
import { getCatalogBySlug } from '@/lib/garden/queries';
import { AddPlantForm } from '@/components/garden/add-plant-form';
import { SiteHeader } from '@/components/site-header';

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
      <SiteHeader variant="app" />

      <section className="mx-auto max-w-3xl px-6 py-6">
        <Link href="/moje-zahrada" className="text-sm font-medium text-leaf-700 hover:text-leaf-900">
          {t('backToGarden')}
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-10">
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
