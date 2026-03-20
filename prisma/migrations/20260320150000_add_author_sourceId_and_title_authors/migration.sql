-- Dodaj sourceId, suffix, penName do Author
ALTER TABLE "Author"
  ADD COLUMN "sourceId" INTEGER UNIQUE,
  ADD COLUMN "suffix"   TEXT,
  ADD COLUMN "penName"  TEXT;

-- Tabela łącząca Tytuł ↔ Autor (M2M)
CREATE TABLE "TitleAuthor" (
  "titleId"  INTEGER NOT NULL,
  "authorId" INTEGER NOT NULL,
  "isMain"   BOOLEAN NOT NULL DEFAULT false,
  "order"    INTEGER NOT NULL DEFAULT 1,

  CONSTRAINT "TitleAuthor_pkey"     PRIMARY KEY ("titleId", "authorId"),
  CONSTRAINT "TitleAuthor_titleId_fkey"  FOREIGN KEY ("titleId")  REFERENCES "Title"("id")  ON DELETE CASCADE,
  CONSTRAINT "TitleAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE CASCADE
);

CREATE INDEX "TitleAuthor_titleId_idx"  ON "TitleAuthor"("titleId");
CREATE INDEX "TitleAuthor_authorId_idx" ON "TitleAuthor"("authorId");
