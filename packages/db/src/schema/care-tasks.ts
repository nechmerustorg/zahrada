import {
  pgTable,
  uuid,
  text,
  integer,
  date,
  timestamp,
  jsonb,
  index,
} from 'drizzle-orm/pg-core';
import { profiles } from './profiles';
import { userPlants } from './user-plants';
import { plantCareRules } from './plant-care-rules';

export const careTasks = pgTable(
  'care_tasks',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => profiles.id, { onDelete: 'cascade' }),
    userPlantId: uuid('user_plant_id')
      .notNull()
      .references(() => userPlants.id, { onDelete: 'cascade' }),
    taskType: text('task_type').notNull(),
    dueDate: date('due_date').notNull(),
    dueWindowStart: date('due_window_start'),
    dueWindowEnd: date('due_window_end'),
    titleI18n: jsonb('title_i18n').$type<Record<string, string>>(),
    instructionsI18n: jsonb('instructions_i18n').$type<Record<string, string>>(),
    status: text('status').notNull().default('pending'),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    generatedBy: text('generated_by').notNull().default('rule_engine'),
    sourceRuleId: uuid('source_rule_id').references(() => plantCareRules.id, {
      onDelete: 'set null',
    }),
    priority: integer('priority').notNull().default(3),
    notificationSentAt: timestamp('notification_sent_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    userDueIdx: index('care_tasks_user_due_idx').on(t.userId, t.dueDate),
    statusIdx: index('care_tasks_status_idx').on(t.status),
    plantIdx: index('care_tasks_plant_idx').on(t.userPlantId),
  }),
);

export type CareTask = typeof careTasks.$inferSelect;
export type NewCareTask = typeof careTasks.$inferInsert;
