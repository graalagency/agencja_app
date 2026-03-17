# Changelog

## 2026-03-17

### Added
- Dodano wsparcie migracji SQL Server -> PostgreSQL, w tym konfigurację połączenia i skrypty migracyjne.
- Dodano ręczne migracje Prisma dla słowników:
  - rename tabel słownikowych,
  - utworzenie brakujących tabel dict* (bez dictDictionaries).
- Dodano skrypty do migracji danych słownikowych, w tym migrację hurtową wszystkich tabel dict*.
- Dodano nowy hub nawigacyjny słowników jako centralny ekran katalogu słowników.
- Dodano tłumaczenia (PL/EN) dla nowego widoku słowników i jego elementów UI.

### Changed
- Uproszczono nawigację boczną: pojedynczy punkt wejścia Słowniki zamiast rozbudowy menu o kolejne pozycje.
- Zaktualizowano konfigurację projektu i zależności (m.in. pakiety dla połączeń bazodanowych).
- Przebudowano wygenerowane schematy Zod po zmianach modeli Prisma.
- Zaktualizowano liczne widoki i endpointy API po refaktorze modeli i słowników.

### Fixed
- Naprawiono problemy uruchomieniowe po refaktorze nazw słowników.
- Naprawiono regresje typów/kompilacji w wybranych ekranach i seedach.

### Data migration summary
- Wykonano pełną migrację danych słownikowych do PostgreSQL.
- Przetworzono 31 tabel dict*.
- Zmigrowano 20263 rekordy (20258 insertów, 5 update'ów).
- Potwierdzono sukces pusha zmian na gałąź main.

### Notes
- Commit wdrożeniowy: d18112b122ab5f8d77270b800e8250cb3b8f24cf
