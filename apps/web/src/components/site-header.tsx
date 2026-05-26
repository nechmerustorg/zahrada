import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './language-switcher';
import { getUserSession } from '@/lib/auth/session';

interface Props {
  variant?: 'public' | 'app';
}

export async function SiteHeader({ variant = 'public' }: Props) {
  const tNav = await getTranslations('nav');
  const tApp = await getTranslations('app');
  const session = await getUserSession();
  const isSignedIn = Boolean(session);

  return (
    <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5">
      <Link href="/" className="text-xl font-semibold text-leaf-800 hover:text-leaf-900">
        {tApp('name')}
      </Link>

      {variant === 'public' && (
        <nav className="hidden items-center gap-5 text-sm text-leaf-800 sm:flex">
          <Link href="/rostliny" className="hover:text-leaf-600">
            {tNav('catalog')}
          </Link>
          <Link href="/predplatne" className="hover:text-leaf-600">
            {tNav('subscription')}
          </Link>
        </nav>
      )}

      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        {isSignedIn ? (
          <form action="/sign-out" method="post">
            <button
              type="submit"
              className="rounded-full border border-leaf-300 px-4 py-2 text-sm font-medium text-leaf-800 hover:bg-leaf-50"
            >
              {tNav('signOut')}
            </button>
          </form>
        ) : (
          <Link
            href="/sign-in"
            className="rounded-full bg-leaf-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-leaf-700"
          >
            {tNav('signIn')}
          </Link>
        )}
      </div>
    </header>
  );
}
