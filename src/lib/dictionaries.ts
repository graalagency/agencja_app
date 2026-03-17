export type DictionaryGroupKey = 'core' | 'contracts' | 'rights' | 'titles' | 'finance' | 'rates'

export type DictionaryGroup = {
  key: DictionaryGroupKey
  label: string
}

export type DictionaryDefinition = {
  key: string
  table: string
  label: string
  description: string
  group: DictionaryGroupKey
}

export const DICTIONARY_GROUPS: DictionaryGroup[] = [
  { key: 'core', label: 'Podstawowe' },
  { key: 'contracts', label: 'Umowy i procesy' },
  { key: 'rights', label: 'Prawa i rozliczenia' },
  { key: 'titles', label: 'Tytuly i klasyfikacje' },
  { key: 'finance', label: 'Finanse i dokumenty' },
  { key: 'rates', label: 'Kursy i wartosci' },
]

export const DICTIONARIES: DictionaryDefinition[] = [
  { key: 'countries', table: 'dictCountries', label: 'Kraje', description: 'Kody panstw, VAT i oznaczenie UE', group: 'core' },
  { key: 'currencies', table: 'dictCurrencies', label: 'Waluty', description: 'Kody walut i nazwy', group: 'core' },
  { key: 'languages', table: 'dictLanguages', label: 'Jezyki', description: 'Jezyki i skroty', group: 'core' },
  { key: 'states', table: 'dictStates', label: 'Stany', description: 'Lista stanow w USA', group: 'core' },
  { key: 'articles', table: 'dictArticles', label: 'Artykuly', description: 'Rodzaje artykulow', group: 'core' },
  { key: 'events', table: 'dictEvents', label: 'Zdarzenia', description: 'Slownik zdarzen', group: 'contracts' },
  { key: 'agreement-events', table: 'dictAgrEvents', label: 'Zdarzenia umow', description: 'Typy zdarzen dla umow', group: 'contracts' },
  { key: 'agreement-templates', table: 'dictAgrTemplates', label: 'Szablony umow', description: 'Definicje szablonow umow', group: 'contracts' },
  { key: 'submission-sent-types', table: 'dictSubmSentType', label: 'Typy wysylki', description: 'Sposoby wysylek i submitow', group: 'contracts' },
  { key: 'distribution-types', table: 'dictDistributionType', label: 'Typy dystrybucji', description: 'Klasy dystrybucji materialow', group: 'contracts' },
  { key: 'copy-types', table: 'dictCopyType', label: 'Typy kopii', description: 'Rodzaje kopi i wersji', group: 'contracts' },
  { key: 'target-groups', table: 'dictTargetGroups', label: 'Grupy docelowe', description: 'Segmenty odbiorcow', group: 'titles' },
  { key: 'title-main-class', table: 'dictTitMainClass', label: 'Klasy glowne tytulow', description: 'Glowne klasy tytulow', group: 'titles' },
  { key: 'title-sub-class', table: 'dictTitSubClass', label: 'Podklasy tytulow', description: 'Podzial podklas tytulow', group: 'titles' },
  { key: 'material-types', table: 'dictMatType', label: 'Typy materialow', description: 'Rodzaje materialow i formatow', group: 'titles' },
  { key: 'cover-formats', table: 'dictCoverFormat', label: 'Formaty okladek', description: 'Formaty i warianty okladek', group: 'titles' },
  { key: 'print-types', table: 'dictPrintType', label: 'Typy druku', description: 'Rodzaje druku', group: 'titles' },
  { key: 'isbn', table: 'dictISBN', label: 'ISBN', description: 'Slownik pozycji ISBN', group: 'titles' },
  { key: 'rights-forms', table: 'dictRightsForm', label: 'Formy praw', description: 'Formy praw autorskich/licencyjnych', group: 'rights' },
  { key: 'royalty-types', table: 'dictRoyType', label: 'Typy tantiem', description: 'Rodzaje tantiem', group: 'rights' },
  { key: 'royalty-price-types', table: 'dictRoyPriceType', label: 'Typy cen tantiem', description: 'Typy cen dla tantiem', group: 'rights' },
  { key: 'royalty-account-interval', table: 'dictRoyAccountInterval', label: 'Interwaly rozliczen', description: 'Interwaly rozliczania tantiem', group: 'rights' },
  { key: 'miss-royalty-reasons', table: 'dictMissRoyExcludeReason', label: 'Powody wykluczen tantiem', description: 'Powody pominiecia rozliczenia', group: 'rights' },
  { key: 'advance-types', table: 'dictAdvType', label: 'Typy zaliczek', description: 'Kategorie zaliczek', group: 'rights' },
  { key: 'advance-term', table: 'dictAdvTerm', label: 'Terminy zaliczek', description: 'Terminy i progi zaliczek', group: 'rights' },
  { key: 'advance-exclude-reasons', table: 'dictAdvWithoutInvExcludeReason', label: 'Wykluczenia zaliczek', description: 'Powody wykluczen bez faktury', group: 'rights' },
  { key: 'report-modes', table: 'dictRepModes', label: 'Tryby raportowania', description: 'Sposoby generacji raportow', group: 'finance' },
  { key: 'price-types', table: 'dictPriceType', label: 'Typy cen', description: 'Rodzaje cen i stawek', group: 'finance' },
  { key: 'customer-types', table: 'dictCustTypes', label: 'Typy klientow', description: 'Klasyfikacja klientow', group: 'finance' },
  { key: 'xrate-excel-names', table: 'dictXRateExcelNames', label: 'Nazwy kursow Excel', description: 'Mapowanie nazw kursow', group: 'rates' },
  { key: 'xrates', table: 'dictXRates', label: 'Kursy walut', description: 'Historia i wartosci kursow', group: 'rates' },
]

const dictionaryMap = new Map(DICTIONARIES.map((item) => [item.key, item]))

export function getDictionaryDefinition(dictionaryKey: string): DictionaryDefinition | null {
  return dictionaryMap.get(dictionaryKey) ?? null
}
