import { useEffect, useState } from "react";

function LiveCounter() {
  const [count, setCount] = useState(1340);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6">

      <p>Orders Processed Today</p>

      <h1 className="text-5xl font-bold mt-5">
        {count}
      </h1>

      <p className="text-green-400 mt-4">
        ↑ 12% vs yesterday
      </p>

    </div>
  );
}

export default LiveCounter;