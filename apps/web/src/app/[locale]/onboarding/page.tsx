import { redirect } from 'next/navigation';
import { OnboardingWizard } from '@/components/onboarding-wizard';
import { LanguageSwitcher } from '@/components/language-switcher';
import { getUserSession, isOnboardingComplete } from '@/lib/auth/session';

export default async function OnboardingPage() {
  const session = await getUserSession();
  if (!session) redirect('/sign-in');
  if (isOnboardingComplete(session.profile)) redirect('/moje-zahrada');

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-leaf-50 to-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <div className="text-xl font-semibold text-leaf-800">Pestuj</div>
        <LanguageSwitcher />
      </div>
      <div className="flex flex-1 items-start justify-center px-6 py-6">
        <OnboardingWizard initialLocale={session.profile.locale} />
      </div>
    </main>
  );
}
