'use client';

import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const LOCALES = [
  { code: 'cs', label: 'CZ' },
  { code: 'sk', label: 'SK' },
  { code: 'en', label: 'EN' },
] as const;

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const active = useLocale();
  const [pending, startTransition] = useTransition();

  function switchTo(code: 'cs' | 'sk' | 'en') {
    if (code === active) return;
    startTransition(() => {
      router.replace(pathname, { locale: code });
    });
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-leaf-200 bg-white p-0.5 shadow-sm ${className}`}
    >
      {LOCALES.map((l) => {
        const isActive = active === l.code;
        return (
          <button
            key={l.code}
            type="button"
            disabled={pending && !isActive}
            onClick={() => switchTo(l.code)}
            aria-pressed={isActive}
            className={`min-w-9 rounded-full px-2.5 py-1 text-xs font-semibold transition ${
              isActive
                ? 'bg-leaf-600 text-white shadow-sm'
                : 'text-leaf-700 hover:bg-leaf-50'
            } ${pending ? 'cursor-wait' : 'cursor-pointer'}`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
