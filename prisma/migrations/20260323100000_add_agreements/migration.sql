-- DropForeignKey (odbudowywane poniżej z właściwymi opcjami)
ALTER TABLE "ClientContact" DROP CONSTRAINT "ClientContact_clientId_fkey";
ALTER TABLE "ClientContact" DROP CONSTRAINT "ClientContact_contactId_fkey";
ALTER TABLE "Document" DROP CONSTRAINT "Document_clientId_fkey";
ALTER TABLE "PublisherContact" DROP CONSTRAINT "PublisherContact_contactId_fkey";
ALTER TABLE "PublisherContact" DROP CONSTRAINT "PublisherContact_publisherId_fkey";
ALTER TABLE "TaxResidenceCert" DROP CONSTRAINT "TaxResidenceCert_clientId_fkey";
ALTER TABLE "TaxResidenceCert" DROP CONSTRAINT "TaxResidenceCert_publisherId_fkey";
ALTER TABLE "TaxResidenceSend" DROP CONSTRAINT "TaxResidenceSend_certId_fkey";
ALTER TABLE "TaxResidenceSend" DROP CONSTRAINT "TaxResidenceSend_clientId_fkey";
ALTER TABLE "TaxResidenceSend" DROP CONSTRAINT "TaxResidenceSend_publisherId_fkey";
ALTER TABLE "Title" DROP CONSTRAINT "Title_clientId_fkey";
ALTER TABLE "Title" DROP CONSTRAINT "Title_publisherId_fkey";
ALTER TABLE "TitleAuthor" DROP CONSTRAINT "TitleAuthor_authorId_fkey";
ALTER TABLE "TitleAuthor" DROP CONSTRAINT "TitleAuthor_titleId_fkey";

-- DropIndex
DROP INDEX IF EXISTS "Title_clientId_idx";
DROP INDEX IF EXISTS "Title_publisherId_idx";
DROP INDEX IF EXISTS "Title_title_idx";
DROP INDEX IF EXISTS "TitleAuthor_authorId_idx";
DROP INDEX IF EXISTS "TitleAuthor_titleId_idx";

-- AlterTable (normalizacja typów timestamp)
ALTER TABLE "ClientContact" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3);
ALTER TABLE "PublisherContact" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3);
ALTER TABLE "TaxResidenceCert"
  ALTER COLUMN "validDate" SET DATA TYPE TIMESTAMP(3),
  ALTER COLUMN "requestDate" SET DATA TYPE TIMESTAMP(3),
  ALTER COLUMN "receiveDate" SET DATA TYPE TIMESTAMP(3),
  ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3),
  ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP(3);
ALTER TABLE "TaxResidenceSend"
  ALTER COLUMN "dateSend" SET DATA TYPE TIMESTAMP(3),
  ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3);
ALTER TABLE "Title"
  ALTER COLUMN "isbn" SET DATA TYPE TEXT,
  ALTER COLUMN "languageCode" SET DATA TYPE TEXT,
  ALTER COLUMN "classCode" SET DATA TYPE TEXT,
  ALTER COLUMN "copyrightYear" SET DATA TYPE TEXT,
  ALTER COLUMN "dateOfReceipt" SET DATA TYPE TIMESTAMP(3),
  ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3),
  ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP(3);

-- DropTable: tylko Document (słowniki dict* pozostają!)
DROP TABLE "Document";

-- DropEnum
DROP TYPE IF EXISTS "DocStatus";

-- CreateTable: Agreement
CREATE TABLE "Agreement" (
    "id" SERIAL NOT NULL,
    "sourceId" INTEGER,
    "publisherId" INTEGER,
    "clientId" INTEGER,
    "titleId" INTEGER,
    "agrDate" TIMESTAMP(3) NOT NULL,
    "validYY" INTEGER,
    "pubTermMM" INTEGER,
    "maxCopies" INTEGER,
    "minCopies" INTEGER,
    "copiesToOwner" INTEGER,
    "copiesToGraal" INTEGER,
    "currencyCode" CHAR(3),
    "commission" DECIMAL(10,4),
    "commissionMaterials" DECIMAL(10,4),
    "estimatedCopyPrice" DECIMAL(18,2),
    "graalShare" DECIMAL(10,4),
    "graalRepresent" BOOLEAN NOT NULL DEFAULT true,
    "languageCode" CHAR(3),
    "countryId" INTEGER,
    "localTitle" VARCHAR(150),
    "localIsbn" VARCHAR(16),
    "localPubDate" TIMESTAMP(3),
    "clientReference" VARCHAR(50),
    "agrDoc" VARCHAR(250),
    "status" CHAR(1),
    "remarks" VARCHAR(1000),
    "agentId" INTEGER,
    "dateMod" TIMESTAMP(3),
    "userMod" VARCHAR(30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agreement_pkey" PRIMARY KEY ("id")
);

-- CreateTable: AgreementRight
CREATE TABLE "AgreementRight" (
    "id" SERIAL NOT NULL,
    "sourceId" INTEGER,
    "agreementId" INTEGER NOT NULL,
    "rightFormId" INTEGER,
    "priceTypeId" INTEGER,
    "royPriceTypeId" INTEGER,
    "royAccountIntervalId" INTEGER,
    "distributionTypeId" INTEGER,

    CONSTRAINT "AgreementRight_pkey" PRIMARY KEY ("id")
);

-- CreateTable: AgreementRoyRate
CREATE TABLE "AgreementRoyRate" (
    "id" SERIAL NOT NULL,
    "agreementId" INTEGER NOT NULL,
    "rightId" INTEGER NOT NULL,
    "step" INTEGER NOT NULL,
    "copiesMax" INTEGER,
    "rate" DECIMAL(10,4) NOT NULL,

    CONSTRAINT "AgreementRoyRate_pkey" PRIMARY KEY ("id")
);

-- CreateTable: AgreementEvent
CREATE TABLE "AgreementEvent" (
    "id" SERIAL NOT NULL,
    "sourceId" INTEGER,
    "agreementId" INTEGER NOT NULL,
    "eventCode" INTEGER NOT NULL,
    "eventDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "noOfCopies" INTEGER,
    "dateMod" TIMESTAMP(3),
    "userMod" VARCHAR(30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AgreementEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable: AgreementAdvance
CREATE TABLE "AgreementAdvance" (
    "id" SERIAL NOT NULL,
    "sourceId" INTEGER,
    "agreementId" INTEGER NOT NULL,
    "instalment" INTEGER,
    "advTermId" INTEGER,
    "advTypeId" INTEGER,
    "amount" DECIMAL(18,2) NOT NULL,
    "termDate" TIMESTAMP(3),
    "royaltyId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AgreementAdvance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Agreement_sourceId_key" ON "Agreement"("sourceId");
CREATE UNIQUE INDEX "AgreementRight_sourceId_key" ON "AgreementRight"("sourceId");
CREATE UNIQUE INDEX "AgreementRoyRate_rightId_step_key" ON "AgreementRoyRate"("rightId", "step");
CREATE UNIQUE INDEX "AgreementEvent_sourceId_key" ON "AgreementEvent"("sourceId");
CREATE UNIQUE INDEX "AgreementAdvance_sourceId_key" ON "AgreementAdvance"("sourceId");

-- AddForeignKey
ALTER TABLE "TitleAuthor" ADD CONSTRAINT "TitleAuthor_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "Title"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "TitleAuthor" ADD CONSTRAINT "TitleAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ClientContact" ADD CONSTRAINT "ClientContact_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ClientContact" ADD CONSTRAINT "ClientContact_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "PublisherContact" ADD CONSTRAINT "PublisherContact_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "PublisherContact" ADD CONSTRAINT "PublisherContact_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Title" ADD CONSTRAINT "Title_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Title" ADD CONSTRAINT "Title_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "TaxResidenceCert" ADD CONSTRAINT "TaxResidenceCert_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "TaxResidenceCert" ADD CONSTRAINT "TaxResidenceCert_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "TaxResidenceSend" ADD CONSTRAINT "TaxResidenceSend_certId_fkey" FOREIGN KEY ("certId") REFERENCES "TaxResidenceCert"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "TaxResidenceSend" ADD CONSTRAINT "TaxResidenceSend_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "TaxResidenceSend" ADD CONSTRAINT "TaxResidenceSend_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Agreement" ADD CONSTRAINT "Agreement_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Agreement" ADD CONSTRAINT "Agreement_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Agreement" ADD CONSTRAINT "Agreement_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "Title"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "AgreementRight" ADD CONSTRAINT "AgreementRight_agreementId_fkey" FOREIGN KEY ("agreementId") REFERENCES "Agreement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AgreementRoyRate" ADD CONSTRAINT "AgreementRoyRate_agreementId_fkey" FOREIGN KEY ("agreementId") REFERENCES "Agreement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AgreementRoyRate" ADD CONSTRAINT "AgreementRoyRate_rightId_fkey" FOREIGN KEY ("rightId") REFERENCES "AgreementRight"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AgreementEvent" ADD CONSTRAINT "AgreementEvent_agreementId_fkey" FOREIGN KEY ("agreementId") REFERENCES "Agreement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AgreementAdvance" ADD CONSTRAINT "AgreementAdvance_agreementId_fkey" FOREIGN KEY ("agreementId") REFERENCES "Agreement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
