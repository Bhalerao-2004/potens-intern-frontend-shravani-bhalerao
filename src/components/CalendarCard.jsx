function CalendarCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-5">
        Today's Schedule
      </h2>

      <div className="space-y-4">
        <p>09:30 Vendor Meeting</p>
        <p>11:00 Operations Review</p>
        <p>14:00 Compliance Call</p>
      </div>
    </div>
  );
}

export default CalendarCard;