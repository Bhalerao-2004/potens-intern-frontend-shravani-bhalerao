function StatCard({ title, value, color }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <p className="text-slate-500">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h2>

    </div>
  );
}

export default StatCard;