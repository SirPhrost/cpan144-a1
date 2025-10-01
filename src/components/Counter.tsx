import { useState } from "react";

// simple counter component with buttons to change value
export default function Counter({ start = 0 }: { start?: number }) {
  // state holds the counter number
  const [n, setN] = useState(start);

  // small label based on current value
  const tag = n >= 10 ? "hot" : n >= 5 ? "warm" : "cold";

  return (
    <div className="card">
      <h2>Counter</h2>
      <p className="muted">status: {tag}</p>
      <div className="row">
        {/* decrease, reset, and increase buttons */}
        <button className="btn" onClick={() => setN(n - 1)}>-1</button>
        <button className="btn" onClick={() => setN(0)}>reset</button>
        <button className="btn" onClick={() => setN(n + 1)}>+1</button>
      </div>
      {/* show current number */}
      <div className="count">{n}</div>
    </div>
  );
}
