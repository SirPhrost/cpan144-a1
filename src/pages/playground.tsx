
import Nav from "../components/Nav";
import { useState } from "react";

function Greeting({ name }: { name: string }) {
  return <p>{name.trim() ? `hey, ${name}` : "type your name"}</p>;
}

export default function PlaygroundPage() {
  const [name, setName] = useState("");
  return (
    <div className="container">
      <Nav />
      <h1>Playground</h1>
      <input
        className="input"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="your name..."
      />
      <Greeting name={name} />
    </div>
  );
}
