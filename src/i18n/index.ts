import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBRJson from "./translations/ptBR.json";
import enJson from "./translations/enUS.json";

i18n.use(initReactI18next).init({
  fallbackLng: "ptBR",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ptBR: ptBRJson,
    enUS: enJson,
  },
});

export default i18n;
