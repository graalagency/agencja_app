-- CreateTable
CREATE TABLE "Submission" (
    "id"             SERIAL          NOT NULL,
    "sourceId"       INTEGER,
    "titleId"        INTEGER,
    "publisherId"    INTEGER,
    "contactId"      INTEGER,
    "copyTypeId"     INTEGER,
    "submSentTypeId" INTEGER,
    "submDate"       TIMESTAMP(3)    NOT NULL,
    "sentDate"       TIMESTAMP(3),
    "endDate"        TIMESTAMP(3),
    "returnDate"     TIMESTAMP(3),
    "noOfCopies"     INTEGER,
    "trackingNo"     VARCHAR(30),
    "exclusive"      BOOLEAN         NOT NULL DEFAULT false,
    "submNr"         INTEGER,
    "status"         CHAR(1),
    "remarks"        VARCHAR(1000),
    "userMod"        VARCHAR(30),
    "dateMod"        TIMESTAMP(3),
    "createdAt"      TIMESTAMP(3)    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"      TIMESTAMP(3)    NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubmissionEvent" (
    "id"           SERIAL       NOT NULL,
    "sourceId"     INTEGER,
    "submissionId" INTEGER      NOT NULL,
    "eventCode"    INTEGER      NOT NULL,
    "eventDate"    TIMESTAMP(3) NOT NULL,
    "noOfCopies"   INTEGER,
    "endDate"      TIMESTAMP(3),
    "createdAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubmissionEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Submission_sourceId_key"    ON "Submission"("sourceId");
CREATE INDEX "Submission_titleId_idx"             ON "Submission"("titleId");
CREATE INDEX "Submission_publisherId_idx"         ON "Submission"("publisherId");
CREATE INDEX "Submission_submDate_idx"            ON "Submission"("submDate");

-- CreateIndex
CREATE UNIQUE INDEX "SubmissionEvent_sourceId_key" ON "SubmissionEvent"("sourceId");
CREATE INDEX "SubmissionEvent_submissionId_eventDate_eventCode_idx"
    ON "SubmissionEvent"("submissionId", "eventDate" DESC NULLS LAST, "eventCode" DESC);

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_titleId_fkey"
    FOREIGN KEY ("titleId") REFERENCES "Title"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "Submission" ADD CONSTRAINT "Submission_publisherId_fkey"
    FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "SubmissionEvent" ADD CONSTRAINT "SubmissionEvent_submissionId_fkey"
    FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;
