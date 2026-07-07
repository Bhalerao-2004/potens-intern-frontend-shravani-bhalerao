function AnomalyCard({ item = {} }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition">

      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-slate-800">
          {item?.title || "No anomaly"}
        </h3>

        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
          {item?.severity || "Low"}
        </span>
      </div>

      <p className="text-slate-500 mt-4">
        {item?.time || "No time available"}
      </p>

    </div>
  );
}

export default AnomalyCard;