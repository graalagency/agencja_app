-- AlterTable Client: add extended fields from tblCustomers source
ALTER TABLE "Client"
  ADD COLUMN IF NOT EXISTS "abbreviation"        TEXT,
  ADD COLUMN IF NOT EXISTS "address2"            TEXT,
  ADD COLUMN IF NOT EXISTS "fax"                 TEXT,
  ADD COLUMN IF NOT EXISTS "www"                 TEXT,
  ADD COLUMN IF NOT EXISTS "state"               TEXT,
  ADD COLUMN IF NOT EXISTS "vatId"               TEXT,
  ADD COLUMN IF NOT EXISTS "language"            TEXT,
  ADD COLUMN IF NOT EXISTS "jurisdiction"        TEXT,
  ADD COLUMN IF NOT EXISTS "status"              TEXT,
  ADD COLUMN IF NOT EXISTS "bankName"            TEXT,
  ADD COLUMN IF NOT EXISTS "bankAddress"         TEXT,
  ADD COLUMN IF NOT EXISTS "bankRoutingNo"       TEXT,
  ADD COLUMN IF NOT EXISTS "bankAccountName"     TEXT,
  ADD COLUMN IF NOT EXISTS "commission"          DECIMAL(18,2),
  ADD COLUMN IF NOT EXISTS "commissionForeign"   DECIMAL(18,2),
  ADD COLUMN IF NOT EXISTS "commissionMaterials" DECIMAL(18,2),
  ADD COLUMN IF NOT EXISTS "repModeId"           INTEGER,
  ADD COLUMN IF NOT EXISTS "parentId"            INTEGER;

-- Self-relation for Client hierarchy
ALTER TABLE "Client"
  ADD CONSTRAINT "Client_parentId_fkey"
  FOREIGN KEY ("parentId") REFERENCES "Client"("id")
  ON DELETE SET NULL ON UPDATE CASCADE
  NOT VALID;

-- AlterTable Publisher: add extended fields from tblCustomers source
ALTER TABLE "Publisher"
  ADD COLUMN IF NOT EXISTS "abbreviation"        TEXT,
  ADD COLUMN IF NOT EXISTS "address2"            TEXT,
  ADD COLUMN IF NOT EXISTS "fax"                 TEXT,
  ADD COLUMN IF NOT EXISTS "www"                 TEXT,
  ADD COLUMN IF NOT EXISTS "state"               TEXT,
  ADD COLUMN IF NOT EXISTS "vatId"               TEXT,
  ADD COLUMN IF NOT EXISTS "language"            TEXT,
  ADD COLUMN IF NOT EXISTS "jurisdiction"        TEXT,
  ADD COLUMN IF NOT EXISTS "status"              TEXT,
  ADD COLUMN IF NOT EXISTS "bankName"            TEXT,
  ADD COLUMN IF NOT EXISTS "bankAddress"         TEXT,
  ADD COLUMN IF NOT EXISTS "bankRoutingNo"       TEXT,
  ADD COLUMN IF NOT EXISTS "bankAccountName"     TEXT,
  ADD COLUMN IF NOT EXISTS "commission"          DECIMAL(18,2),
  ADD COLUMN IF NOT EXISTS "commissionForeign"   DECIMAL(18,2),
  ADD COLUMN IF NOT EXISTS "commissionMaterials" DECIMAL(18,2),
  ADD COLUMN IF NOT EXISTS "repModeId"           INTEGER,
  ADD COLUMN IF NOT EXISTS "parentId"            INTEGER;

-- Self-relation for Publisher hierarchy
ALTER TABLE "Publisher"
  ADD CONSTRAINT "Publisher_parentId_fkey"
  FOREIGN KEY ("parentId") REFERENCES "Publisher"("id")
  ON DELETE SET NULL ON UPDATE CASCADE
  NOT VALID;
