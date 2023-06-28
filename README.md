# eslint-config-teamia

Standard config for eslint som vi ønsker å bruke i alle prosjekter.

Dette inkluderer konfigurasjonen fra @navikt/eslint-config-teamia-a11y.

# Komme i gang

## Installasjon

`yarn add -D @navikt/eslint-config-teamia`

eller

`npm install @navikt/eslint-config-teamia --save-dev`

### Legg til eslint i package.json:

```json
"eslintConfig": {
    "extends": [
        "@navikt/eslint-config-teamia"
    ]
}
```

Evt. legg inn extends i eksisterende eslintconfig.

## Bruk

### Legg til script for å kjøre eslint i package.json (endre "src" om du ønsker å linte andre steder):

```json
"scripts": {
    "lint": "eslint src --ext .ts,.tsx,.js,.jsx",
}
```

### Om du bruker next:

```json
"scripts": {
    "lint": "next lint",
}
```

Evt. btuk eksisterende oppsett for å kjøre linter.

Kjør kommandoen lint (npm run lint/yarn lint etc.) i prosjektet.

# Troubleshooting

Om du opplever problemer som:

```
error  Definition for rule 'jsx-a11y/anchor-ambiguous-text' was not found  jsx-a11y/anchor-ambiguous-text
```

Så kan det være ettersom et annet bibliotek har det som dependency, og du derfor har feil versjon inne i prosjektet. Du kan prøve å legge inn dependencyen det gjelder i resolutions i package.json:

```json
"resolutions": {
    "eslint-plugin-jsx-a11y": ">= 6.7"
},
```

Du kan finne riktig versjon som den skal resolve til i package.json i dette prosjektet.

---

Har du eslint som dependency i prosjektet ditt? I såfall prøv å fjerne det.

---

Du kan også prøve å fjerne dependencies på andre eslint-plugins og -configs du ikke bruker.

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen [#teamia-utvikling](https://nav-it.slack.com/archives/C016KJA7CFK).
