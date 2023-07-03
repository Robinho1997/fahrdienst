import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      de: {
        translation: {
          homepage: { find: "Fahrt finden", create: "Fahrt erstellen" },
          createRide: {
            header1: "Fahrt info",
            header2: "Zusätzliche Infos",
            name: "Dein Name *",
            startort: "Startort *",
            seats: "Plätze",
            placeholderText: "Sachen die dein Mitfahrer wissen sollte..",
            button: "Erstellen",
          },
          rides: {
            quantityRidesText1: "Wir haben",
            quantityRidesText2: "Fahrten gefunden",
            availableSeat1: "verfügbarer Platz",
            availableSeat2: "verfügbare Plätze",
            button: "Mitfahren",
            info: "Zusätzliche Infos:"
          }
        },
      },
      en: {
        translation: {
          homepage: {
            find: "Find a ride",
            create: "Share a ride",
          },
          createRide: {
            header1: "Ride info",
            header2: "Additional information",
            name: "Your name *",
            startort: "Starting location *",
            seats: "Seats",
            placeholderText: "Things your passenger should know..",
            button: "Share",
          },
          rides: {
            quantityRidesText1: "We found",
            quantityRidesText2: "Rides",
            availableSeat1: "available seat",
            availableSeat2: "available seats",
            button: "Ride along",
            info: "Additional Information:"
          }
        },
      },
    },
  });

export default i18n;
