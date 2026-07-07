function BandwidthToggle({ low, setLow }) {
  return (
    <button
      onClick={() => setLow(!low)}
      className="bg-slate-200 px-4 py-2 rounded-lg"
    >
      {low ? "Normal Mode" : "Low Bandwidth"}
    </button>
  );
}

export default BandwidthToggle;