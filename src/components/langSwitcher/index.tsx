import { useTranslation } from "react-i18next";
import br from "../../../public/brazil-flag.svg";
import us from "../../../public/unitedstates-flag.svg";
import "./style.css";

const languageOption = [
  {
    name: "Português",
    value: "ptBr",
    flag: br,
  },
  {
    name: "United States",
    value: "enUS",
    flag: us,
  },
];

export default function LangSwitcher() {
  const { t, i18n } = useTranslation();
  return (
    <div className="language-switcher">
      <span>{t("selecionarLinguagem")}</span>

      {languageOption.map((languageOption) => (
        <button
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value);
          }}
        >
          <img src={languageOption.flag} alt={languageOption.name} />
          <span>{languageOption.name}</span>
        </button>
      ))}
    </div>
  );
}
