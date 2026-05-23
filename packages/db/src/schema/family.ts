import {
  pgTable,
  uuid,
  text,
  timestamp,
  uniqueIndex,
  index,
} from 'drizzle-orm/pg-core';
import { profiles } from './profiles.js';

export const familyInvites = pgTable(
  'family_invites',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    ownerUserId: uuid('owner_user_id')
      .notNull()
      .references(() => profiles.id, { onDelete: 'cascade' }),
    code: text('code').notNull(),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    consumedBy: uuid('consumed_by').references(() => profiles.id, { onDelete: 'set null' }),
    consumedAt: timestamp('consumed_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    codeIdx: uniqueIndex('family_invites_code_uniq').on(t.code),
    ownerIdx: index('family_invites_owner_idx').on(t.ownerUserId),
  }),
);

export const familyMemberships = pgTable(
  'family_memberships',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    ownerUserId: uuid('owner_user_id')
      .notNull()
      .references(() => profiles.id, { onDelete: 'cascade' }),
    memberUserId: uuid('member_user_id')
      .notNull()
      .references(() => profiles.id, { onDelete: 'cascade' }),
    invitedAt: timestamp('invited_at', { withTimezone: true }).notNull().defaultNow(),
    joinedAt: timestamp('joined_at', { withTimezone: true }),
    revokedAt: timestamp('revoked_at', { withTimezone: true }),
  },
  (t) => ({
    memberIdx: uniqueIndex('family_memberships_member_uniq').on(t.memberUserId),
    ownerIdx: index('family_memberships_owner_idx').on(t.ownerUserId),
  }),
);

export type FamilyInvite = typeof familyInvites.$inferSelect;
export type FamilyMembership = typeof familyMemberships.$inferSelect;
