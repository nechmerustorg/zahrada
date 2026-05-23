import { pgTable, uuid, text, integer, timestamp, primaryKey } from 'drizzle-orm/pg-core';
import { profiles } from './profiles.js';

export const usageQuotas = pgTable(
  'usage_quotas',
  {
    userId: uuid('user_id')
      .notNull()
      .references(() => profiles.id, { onDelete: 'cascade' }),
    periodYearMonth: text('period_year_month').notNull(),
    diagnosesUsed: integer('diagnoses_used').notNull().default(0),
    aiChatMessagesUsed: integer('ai_chat_messages_used').notNull().default(0),
    tierAtPeriodStart: text('tier_at_period_start'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.periodYearMonth] }),
  }),
);

export type UsageQuota = typeof usageQuotas.$inferSelect;
export type NewUsageQuota = typeof usageQuotas.$inferInsert;
