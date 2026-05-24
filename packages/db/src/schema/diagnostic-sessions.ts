import {
  pgTable,
  uuid,
  text,
  integer,
  timestamp,
  jsonb,
  index,
} from 'drizzle-orm/pg-core';
import { profiles } from './profiles';
import { userPlants } from './user-plants';

export const diagnosticSessions = pgTable(
  'diagnostic_sessions',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => profiles.id, { onDelete: 'cascade' }),
    userPlantId: uuid('user_plant_id').references(() => userPlants.id, {
      onDelete: 'set null',
    }),
    imagePath: text('image_path').notNull(),
    imageMetadata: jsonb('image_metadata').$type<Record<string, unknown>>(),
    userQuestion: text('user_question'),
    status: text('status').notNull().default('pending'),
    claudeAnalysis: jsonb('claude_analysis').$type<Record<string, unknown>>(),
    diagnosisSummary: text('diagnosis_summary'),
    urgency: text('urgency'),
    recommendedActions: jsonb('recommended_actions').$type<Array<Record<string, unknown>>>(),
    createdCareTasks: uuid('created_care_tasks').array(),
    costCents: integer('cost_cents').notNull().default(0),
    promptVersion: text('prompt_version'),
    userFeedback: text('user_feedback'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    deletedAt: timestamp('deleted_at', { withTimezone: true }),
  },
  (t) => ({
    userIdx: index('diagnostic_sessions_user_idx').on(t.userId),
    statusIdx: index('diagnostic_sessions_status_idx').on(t.status),
    createdIdx: index('diagnostic_sessions_created_idx').on(t.createdAt),
  }),
);

export type DiagnosticSession = typeof diagnosticSessions.$inferSelect;
export type NewDiagnosticSession = typeof diagnosticSessions.$inferInsert;
