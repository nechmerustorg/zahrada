import {
  pgTable,
  uuid,
  text,
  jsonb,
  integer,
  timestamp,
  uniqueIndex,
  index,
} from 'drizzle-orm/pg-core';

export const plantsCatalog = pgTable(
  'plants_catalog',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    slug: text('slug').notNull(),
    scientificName: text('scientific_name').notNull(),
    commonNames: jsonb('common_names')
      .$type<Record<string, string[]>>()
      .notNull(),
    category: text('category').notNull(),
    family: text('family'),
    lifecycle: text('lifecycle'),
    sunRequirement: text('sun_requirement'),
    waterRequirement: text('water_requirement'),
    soilType: text('soil_type').array(),
    hardinessMinC: integer('hardiness_min_c'),
    companionPlants: text('companion_plants').array(),
    incompatiblePlants: text('incompatible_plants').array(),
    content: jsonb('content').$type<Record<string, unknown>>(),
    images: jsonb('images').$type<Array<{ path: string; alt?: string }>>(),
    externalIds: jsonb('external_ids').$type<Record<string, string | number>>(),
    publishedAt: timestamp('published_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    slugIdx: uniqueIndex('plants_catalog_slug_uniq').on(t.slug),
    categoryIdx: index('plants_catalog_category_idx').on(t.category),
  }),
);

export type CatalogPlant = typeof plantsCatalog.$inferSelect;
export type NewCatalogPlant = typeof plantsCatalog.$inferInsert;
