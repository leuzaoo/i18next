import { useTranslation } from "react-i18next";
import "./App.css";
import LangSwitcher from "./components/langSwitcher";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <LangSwitcher />
      <h1>{t("bemVindoAoApp")}</h1>
      <p>{t("aplicacaoParaTestar")}</p>
    </>
  );
}

export default App;
