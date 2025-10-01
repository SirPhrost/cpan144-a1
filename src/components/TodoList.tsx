import { useState } from "react";

// type for a todo item
type Item = { id: string; text: string; done: boolean };

// todo list component
export default function TodoList({ title = "Tasks" }: { title?: string }) {
  // state for list items
  const [items, setItems] = useState<Item[]>([]);
  // state for input text
  const [text, setText] = useState("");

  // add new item to list
  function add(e: React.FormEvent) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    setItems(prev => [...prev, { id: crypto.randomUUID(), text: t, done: false }]);
    setText("");
  }

  // mark item as done / undo
  function toggle(id: string) {
    setItems(prev => prev.map(x => (x.id === id ? { ...x, done: !x.done } : x)));
  }

  const empty = items.length === 0;

  return (
    <div className="card">
      <h2>{title}</h2>
      {/* form for adding tasks */}
      <form onSubmit={add} className="row">
        <input
          className="input"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="add a task..."
        />
        <button className="btn" type="submit">add</button>
      </form>

      {/* show empty text or list of tasks */}
      {empty ? (
        <p className="muted">empty</p>
      ) : (
        <ul className="list">
          {items.map(i => (
            <li key={i.id} className="row space-between">
              <span style={{ textDecoration: i.done ? "line-through" : "none" }}>{i.text}</span>
              <button className="btn" onClick={() => toggle(i.id)}>
                {i.done ? "undo" : "done"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
