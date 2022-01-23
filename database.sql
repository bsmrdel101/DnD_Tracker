-- Database: dnd_tracker

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "character_stats" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL,
    "class" VARCHAR (80) UNIQUE NOT NULL,
    "race" VARCHAR (80) UNIQUE NOT NULL,
    "background" VARCHAR (80) UNIQUE NOT NULL,
    "level" INTEGER NOT NULL,
    "ac" INTEGER NOT NULL,
    "health" INTEGER NOT NULL,
    "temp_health" INTEGER DEFAULT 0,
    "prof_bonus" INTEGER NOT NULL,
    "movement" INTEGER,
    "initiative" INTEGER,
    "inspiration" BOOLEAN DEFAULT false,
	"hit_dice" INTEGER,
	"str" INTEGER NOT NULL DEFAULT 0,
	"dex" INTEGER NOT NULL DEFAULT 0,
	"con" INTEGER NOT NULL DEFAULT 0,
	"int" INTEGER NOT NULL DEFAULT 0,
	"wis" INTEGER NOT NULL DEFAULT 0,
	"char" INTEGER NOT NULL DEFAULT 0,
    "user_id" INTEGER REFERENCES "user"(id)
);