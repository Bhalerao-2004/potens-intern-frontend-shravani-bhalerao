function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
        Generate Report
      </button>

      <button className="bg-white shadow px-4 py-2 rounded-xl">
        Export
      </button>

      <button className="bg-white shadow px-4 py-2 rounded-xl">
        Refresh
      </button>
    </div>
  );
}

export default QuickActions;