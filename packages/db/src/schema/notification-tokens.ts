import { pgTable, uuid, text, timestamp, uniqueIndex, index } from 'drizzle-orm/pg-core';
import { profiles } from './profiles.js';

export const notificationTokens = pgTable(
  'notification_tokens',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => profiles.id, { onDelete: 'cascade' }),
    platform: text('platform').notNull(),
    token: text('token').notNull(),
    lastActiveAt: timestamp('last_active_at', { withTimezone: true }).notNull().defaultNow(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    tokenIdx: uniqueIndex('notification_tokens_token_uniq').on(t.token),
    userIdx: index('notification_tokens_user_idx').on(t.userId),
  }),
);

export type NotificationToken = typeof notificationTokens.$inferSelect;
export type NewNotificationToken = typeof notificationTokens.$inferInsert;
