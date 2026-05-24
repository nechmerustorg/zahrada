import { z } from 'zod';
import { SUPPORTED_LOCALES, COUNTRIES, CLIMATE_REGIONS } from '../domain/region';
import { LOCATION_TYPES } from '../domain/plant';

export const localeSchema = z.enum(SUPPORTED_LOCALES);
export const countrySchema = z.enum(COUNTRIES);
export const climateRegionSchema = z.enum(CLIMATE_REGIONS);

export const profileUpdateSchema = z.object({
  display_name: z.string().min(1).max(60).optional(),
  locale: localeSchema.optional(),
  country: countrySchema.optional(),
  climate_zone: climateRegionSchema.optional(),
  postal_code: z.string().max(10).optional().nullable(),
});
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;

export const userPlantInputSchema = z.object({
  catalog_plant_id: z.string().uuid().nullable().optional(),
  custom_name: z.string().min(1).max(100),
  nickname: z.string().max(60).optional().nullable(),
  planted_at: z.string().date().optional().nullable(),
  location_label: z.string().max(100).optional().nullable(),
  location_type: z.enum(LOCATION_TYPES).optional().nullable(),
  quantity: z.number().int().min(1).max(1000).default(1),
  notes: z.string().max(2000).optional().nullable(),
});
export type UserPlantInput = z.infer<typeof userPlantInputSchema>;

export const diagnosisRequestSchema = z.object({
  image_path: z.string().min(1),
  user_plant_id: z.string().uuid().optional().nullable(),
  user_question: z.string().max(500).optional().nullable(),
});
export type DiagnosisRequest = z.infer<typeof diagnosisRequestSchema>;
