## Zasady pracy — Panel Agencji Wydawniczej

### Stack i architektura
- Stack: Next.js App Router, API routes, Prisma ORM, PostgreSQL, NextAuth, Zod, Tailwind CSS
- Nie proponuj alternatywnych bibliotek ani przepisywania na inny stack.
- Strukturą modułów:
  - Główne moduły: `src/app/(protected)/{module}/` (customers, publishers, titles, authors, contacts, etc.)
  - Moduły finansowe (sub-moduły): `src/app/(protected)/finances/{submodule}/` (agreements, submissions, invoices)
  - API: `src/app/api/{module}/` dla głównych, `src/app/api/{module}/` dla sub-modułów z prefixem `finances/`
- Wszystkie nowe route'y są automatycznie chronione — nie dodawaj ręcznego sprawdzania sesji tam, gdzie robi to layout.
- Nowe endpointy zawsze w `src/app/api/`, komponenty w odpowiednim module biznesowym pod `src/app/(protected)/`.

### Domena i model danych
- Kluczowe encje: **Client** (klient), **Publisher** (wydawca), **Author** (autor), **Title** (tytuł)
  - **Agreement** (umowa), **AgreementRight** (prawa), **AgreementRoyRate** (stawki royalty), **AgreementAdvance** (zaliczki), **AgreementEvent** (zdarzenia umów)
  - **Submission, SubmissionEvent** (wysyłki, zdarzenia wysyłek)
  - **TaxResidenceCert, TaxResidenceSend** (certyfikaty podatkowe)
  - Pozostałe: Contact, Invoice, Document, BalanceAdjustment
- Przed zmianą modelu zawsze czytaj `schema.prisma` — nie zgaduj nazw pól ani relacji.
- Pola `sourceId` są polami migracyjnymi z legacy SQL Server — nie usuwaj ich, nie zmieniaj ich semantyki.

### Uprawnienia i role
- Role: USER / ADVANCED / ADMIN. Logika uprawnień per moduł jest w `permissions.ts`.
- Każda nowa funkcja musi uwzględniać macierz uprawnień — sprawdź `permissions.ts` przed implementacją.
- Nie hardkoduj ról w komponentach — używaj istniejących helperów z `permissions.ts`.

### Walidacja (Zod)
- Każdy nowy endpoint API musi mieć schemat Zod walidujący wejście.
- Przy modyfikacji istniejących endpointów bez walidacji — dodaj ją przy okazji.
- Schematy walidacji trzymaj blisko endpointu lub w dedykowanym pliku `*.schema.ts`.
- **Auto-generowanie z Prismy**: Schematy są generowane z `prisma/schema.prisma` za pomocą `prisma-zod-generator`
  - Wygenerowane pliki: `prisma/src/zod/`
  - NIE edytuj ich ręcznie — każda zmiana w schemacie → `npx prisma generate` → nowe schematy
  - Używaj wygenerowanych schematów w endpointach zamiast pisać od nowa

### Słowniki
- Słowniki to osobny subsystem — zmiany w słownikach zawsze przez mechanizm z `dictionaries.ts` i `dictionary-crud.ts`.
- Nie twórz nowych tablic stałych w kodzie jeśli dana wartość powinna być słownikiem administracyjnym.

### Komponenty i hooki
- Dla list z możliwością pamiętania filtrów wyszukiwania używaj `useSearchMemory()` z `src/hooks/useSearchMemory.ts`
  - Pozwala na persistencję stanu filtrów w localStorage
  - Użytkownik może włączyć checkbox "Zapamiętaj" by filtr wrócił przy następnej wizycie
  - Przykład: `const { remember, setRemember, initialCriteria, save } = useSearchMemory('agreements', defaults)`
- Komponenty UI z biblioteki: `src/components/ui/` (Card, Button, Input, Table, Pagination, MultiSelect)

### Dwujęzyczność
- Projekt jest PL/EN. Każdy nowy tekst w UI musi mieć klucze w `pl.json` i `en.json`.
- Nie hardkoduj stringów po polsku ani angielsku bezpośrednio w komponentach.
- Locale pochodzi z cookie i profilu użytkownika — nie wykrywaj języka przeglądarki.

### Migracja legacy
- SQL Server (legacy) ma osobne połączenie w `sqlserver.ts` — nie mieszaj z głównym Prisma client.

### Efektywność pracy
- Czytaj tylko pliki bezpośrednio potrzebne do zadania. Nie skanuj całego projektu.
- Odpowiadaj zwięźle — bez streszczeń tego co zrobiłeś, bez alternatywnych wersji jeśli nie pytam.
- Przy edycji pokazuj tylko zmieniony fragment, nie cały plik.
- Testy uruchamiaj tylko dla zmienionych modułów.
- Jeśli zadanie jest jasne — działaj bez pytania o potwierdzenie.
- Gdy zmienia się temat — przypomnij o `/compact` lub `/clear`.