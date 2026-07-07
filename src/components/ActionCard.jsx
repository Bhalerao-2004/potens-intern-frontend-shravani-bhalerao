import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

function ActionCard({ item = {} }) {
  const { language } = useLanguage();
  const t = translations[language];

  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition">

      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColor[item?.priority]}`}
      >
        {item?.priority}
      </span>

      <h3 className="font-bold text-xl mt-3">
        {item?.title}
      </h3>

      <p className="text-slate-500 mt-2">
        {item?.context}
      </p>

      <div className="flex gap-3 mt-5">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg">
          {t.approve}
        </button>

        <button className="bg-slate-200 hover:bg-slate-300 px-5 py-2 rounded-lg">
          {t.hold}
        </button>
      </div>
    </div>
  );
}

export default ActionCard;