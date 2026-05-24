import {
  pgTable,
  uuid,
  text,
  jsonb,
  integer,
  boolean,
  timestamp,
  index,
} from 'drizzle-orm/pg-core';
import { plantsCatalog } from './plants-catalog';

export const plantCareRules = pgTable(
  'plant_care_rules',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    catalogPlantId: uuid('catalog_plant_id')
      .notNull()
      .references(() => plantsCatalog.id, { onDelete: 'cascade' }),
    taskType: text('task_type').notNull(),
    triggerType: text('trigger_type').notNull(),
    triggerConfig: jsonb('trigger_config').$type<Record<string, unknown>>().notNull(),
    priority: integer('priority').notNull().default(3),
    climateRegions: text('climate_regions').array(),
    instructionsI18n: jsonb('instructions_i18n').$type<Record<string, string>>().notNull(),
    active: boolean('active').notNull().default(true),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    plantIdx: index('plant_care_rules_plant_idx').on(t.catalogPlantId),
    taskTypeIdx: index('plant_care_rules_task_type_idx').on(t.taskType),
  }),
);

export type PlantCareRule = typeof plantCareRules.$inferSelect;
export type NewPlantCareRule = typeof plantCareRules.$inferInsert;
