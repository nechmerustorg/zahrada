import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { SiteHeader } from '@/components/site-header';

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-gradient-to-b from-leaf-50 to-white">
      <SiteHeader variant="public" />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-balance text-5xl font-bold leading-tight text-leaf-900 sm:text-6xl">
          {t('landing.heroTitle')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-leaf-800">{t('landing.heroSubtitle')}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/sign-up"
            className="rounded-full bg-leaf-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-leaf-700"
          >
            {t('landing.ctaPrimary')}
          </Link>
          <Link
            href="/rostliny"
            className="rounded-full border border-leaf-300 px-6 py-3 text-base font-semibold text-leaf-800 hover:bg-leaf-50"
          >
            {t('landing.ctaSecondary')}
          </Link>
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-leaf-700">
        © {new Date().getFullYear()} {t('app.name')}
      </footer>
    </main>
  );
}
