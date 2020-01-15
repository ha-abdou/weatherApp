import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
    en: { translation: translationEN },
    fr: { translation: translationFR },
};

i18n
    .use(detector)
    // todo
    // @ts-ignore
    .use(reactI18nextModule)
    .init({
        resources,
        lng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
