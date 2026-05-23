import {
  pgTable,
  uuid,
  text,
  integer,
  date,
  timestamp,
  index,
} from 'drizzle-orm/pg-core';
import { profiles } from './profiles.js';
import { plantsCatalog } from './plants-catalog.js';

export const userPlants = pgTable(
  'user_plants',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => profiles.id, { onDelete: 'cascade' }),
    catalogPlantId: uuid('catalog_plant_id').references(() => plantsCatalog.id, {
      onDelete: 'set null',
    }),
    customName: text('custom_name').notNull(),
    nickname: text('nickname'),
    plantedAt: date('planted_at'),
    locationLabel: text('location_label'),
    locationType: text('location_type'),
    quantity: integer('quantity').notNull().default(1),
    notes: text('notes'),
    coverImagePath: text('cover_image_path'),
    lastWateredAt: timestamp('last_watered_at', { withTimezone: true }),
    lastFertilizedAt: timestamp('last_fertilized_at', { withTimezone: true }),
    state: text('state').notNull().default('active'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
    deletedAt: timestamp('deleted_at', { withTimezone: true }),
  },
  (t) => ({
    userIdx: index('user_plants_user_idx').on(t.userId),
    stateIdx: index('user_plants_state_idx').on(t.state),
  }),
);

export type UserPlant = typeof userPlants.$inferSelect;
export type NewUserPlant = typeof userPlants.$inferInsert;
