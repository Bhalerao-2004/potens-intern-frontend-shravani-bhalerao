function ActivityCard() {
  const activities = [
    "Invoice approved",
    "Shipment put on hold",
    "Anomaly detected",
    "Payroll exception resolved",
  ];

  return (
    <div className="
    bg-white
    rounded-2xl
    p-6
    shadow-sm
    ">

      <h3 className="font-bold mb-5">
        Recent Activity
      </h3>

      <div className="space-y-4">

        {activities.map((item, index) => (
          <div
            key={index}
            className="flex gap-3"
          >
            <div className="
            w-3
            h-3
            rounded-full
            bg-blue-500
            mt-2
            " />

            <p>{item}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ActivityCard;