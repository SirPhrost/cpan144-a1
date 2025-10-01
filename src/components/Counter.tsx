import { useState } from "react";

export default function Counter({ start = 0 }: { start?: number }) {
  const [n, setN] = useState(start);
  const tag = n >= 10 ? "hot" : n >= 5 ? "warm" : "cold";
  return (
    <div className="card">
      <h2>Counter</h2>
      <p className="muted">status: {tag}</p>
      <div className="row">
        <button className="btn" onClick={() => setN(n - 1)}>-1</button>
        <button className="btn" onClick={() => setN(0)}>reset</button>
        <button className="btn" onClick={() => setN(n + 1)}>+1</button>
      </div>
      <div className="count">{n}</div>
    </div>
  );
}
