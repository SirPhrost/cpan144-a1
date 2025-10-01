import { useState } from "react";

export default function ThemeToggle({ initialDark = true }: { initialDark?: boolean }) {
  const [dark, setDark] = useState(initialDark);
  return (
    <div className="card">
      <h2>Theme</h2>
      <p className="muted">mode: {dark ? "dark" : "light"}</p>
      <button className="btn" onClick={() => setDark(d => !d)}>
        {dark ? "light" : "dark"}
      </button>
    </div>
  );
}
