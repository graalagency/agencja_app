ALTER TABLE "Contact" DROP COLUMN IF EXISTS "clientId";
ALTER TABLE "Contact" DROP COLUMN IF EXISTS "publisherId";

CREATE TABLE IF NOT EXISTS "ClientContact" (
  id          SERIAL PRIMARY KEY,
  "contactId" INTEGER NOT NULL REFERENCES "Contact"(id) ON DELETE CASCADE,
  "clientId"  INTEGER NOT NULL REFERENCES "Client"(id) ON DELETE CASCADE,
  "isDefault" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE ("contactId", "clientId")
);

CREATE TABLE IF NOT EXISTS "PublisherContact" (
  id            SERIAL PRIMARY KEY,
  "contactId"   INTEGER NOT NULL REFERENCES "Contact"(id) ON DELETE CASCADE,
  "publisherId" INTEGER NOT NULL REFERENCES "Publisher"(id) ON DELETE CASCADE,
  "isDefault"   BOOLEAN NOT NULL DEFAULT false,
  "createdAt"   TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE ("contactId", "publisherId")
);
