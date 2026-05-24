import { redirect } from 'next/navigation';
import { OnboardingWizard } from '@/components/onboarding-wizard';
import { getUserSession, isOnboardingComplete } from '@/lib/auth/session';

export default async function OnboardingPage() {
  const session = await getUserSession();
  if (!session) redirect('/sign-in');
  if (isOnboardingComplete(session.profile)) redirect('/moje-zahrada');

  return (
    <main className="flex min-h-screen items-start justify-center bg-gradient-to-b from-leaf-50 to-white px-6 py-12">
      <OnboardingWizard initialLocale={session.profile.locale} />
    </main>
  );
}
