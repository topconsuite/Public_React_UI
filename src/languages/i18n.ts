import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptBR from "./pt-BR";
import enUS from "./en-US";
import esES from "./es-ES";

const detectLanguage = (): string => {
  if (typeof window === "undefined" || !window.navigator) {
    return "pt-BR";
  }

  let savedLanguage = "pt-BR";

  try {
    if (typeof localStorage !== "undefined") {
      savedLanguage = localStorage.getItem("i18nextLng") || "pt-BR";
    }
  } catch (error) {
    // localStorage not available - fallback to default language
  }

  return savedLanguage;
};

// Flatten the nested structure to match the enum keys
const flattenTranslations = (data: Record<string, unknown>) => {
  const flattened: Record<string, unknown> = {};

  // Flatten dataTable messages
  if (data.dataTable) {
    Object.keys(data.dataTable).forEach((key) => {
      flattened[key] = data.dataTable[key];
    });
  }

  // Flatten kanban messages
  if (data.kanban) {
    Object.keys(data.kanban).forEach((key) => {
      flattened[key] = data.kanban[key];
    });
  }

  return flattened;
};

const resources = {
  "pt-BR": {
    translation: flattenTranslations(ptBR)
  },
  "en-US": {
    translation: flattenTranslations(enUS)
  },
  "es-ES": {
    translation: flattenTranslations(esES)
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: detectLanguage(),
    fallbackLng: "pt-BR",
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    }
  });

export default i18n;
