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

CREATE TABLE "skills" (
	"id" SERIAL PRIMARY KEY,
	"skill" TEXT
);

CREATE TABLE "proficiencies" (
	"id" SERIAL PRIMARY KEY,
	"prof" BOOLEAN DEFAULT false,
	"skill_id" integer REFERENCES "skills"(id),
	"character_id" integer REFERENCES "character_stats"(id)
);


-- Insert data

INSERT INTO "skills" ("skill")
VALUES
('Acrobatics'),
('Animal Handling'),
('Arcana'),
('Athletics'),
('Deception'),
('History'),
('Insight'),
('Intimidation'),
('Investigation'),
('Medicine'),
('Nature'),
('Perception'),
('Performance'),
('Persuasion'),
('Religion'),
('Slight of Hand'),
('Stealth'),
('Survival');

INSERT INTO "proficiencies" ("skill_id", "character_id")
VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1);