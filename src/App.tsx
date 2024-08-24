import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./Theme";
import Home from "./Pages/Home";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en-us/translation.json";
import translationPT from "./locales/pt-br/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma padrão
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
