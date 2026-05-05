CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"tags" json DEFAULT (JSON_ARRAY()) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
