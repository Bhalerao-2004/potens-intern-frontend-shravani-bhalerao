function TeamStatus() {
  const teams = [
    { name: "Finance Team", status: "🟢 Online" },
    { name: "Logistics", status: "🟡 Busy" },
    { name: "Security", status: "🔴 Incident" },
    { name: "Support", status: "🟢 Online" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-5">
        Team Status
      </h2>

      <div className="space-y-4">
        {teams.map((team) => (
          <div
            key={team.name}
            className="flex justify-between"
          >
            <span>{team.name}</span>
            <span>{team.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamStatus;