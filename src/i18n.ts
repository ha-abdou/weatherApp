import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
    en: { translation: translationEN },
    fr: { translation: translationFR },
};

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export const languages = [
    { name: "France", code: "fr" },
    { name: "English", code: "en" },
];

export default i18n;
