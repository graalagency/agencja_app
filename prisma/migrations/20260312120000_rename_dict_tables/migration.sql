-- Rename dictionary tables from NazwaDirectory convention to DictNazwa convention
-- Safe rename using ALTER TABLE ... RENAME TO (no data loss)

-- Rename tables
ALTER TABLE "CountryDictionary" RENAME TO "DictCountry";
ALTER TABLE "CurrencyDictionary" RENAME TO "DictCurrency";
ALTER TABLE "LanguageDictionary" RENAME TO "DictLanguage";

-- Rename primary key constraints
ALTER TABLE "DictCountry" RENAME CONSTRAINT "CountryDictionary_pkey" TO "DictCountry_pkey";
ALTER TABLE "DictCurrency" RENAME CONSTRAINT "CurrencyDictionary_pkey" TO "DictCurrency_pkey";
ALTER TABLE "DictLanguage" RENAME CONSTRAINT "LanguageDictionary_pkey" TO "DictLanguage_pkey";

-- Rename unique indexes
ALTER INDEX "CountryDictionary_code_key" RENAME TO "DictCountry_code_key";
ALTER INDEX "CurrencyDictionary_code_key" RENAME TO "DictCurrency_code_key";
ALTER INDEX "LanguageDictionary_code_key" RENAME TO "DictLanguage_code_key";
