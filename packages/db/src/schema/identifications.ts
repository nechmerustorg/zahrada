import {
  pgTable,
  uuid,
  text,
  integer,
  timestamp,
  jsonb,
  index,
} from 'drizzle-orm/pg-core';
import { diagnosticSessions } from './diagnostic-sessions.js';

export const identifications = pgTable(
  'identifications',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    sessionId: uuid('session_id').references(() => diagnosticSessions.id, {
      onDelete: 'cascade',
    }),
    provider: text('provider').notNull(),
    endpoint: text('endpoint').notNull(),
    requestHash: text('request_hash').notNull(),
    rawResponse: jsonb('raw_response').notNull(),
    costCents: integer('cost_cents').notNull().default(0),
    latencyMs: integer('latency_ms'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    hashIdx: index('identifications_hash_idx').on(t.requestHash),
    sessionIdx: index('identifications_session_idx').on(t.sessionId),
  }),
);

export type Identification = typeof identifications.$inferSelect;
export type NewIdentification = typeof identifications.$inferInsert;
