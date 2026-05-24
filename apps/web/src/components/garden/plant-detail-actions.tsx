'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import type { Locale } from '@pestuj/shared';
import { softDeleteUserPlant, updateUserPlant } from '@/lib/garden/actions';
import {
  PlantForm,
  type PlantFormSubmitPayload,
  type PlantFormValues,
} from './plant-form';

interface Props {
  locale: Locale;
  plantId: string;
  initialValues: PlantFormValues;
}

/**
 * Edit/delete bar shown on the plant detail page. Toggles between a
 * read-only state (just the two buttons) and an inline edit form.
 */
export function PlantDetailActions({ locale, plantId, initialValues }: Props) {
  const t = useTranslations('garden');
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [isDeleting, startDelete] = useTransition();
  const [error, setError] = useState<string | null>(null);

  async function handleEditSubmit(payload: PlantFormSubmitPayload) {
    const res = await updateUserPlant(plantId, payload);
    if (!res.ok) return { ok: false, error: res.error };
    setEditing(false);
    router.refresh();
    return { ok: true };
  }

  function handleDelete() {
    if (!confirm(t('confirmDelete'))) return;
    setError(null);
    startDelete(async () => {
      const res = await softDeleteUserPlant(plantId);
      if (!res.ok) {
        setError(res.error);
        return;
      }
      router.push('/moje-zahrada');
      router.refresh();
    });
  }

  if (editing) {
    return (
      <div className="rounded-3xl border border-leaf-200 bg-white p-6 shadow-sm sm:p-8">
        <PlantForm
          locale={locale}
          initialValues={initialValues}
          submitLabel={t('save')}
          cancelHref="#"
          onSubmit={handleEditSubmit}
          onCancel={() => setEditing(false)}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => setEditing(true)}
        className="rounded-full bg-leaf-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-leaf-700"
      >
        {t('edit')}
      </button>
      <button
        type="button"
        onClick={handleDelete}
        disabled={isDeleting}
        className="rounded-full border border-red-300 px-5 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-60"
      >
        {isDeleting ? t('deleting') : t('delete')}
      </button>
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
}
