CREATE TABLE IF NOT EXISTS "TaxResidenceCert" (
  id          SERIAL PRIMARY KEY,
  "sourceId"    INTEGER UNIQUE,
  "clientId"    INTEGER REFERENCES "Client"(id) ON DELETE SET NULL,
  "publisherId" INTEGER REFERENCES "Publisher"(id) ON DELETE SET NULL,
  "validDate"   TIMESTAMP NOT NULL,
  "requestDate" TIMESTAMP,
  "receiveDate" TIMESTAMP,
  "hasCert"     BOOLEAN NOT NULL DEFAULT false,
  notes       TEXT,
  "fileData"    BYTEA,
  "fileName"    TEXT,
  "createdAt"   TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedAt"   TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS "TaxResidenceSend" (
  id            SERIAL PRIMARY KEY,
  "certId"      INTEGER NOT NULL REFERENCES "TaxResidenceCert"(id) ON DELETE CASCADE,
  "clientId"    INTEGER REFERENCES "Client"(id) ON DELETE SET NULL,
  "publisherId" INTEGER REFERENCES "Publisher"(id) ON DELETE SET NULL,
  "dateSend"    TIMESTAMP,
  "sendOrig"    BOOLEAN NOT NULL DEFAULT false,
  "sendCopy"    BOOLEAN NOT NULL DEFAULT false,
  "createdAt"   TIMESTAMP NOT NULL DEFAULT NOW()
);
