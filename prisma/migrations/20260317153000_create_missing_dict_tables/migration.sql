-- Create missing legacy dictionary tables (excluding dictDictionaries)
-- Safe to run multiple times

CREATE TABLE IF NOT EXISTS "dictAdvTerm" (
  "AdvTermId" SMALLINT NOT NULL,
  "AdvTermDesc" VARCHAR(50) NULL,
  "AdvTermPL" VARCHAR(50) NULL,
  CONSTRAINT "PK_dictAdvTerm" PRIMARY KEY ("AdvTermId")
);

CREATE TABLE IF NOT EXISTS "dictAdvType" (
  "AdvTypeId" SMALLINT NOT NULL,
  "AdvTypeDesc" VARCHAR(50) NULL,
  "AdvTypeDescPL" VARCHAR(50) NULL,
  CONSTRAINT "PK_dictAdvType" PRIMARY KEY ("AdvTypeId")
);

CREATE TABLE IF NOT EXISTS "dictAdvWithoutInvExcludeReason" (
  "ExcludeReasonID" INT NOT NULL,
  "ExcludeReasonCode" VARCHAR(3) NULL,
  "ExcludeReasonDesc" VARCHAR(50) NULL,
  CONSTRAINT "PK_dictAdvWithoutInvExclReason" PRIMARY KEY ("ExcludeReasonID")
);

CREATE TABLE IF NOT EXISTS "dictAgrEvents" (
  "AgrEventCode" INT NOT NULL,
  "AgrEventDesc" CHAR(255) NOT NULL,
  "Status" CHAR(1) NULL,
  CONSTRAINT "PK_dictAgrEvents" PRIMARY KEY ("AgrEventCode")
);

CREATE TABLE IF NOT EXISTS "dictAgrTemplates" (
  "Name" VARCHAR(30) NOT NULL,
  "FileName" VARCHAR(255) NOT NULL,
  CONSTRAINT "PK_dictAgrTemplates" PRIMARY KEY ("Name")
);

CREATE TABLE IF NOT EXISTS "dictArticles" (
  "Article" CHAR(10) NOT NULL,
  "LangAbb" CHAR(3) NULL,
  CONSTRAINT "PK_DICTARTICLES" PRIMARY KEY ("Article")
);

CREATE TABLE IF NOT EXISTS "dictCopyType" (
  "CopyTypeID" SMALLINT NOT NULL,
  "CopyType" CHAR(30) NULL,
  CONSTRAINT "PK_DICTCOPYTYPE" PRIMARY KEY ("CopyTypeID")
);

CREATE TABLE IF NOT EXISTS "dictCountries" (
  "CountryID" INT NOT NULL,
  "CountryDesc" TEXT NULL,
  "CountryPL" TEXT NULL,
  "Tax" NUMERIC(19,4) NULL,
  "Code" VARCHAR(255) NULL,
  "EU" CHAR(10) NULL,
  CONSTRAINT "PK_dictCountries_1" PRIMARY KEY ("CountryID")
);

CREATE TABLE IF NOT EXISTS "dictCoverFormat" (
  "CoverFormatID" INT NOT NULL,
  "CoverFormatDesc" CHAR(30) NOT NULL,
  CONSTRAINT "PK_dictCoverFormat" PRIMARY KEY ("CoverFormatID")
);

CREATE TABLE IF NOT EXISTS "dictCurrencies" (
  "CurrID" CHAR(3) NOT NULL,
  "CurrDesc" VARCHAR(50) NOT NULL,
  CONSTRAINT "PK_DICTCURRENCIES" PRIMARY KEY ("CurrID")
);

CREATE TABLE IF NOT EXISTS "dictCustTypes" (
  "CustTypeID" INT NOT NULL,
  "CustTypeName" VARCHAR(50) NOT NULL,
  "CustTypeDesc" VARCHAR(250) NULL,
  CONSTRAINT "PK_dictCustTypes" PRIMARY KEY ("CustTypeID")
);

CREATE TABLE IF NOT EXISTS "dictDistributionType" (
  "DistID" SMALLINT NOT NULL,
  "DistDesc" CHAR(30) NOT NULL,
  CONSTRAINT "PK_DICTDISTRIBUTIONTYPE" PRIMARY KEY ("DistID")
);

CREATE TABLE IF NOT EXISTS "dictEvents" (
  "EventCode" INT NOT NULL,
  "EventDesc" CHAR(50) NOT NULL,
  CONSTRAINT "PK_DICTEVENTS" PRIMARY KEY ("EventCode")
);

CREATE TABLE IF NOT EXISTS "dictISBN" (
  "GRUPA" VARCHAR(255) NULL,
  "MIN" VARCHAR(255) NULL,
  "MAX" VARCHAR(255) NULL
);

CREATE TABLE IF NOT EXISTS "dictLanguages" (
  "LangAbb" CHAR(3) NOT NULL,
  "LangDesc" VARCHAR(30) NOT NULL,
  "LangPL" VARCHAR(30) NOT NULL,
  CONSTRAINT "PK_DICTLANGUAGES" PRIMARY KEY ("LangAbb")
);

CREATE TABLE IF NOT EXISTS "dictMatType" (
  "MatTypeID" SMALLINT NOT NULL,
  "MatTypeDesc" CHAR(50) NOT NULL,
  "MatTypeDescPL" CHAR(50) NULL,
  CONSTRAINT "PK_dictMatType" PRIMARY KEY ("MatTypeID")
);

CREATE TABLE IF NOT EXISTS "dictMissRoyExcludeReason" (
  "ExcludeReasonID" INT NOT NULL,
  "ExcludeReasonCode" VARCHAR(3) NULL,
  "ExcludeReasonDesc" VARCHAR(50) NULL,
  CONSTRAINT "PK_dictMissRoyReason" PRIMARY KEY ("ExcludeReasonID")
);

CREATE TABLE IF NOT EXISTS "dictPriceType" (
  "PriceTypeID" SMALLINT NOT NULL,
  "PriceTypeDesc" VARCHAR(50) NULL,
  "PriceTypePL" VARCHAR(50) NULL,
  CONSTRAINT "PK_dictPriceType" PRIMARY KEY ("PriceTypeID")
);

CREATE TABLE IF NOT EXISTS "dictPrintType" (
  "PrintType" VARCHAR(1) NULL,
  "PrintDesc" VARCHAR(50) NULL
);

CREATE TABLE IF NOT EXISTS "dictRepModes" (
  "RepModeID" SMALLINT NOT NULL,
  "RepModeDesc" CHAR(30) NOT NULL,
  CONSTRAINT "PK_DICTREPMODES" PRIMARY KEY ("RepModeID")
);

CREATE TABLE IF NOT EXISTS "dictRightsForm" (
  "RightFormID" SMALLINT NOT NULL,
  "RightFormDesc" VARCHAR(50) NOT NULL,
  "RightFormPL" VARCHAR(100) NULL,
  "RightFormAbbPL" VARCHAR(10) NULL,
  "RightFormAbbEN" VARCHAR(10) NULL,
  CONSTRAINT "PK_DICTRIGHTSFORM" PRIMARY KEY ("RightFormID")
);

CREATE TABLE IF NOT EXISTS "dictRoyAccountInterval" (
  "RoyAccountIntervalID" SMALLINT NOT NULL,
  "RoyAccountIntervalDesc" CHAR(50) NOT NULL,
  "IntervalAbb" CHAR(8) NULL,
  CONSTRAINT "PK_DICTROYACCOUNTINTERVAL" PRIMARY KEY ("RoyAccountIntervalID")
);

CREATE TABLE IF NOT EXISTS "dictRoyPriceType" (
  "RoyPriceTypeID" SMALLINT NOT NULL,
  "RoyPriceTypeDesc" VARCHAR(50) NOT NULL,
  "RoyPriceTypePL" VARCHAR(50) NULL,
  CONSTRAINT "PK_DICTROYPRICETYPE" PRIMARY KEY ("RoyPriceTypeID")
);

CREATE TABLE IF NOT EXISTS "dictRoyType" (
  "RoyTypeID" NUMERIC(18,0) NOT NULL,
  "AgrRightID" INT NULL,
  "RoyTypeDesc" CHAR(30) NOT NULL,
  CONSTRAINT "PK_DICTROYTYPE" PRIMARY KEY ("RoyTypeID")
);

CREATE TABLE IF NOT EXISTS "dictStates" (
  "StateID" SMALLINT NOT NULL,
  "CountryID" INT NULL,
  "StateAbb" CHAR(2) NOT NULL,
  "StateName" VARCHAR(30) NOT NULL,
  CONSTRAINT "PK_dictStates" PRIMARY KEY ("StateAbb")
);

CREATE TABLE IF NOT EXISTS "dictSubmSentType" (
  "SubmSentTypeID" SMALLINT NOT NULL,
  "SubmSentType" CHAR(30) NOT NULL,
  CONSTRAINT "PK_DICTSUBMSENTTYPE" PRIMARY KEY ("SubmSentTypeID")
);

CREATE TABLE IF NOT EXISTS "dictTargetGroups" (
  "TargetGroupID" NUMERIC(18,0) NOT NULL,
  "TargetGroupDesc" CHAR(50) NULL,
  CONSTRAINT "PK_DICTTARGETGROUPS" PRIMARY KEY ("TargetGroupID")
);

CREATE TABLE IF NOT EXISTS "dictTitMainClass" (
  "ClassCode" VARCHAR(10) NOT NULL,
  "ClassDesc" VARCHAR(50) NULL,
  CONSTRAINT "PK_DICTTITMAINCLASS" PRIMARY KEY ("ClassCode")
);

CREATE TABLE IF NOT EXISTS "dictTitSubClass" (
  "SubClassCode" CHAR(5) NOT NULL,
  "ClassCode" VARCHAR(10) NULL,
  "SubClassDesc" VARCHAR(50) NULL,
  CONSTRAINT "PK_DICTTITSUBCLASS" PRIMARY KEY ("SubClassCode")
);

CREATE TABLE IF NOT EXISTS "dictXRateExcelNames" (
  "CurrID" CHAR(3) NOT NULL,
  "Name" CHAR(50) NOT NULL,
  CONSTRAINT "PK_dictXRateExcelNames" PRIMARY KEY ("CurrID", "Name")
);

CREATE TABLE IF NOT EXISTS "dictXRates" (
  "CurrDate" TIMESTAMP NOT NULL,
  "CurrID" CHAR(3) NOT NULL,
  "XRate" NUMERIC(19,4) NOT NULL,
  CONSTRAINT "PK_dictXRates1" PRIMARY KEY ("CurrID", "CurrDate")
);
