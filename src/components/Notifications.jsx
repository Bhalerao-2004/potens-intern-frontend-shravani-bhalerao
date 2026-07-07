function Notifications() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="font-bold mb-4">
        Notifications
      </h2>

      <div className="space-y-3">
        <p>🔔 Invoice approved</p>
        <p>🔔 Shipment delayed</p>
        <p>🔔 Refund escalated</p>
      </div>
    </div>
  );
}

export default Notifications;