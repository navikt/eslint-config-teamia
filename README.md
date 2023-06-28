# eslint-config-teamia

Standard config for eslint som vi ønsker å bruke i alle prosjekter.

Dette inkluderer konfigurasjonen fra @navikt/eslint-config-teamia-a11y.

# Komme i gang

## Installasjon

`yarn add -D @navikt/eslint-config-teamia`

eller

`npm install @navikt/eslint-config-teamia --save-dev`

Kjør kommandoen lint (npm run lint/yarn lint etc.) i prosjektet.
Legg til eslint i package.json:

```json
"eslintConfig": {
    "extends": [
        "@navikt/eslint-config-teamia"
    ],
}
```

Evt. legg inn extends i eksisterende eslintconfig.

## Bruk

Legg til script for å kjøre eslint i package.json:

```json
"scripts": {
    "lint": "eslint",
}
```

Evt. btuk eksisterende oppsett for å kjøre linter.

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen [#teamia-utvikling](https://nav-it.slack.com/archives/C016KJA7CFK).
