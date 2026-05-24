'use client';

import type { Locale } from '@pestuj/shared';
import { addUserPlant } from '@/lib/garden/actions';
import { PlantForm, type PlantFormSubmitPayload, type PlantFormValues } from './plant-form';

interface Props {
  locale: Locale;
  initialCatalog: { id: string; common_name: string } | null;
  submitLabel: string;
}

export function AddPlantForm({ locale, initialCatalog, submitLabel }: Props) {
  const initialValues: PlantFormValues = {
    catalog_plant_id: initialCatalog?.id ?? null,
    catalog_label: initialCatalog?.common_name ?? null,
    custom_name: initialCatalog?.common_name ?? '',
    nickname: '',
    planted_at: '',
    location_type: '',
    location_label: '',
    quantity: 1,
    notes: '',
  };

  async function handleSubmit(payload: PlantFormSubmitPayload) {
    // The server action redirects on success and never returns; only an
    // error path reaches here.
    const res = await addUserPlant(payload);
    if (res && !res.ok) return { ok: false, error: res.error };
    return { ok: true };
  }

  return (
    <PlantForm
      locale={locale}
      initialValues={initialValues}
      submitLabel={submitLabel}
      cancelHref="/moje-zahrada"
      onSubmit={handleSubmit}
    />
  );
}
