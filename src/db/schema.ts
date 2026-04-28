import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// 1. SITE_CONFIG
export const siteConfig = sqliteTable("site_config", {
  id: integer("id").primaryKey(),
  key: text("key").unique().notNull(), 
  value: text("value", { mode: "json" }).notNull(), 
});

// 2. PAGES
export const pages = sqliteTable("pages", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),   
  slug: text("slug").unique().notNull(), 
});

// 3. PAGE_SECTIONS
export const pageSections = sqliteTable("page_sections", {
  id: integer("id").primaryKey(),
  pageId: integer("page_id").references(() => pages.id, { onDelete: 'cascade' }),
  sectionName: text("section_name").notNull(), 
  order: integer("order").notNull(),
  content: text("content", { mode: "json" }).notNull(), 
});

// --- THE FIX: DEFINE BOTH SIDES OF THE RELATION ---

export const pagesRelations = relations(pages, ({ many }) => ({
  sections: many(pageSections),
}));

export const pageSectionsRelations = relations(pageSections, ({ one }) => ({
  page: one(pages, {
    fields: [pageSections.pageId],
    references: [pages.id],
  }),
}));