import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcomeMsg: "Hello! Here is today's cat fact:",
      errorMsg: "Failed to load cat fact",
      language: "eng",
    },
  },
  fr: {
    translation: {
      welcomeMsg: "Bonjour! Voici le fait sur les chats du jour:",
      errorMsg: "Échec de chargement du fait sur les chats",
      language: "fra",
    },
  },
  esp: {
    translation: {
      welcomeMsg: "¡Hola! Aquí está el dato sobre gatos de hoy:",
      errorMsg: "No se pudo cargar la información sobre el gato",
      language: "esp",
    },
  },
  ger: {
    translation: {
      welcomeMsg: "Hallo! Hier ist der Katzenfakt von heute:",
      errorMsg: "Cat Fact konnte nicht geladen werden",
      language: "ger",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
