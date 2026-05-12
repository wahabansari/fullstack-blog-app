import { sql } from "drizzle-orm";
import {
  json,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  tags: json("tags")
    .notNull()
    .default(sql`(JSON_ARRAY())`),
  created_at: timestamp().defaultNow().notNull(),
});

export const usersTable = pgTable("users", {
  userId: serial("userId").primaryKey(), // Good practice to name the column in DB
  username: varchar("username", { length: 255 }).notNull().unique(), // Length is required
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(), // Usually don't unique passwords
  createdAt: timestamp("created_at").defaultNow().notNull(), // CamelCase for JS, snake_case for DB
});
