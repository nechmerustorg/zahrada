'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { useTranslations } from 'next-intl';
import { LOCATION_TYPES, type LocationType, type Locale } from '@pestuj/shared';
import { searchCatalog } from '@/lib/garden/actions';
import type { CatalogLite } from '@/lib/garden/queries';

export interface PlantFormValues {
  catalog_plant_id: string | null;
  catalog_label: string | null;
  custom_name: string;
  nickname: string;
  planted_at: string;
  location_type: LocationType | '';
  location_label: string;
  quantity: number;
  notes: string;
}

export interface PlantFormSubmitPayload {
  catalog_plant_id: string | null;
  custom_name: string;
  nickname: string | null;
  planted_at: string | null;
  location_type: LocationType | null;
  location_label: string | null;
  quantity: number;
  notes: string | null;
}

export interface PlantFormSubmitResult {
  ok: boolean;
  error?: string;
}

interface PlantFormProps {
  locale: Locale;
  initialValues: PlantFormValues;
  submitLabel: string;
  cancelHref: string;
  onSubmit: (payload: PlantFormSubmitPayload) => Promise<PlantFormSubmitResult>;
  onCancel?: () => void;
}

const LOCATION_TYPE_KEYS: Record<LocationType, 'locationIndoor' | 'locationOutdoor' | 'locationGreenhouse' | 'locationBalcony'> = {
  indoor: 'locationIndoor',
  outdoor: 'locationOutdoor',
  greenhouse: 'locationGreenhouse',
  balcony: 'locationBalcony',
};

/**
 * Shared add/edit form. Catalog autocomplete is debounced (250 ms);
 * picking a result fills `catalog_plant_id` and pre-fills `custom_name`
 * if it's still empty.
 */
export function PlantForm({
  locale,
  initialValues,
  submitLabel,
  cancelHref,
  onSubmit,
  onCancel,
}: PlantFormProps) {
  const t = useTranslations('garden');
  const [values, setValues] = useState<PlantFormValues>(initialValues);
  const [query, setQuery] = useState(initialValues.catalog_label ?? '');
  const [results, setResults] = useState<CatalogLite[]>([]);
  const [searching, setSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  function update<K extends keyof PlantFormValues>(key: K, value: PlantFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleQueryChange(next: string) {
    setQuery(next);
    // If the user edits the catalog search away from the picked label,
    // detach the catalog id so we don't end up with stale links.
    if (values.catalog_plant_id && next !== values.catalog_label) {
      setValues((prev) => ({ ...prev, catalog_plant_id: null, catalog_label: null }));
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (next.trim().length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      setSearching(true);
      try {
        const rows = await searchCatalog(next, locale);
        setResults(rows);
        setShowResults(true);
      } catch (err) {
        console.error('catalog search failed', err);
      } finally {
        setSearching(false);
      }
    }, 250);
  }

  function selectCatalog(row: CatalogLite) {
    setValues((prev) => ({
      ...prev,
      catalog_plant_id: row.id,
      catalog_label: row.common_name,
      // Only prefill custom_name when the field is empty so we don't
      // overwrite something the user typed deliberately.
      custom_name: prev.custom_name.trim() ? prev.custom_name : row.common_name,
    }));
    setQuery(row.common_name);
    setShowResults(false);
  }

  function clearCatalog() {
    setValues((prev) => ({ ...prev, catalog_plant_id: null, catalog_label: null }));
    setQuery('');
    setResults([]);
    setShowResults(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (!values.custom_name.trim()) {
      setError('custom_name_required');
      return;
    }
    const payload: PlantFormSubmitPayload = {
      catalog_plant_id: values.catalog_plant_id,
      custom_name: values.custom_name.trim(),
      nickname: values.nickname.trim() || null,
      planted_at: values.planted_at || null,
      location_type: values.location_type === '' ? null : values.location_type,
      location_label: values.location_label.trim() || null,
      quantity: Number.isFinite(values.quantity) && values.quantity > 0 ? Math.floor(values.quantity) : 1,
      notes: values.notes.trim() || null,
    };
    startTransition(async () => {
      const res = await onSubmit(payload);
      if (!res.ok) setError(res.error ?? 'submit_failed');
    });
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-leaf-900" htmlFor="catalog-search">
          {t('searchCatalog')}
        </label>
        <div className="relative">
          <input
            id="catalog-search"
            type="text"
            autoComplete="off"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onFocus={() => results.length > 0 && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 150)}
            placeholder={t('searchCatalog')}
            className="mt-1 w-full rounded-2xl border border-leaf-300 bg-white px-4 py-3 text-base text-leaf-900 outline-none transition focus:border-leaf-600"
          />
          {showResults && (results.length > 0 || searching) && (
            <ul
              role="listbox"
              className="absolute z-10 mt-1 max-h-72 w-full overflow-auto rounded-2xl border border-leaf-200 bg-white py-1 shadow-lg"
            >
              {searching && results.length === 0 && (
                <li className="px-4 py-2 text-sm text-leaf-600">…</li>
              )}
              {results.map((row) => (
                <li key={row.id}>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      selectCatalog(row);
                    }}
                    className="flex w-full flex-col items-start px-4 py-2 text-left transition hover:bg-leaf-50"
                  >
                    <span className="text-sm font-medium text-leaf-900">{row.common_name}</span>
                    <span className="text-xs italic text-leaf-600">{row.scientific_name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {values.catalog_plant_id ? (
          <button
            type="button"
            onClick={clearCatalog}
            className="mt-2 text-xs text-leaf-700 underline hover:text-leaf-900"
          >
            {t('clearCatalog')}
          </button>
        ) : (
          <p className="mt-2 text-xs text-leaf-600">{t('searchHint')}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('fieldCustomName')} htmlFor="custom_name" required>
          <input
            id="custom_name"
            type="text"
            required
            value={values.custom_name}
            onChange={(e) => update('custom_name', e.target.value)}
            className="mt-1 w-full rounded-2xl border border-leaf-300 bg-white px-4 py-3 text-base text-leaf-900 outline-none transition focus:border-leaf-600"
          />
        </Field>
        <Field label={t('fieldNickname')} htmlFor="nickname">
          <input
            id="nickname"
            type="text"
            value={values.nickname}
            onChange={(e) => update('nickname', e.target.value)}
            placeholder="Tonda raja"
            className="mt-1 w-full rounded-2xl border border-leaf-300 bg-white px-4 py-3 text-base text-leaf-900 outline-none transition focus:border-leaf-600"
          />
        </Field>
        <Field label={t('fieldPlantedAt')} htmlFor="planted_at">
          <input
            id="planted_at"
            type="date"
            value={values.planted_at}
            onChange={(e) => update('planted_at', e.target.value)}
            className="mt-1 w-full rounded-2xl border border-leaf-300 bg-white px-4 py-3 text-base text-leaf-900 outline-none transition focus:border-leaf-600"
          />
        </Field>
        <Field label={t('fieldQuantity')} htmlFor="quantity">
          <input
            id="quantity"
            type="number"
            min={1}
            max={1000}
            step={1}
            value={values.quantity}
            onChange={(e) => update('quantity', Number(e.target.value))}
            className="mt-1 w-full rounded-2xl border border-leaf-300 bg-white px-4 py-3 text-base text-leaf-900 outline-none transition focus:border-leaf-600"
          />
        </Field>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-leaf-900">{t('fieldLocationType')}</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {LOCATION_TYPES.map((type) => (
            <label
              key={type}
              className={`cursor-pointer rounded-2xl border-2 px-3 py-2 text-center text-sm font-medium transition ${
                values.location_type === type
                  ? 'border-leaf-600 bg-leaf-50 text-leaf-900'
                  : 'border-leaf-200 text-leaf-800 hover:border-leaf-400'
              }`}
            >
              <input
                type="radio"
                name="location_type"
                value={type}
                checked={values.location_type === type}
                onChange={() => update('location_type', type)}
                className="sr-only"
              />
              {t(LOCATION_TYPE_KEYS[type])}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label={t('fieldLocationLabel')} htmlFor="location_label">
        <input
          id="location_label"
          type="text"
          value={values.location_label}
          onChange={(e) => update('location_label', e.target.value)}
          placeholder="Záhonek u plotu"
          className="mt-1 w-full rounded-2xl border border-leaf-300 bg-white px-4 py-3 text-base text-leaf-900 outline-none transition focus:border-leaf-600"
        />
      </Field>

      <Field label={t('fieldNotes')} htmlFor="notes">
        <textarea
          id="notes"
          rows={4}
          value={values.notes}
          onChange={(e) => update('notes', e.target.value)}
          className="mt-1 w-full rounded-2xl border border-leaf-300 bg-white px-4 py-3 text-base text-leaf-900 outline-none transition focus:border-leaf-600"
        />
      </Field>

      {error && (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>
      )}

      <div className="flex flex-wrap items-center justify-end gap-3">
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full border border-leaf-300 px-5 py-3 text-sm font-semibold text-leaf-800 hover:bg-leaf-50"
          >
            {t('cancel')}
          </button>
        ) : (
          <a
            href={cancelHref}
            className="rounded-full border border-leaf-300 px-5 py-3 text-sm font-semibold text-leaf-800 hover:bg-leaf-50"
          >
            {t('cancel')}
          </a>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-leaf-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-leaf-700 disabled:opacity-60"
        >
          {isPending ? t('saving') : submitLabel}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-leaf-900">
        {label}
        {required && <span className="ml-0.5 text-leaf-700">*</span>}
      </label>
      {children}
    </div>
  );
}
