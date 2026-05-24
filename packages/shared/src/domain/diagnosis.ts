import { z } from 'zod';

export const HEALTH_STATUSES = [
  'healthy',
  'stressed',
  'diseased',
  'pest',
  'nutrient_deficiency',
  'unknown',
] as const;
export type HealthStatus = (typeof HEALTH_STATUSES)[number];

export const URGENCY_LEVELS = ['low', 'medium', 'high', 'critical'] as const;
export type Urgency = (typeof URGENCY_LEVELS)[number];

export const ACTION_TIMING = ['today', 'this_week', 'this_month', 'ongoing'] as const;
export type ActionTiming = (typeof ACTION_TIMING)[number];

export const recommendedActionSchema = z.object({
  action: z.string(),
  when: z.enum(ACTION_TIMING),
  details: z.string(),
  priority: z.number().int().min(1).max(5),
});
export type RecommendedAction = z.infer<typeof recommendedActionSchema>;

export const issueSchema = z.object({
  name_cs: z.string(),
  name_en: z.string(),
  description: z.string(),
  confidence: z.number().min(0).max(1),
});
export type Issue = z.infer<typeof issueSchema>;

export const diagnosisResultSchema = z.object({
  identified_plant: z.object({
    catalog_slug: z.string().nullable().optional(),
    scientific_name: z.string(),
    common_name_cs: z.string().nullable().optional(),
    confidence: z.number().min(0).max(1),
  }),
  health_status: z.enum(HEALTH_STATUSES),
  primary_issue: issueSchema.nullable(),
  secondary_issues: z.array(issueSchema).default([]),
  urgency: z.enum(URGENCY_LEVELS),
  recommended_actions: z.array(recommendedActionSchema),
  long_term_advice: z.string(),
  follow_up_in_days: z.number().int().min(0).max(365),
});
export type DiagnosisResult = z.infer<typeof diagnosisResultSchema>;
