import { pgTable, uuid, text, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { authUsers } from './_shared';

export const profiles = pgTable('profiles', {
  id: uuid('id')
    .primaryKey()
    .references(() => authUsers.id, { onDelete: 'cascade' }),
  displayName: text('display_name'),
  locale: text('locale').notNull().default('cs'),
  country: text('country'),
  climateZone: text('climate_zone'),
  postalCode: text('postal_code'),
  notificationPrefs: jsonb('notification_prefs')
    .$type<{
      push: boolean;
      email: boolean;
      quietHoursStart?: string | null;
      quietHoursEnd?: string | null;
    }>()
    .notNull()
    .default(sql`'{"push": true, "email": true}'::jsonb`),
  familyOwnerId: uuid('family_owner_id'),
  onboardedAt: timestamp('onboarded_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export type Profile = typeof profiles.$inferSelect;
export type NewProfile = typeof profiles.$inferInsert;
