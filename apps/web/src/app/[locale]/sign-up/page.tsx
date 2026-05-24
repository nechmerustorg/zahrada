import { getTranslations } from 'next-intl/server';
import { AuthForm } from '@/components/auth-form';
import { Link } from '@/i18n/navigation';

export default async function SignUpPage() {
  const t = await getTranslations('auth');
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-leaf-50 to-white px-6 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-leaf-700 hover:text-leaf-900">
          ← Pestuj
        </Link>
        <AuthForm mode="sign-up" />
        <p className="mt-8 text-sm text-leaf-700">
          {t('haveAccount')}{' '}
          <Link href="/sign-in" className="font-semibold text-leaf-800 underline hover:text-leaf-900">
            {t('signInTitle')}
          </Link>
        </p>
      </div>
    </main>
  );
}
