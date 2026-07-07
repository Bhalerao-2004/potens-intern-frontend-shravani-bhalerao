import { useLanguage } from "../context/LanguageContext";

function LanguageToggle() {
  const { language, setLanguage } =
    useLanguage();

  return (
    <button
      onClick={() =>
        setLanguage(language === "en" ? "hi" : "en")
      }
      className="px-4 py-2 rounded bg-slate-900 text-white"
    >
      {language === "en"
        ? "हिन्दी"
        : "English"}
    </button>
  );
}

export default LanguageToggle;