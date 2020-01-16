import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
    en: { translation: translationEN },
    fr: { translation: translationFR },
};

export const languages = [
    { name: "France", code: "fr" },
    { name: "English", code: "en" },
];

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources,
        // tslint:disable-next-line:object-literal-sort-keys
        detection: {
            lookupCookie: "language",
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        keySeparator: false,
    });

export default i18n;
