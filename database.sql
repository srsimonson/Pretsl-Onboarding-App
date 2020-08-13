
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "administrator" BOOL DEFAULT FALSE,
    "date_joined" DATE DEFAULT now(),
    "user_email" VARCHAR (250)
);

CREATE TABLE "store"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "store_name" VARCHAR (250) NOT NULL,
    "store_status" VARCHAR (250) NOT NULL,
    "date_joined" DATE DEFAULT now(),
    "notes" TEXT,
    "contract" BYTEA,
    "business_type" VARCHAR(250),
    "moonclerk_url" VARCHAR(250),
    "customer_email" VARCHAR(250),
    "active_customer" BOOL DEFAULT TRUE,
);

CREATE TABLE "location"
(
    "id" SERIAL PRIMARY KEY,
    "store_id" INT REFERENCES "store",
    "address" VARCHAR(500) NOT NULL,
    "timezone" TEXT,
    "phone_number" TEXT NOT NULL,
    "location_email" VARCHAR(250),
    "point_of_contact" VARCHAR(250) NOT NULL,
    "tablets_quantity" INT,
    "printers_quantity" INT,
    "tablet_stands_quantity" INT
);

CREATE TABLE "support"
(
    "id" SERIAL PRIMARY KEY,
    "store_id" INT REFERENCES "store",
    "request_type" VARCHAR(500),
    "request_body" TEXT,
    "date_joined" DATE DEFAULT now(),
    "ticket_status" VARCHAR(250),
    "isArchived" BOOL DEFAULT FALSE
)