import { useState } from "react";

// simple dark/light mode toggle
export default function ThemeToggle({ initialDark = true }: { initialDark?: boolean }) {
  // state for theme
  const [dark, setDark] = useState(initialDark);

  return (
    <div className="card">
      <h2>Theme</h2>
      <p className="muted">mode: {dark ? "dark" : "light"}</p>
      {/* toggle between dark and light */}
      <button className="btn" onClick={() => setDark(d => !d)}>
        {dark ? "light" : "dark"}
      </button>
    </div>
  );
}
