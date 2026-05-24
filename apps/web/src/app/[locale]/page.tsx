import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-gradient-to-b from-leaf-50 to-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="text-xl font-semibold text-leaf-800">{t('app.name')}</div>
        <nav className="flex items-center gap-4 text-sm text-leaf-800">
          <Link href="/rostliny" className="hover:text-leaf-600">
            {t('nav.catalog')}
          </Link>
          <Link href="/predplatne" className="hover:text-leaf-600">
            {t('nav.subscription')}
          </Link>
          <Link
            href="/sign-in"
            className="rounded-full bg-leaf-600 px-4 py-2 text-white hover:bg-leaf-700"
          >
            {t('nav.signIn')}
          </Link>
        </nav>
      </header>

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
