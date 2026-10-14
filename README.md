# Lernzeit
Persönliche Lernapp mit Schwerpunkt Spanisch A2+: Gesundheit, Körper, Ernährung, Symptome, Heilmittel, Ratschläge, Imperativ und Condicional.

## Start
Node.js 20 oder neuer. Keine externen Abhängigkeiten.

```sh
npm start
```

Die App läuft auf Port 3000 (`PORT` kann geändert werden). `npm test` prüft Quizbewertung, Wiederholungsauswahl, Themenabdeckung und Importvalidierung.

## Funktionen
Karteikarten in beiden Richtungen, Themenfilter, Aussprache über die Browser-Sprachausgabe, Übersetzungsquiz mit manueller Anerkennung alternativer Antworten, Lernplan für heute und morgen, eigene Fächer und Karten, JSON-Export und -Import.

Daten bleiben im lokalen Browser-Speicher; keine Synchronisierung zwischen Geräten. Regelmäßig exportieren. Aussprache benötigt einen unterstützten Browser und passende Stimmen. Sprachbeispiele sind keine medizinischen Empfehlungen.

## GitHub Pages
In GitHub unter Settings → Pages die Quelle „Deploy from a branch“, Branch `main` und Ordner `/ (root)` wählen. Die App benötigt dort keinen Node-Server und keine Installation.
