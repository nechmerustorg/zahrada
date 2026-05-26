import { getTranslations } from 'next-intl/server';
import { AuthForm } from '@/components/auth-form';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from '@/components/language-switcher';

export default async function SignInPage() {
  const t = await getTranslations('auth');
  const tApp = await getTranslations('app');
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-leaf-50 to-white px-6 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium text-leaf-700 hover:text-leaf-900">
            ← {tApp('name')}
          </Link>
          <LanguageSwitcher />
        </div>
        <AuthForm mode="sign-in" />
        <p className="mt-8 text-sm text-leaf-700">
          {t('noAccount')}{' '}
          <Link href="/sign-up" className="font-semibold text-leaf-800 underline hover:text-leaf-900">
            {t('signUpTitle')}
          </Link>
        </p>
      </div>
    </main>
  );
}
