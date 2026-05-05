import { sql } from "drizzle-orm";
import { json, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  tags: json("tags")
    .notNull()
    .default(sql`(JSON_ARRAY())`),
  created_at: timestamp().defaultNow().notNull(),
});
    