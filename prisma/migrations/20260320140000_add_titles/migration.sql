CREATE TABLE "Title" (
    "id"            SERIAL PRIMARY KEY,
    "sourceId"      INTEGER UNIQUE,
    "clientId"      INTEGER,
    "publisherId"   INTEGER,
    "title"         TEXT NOT NULL,
    "isbn"          VARCHAR(20),
    "languageCode"  VARCHAR(5),
    "classCode"     VARCHAR(10),
    "edition"       INTEGER,
    "pages"         INTEGER,
    "copyrightYear" VARCHAR(4),
    "copyrightOwner" TEXT,
    "keywords"      TEXT,
    "volume"        INTEGER,
    "totalVolumes"  INTEGER,
    "isHit"         BOOLEAN NOT NULL DEFAULT false,
    "isCollection"  BOOLEAN NOT NULL DEFAULT false,
    "isCD"          BOOLEAN NOT NULL DEFAULT false,
    "notes"         TEXT,
    "dateOfReceipt" TIMESTAMPTZ,
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt"     TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Title_clientId_fkey"    FOREIGN KEY ("clientId")    REFERENCES "Client"("id")    ON DELETE SET NULL,
    CONSTRAINT "Title_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE SET NULL
);

CREATE INDEX "Title_clientId_idx"    ON "Title"("clientId");
CREATE INDEX "Title_publisherId_idx" ON "Title"("publisherId");
CREATE INDEX "Title_title_idx"       ON "Title"("title");
