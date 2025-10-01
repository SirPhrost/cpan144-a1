
import Nav from "../components/Nav";
import Counter from "../components/Counter";
import TodoList from "../components/TodoList";
import ThemeToggle from "../components/ThemeToggle";

export default function HomePage() {
  return (
    <div className="container">
      <Nav />
      <h1>CPAN144 A1</h1>
      <p className="muted">Assignemnt 1:</p>

      <div className="grid">
        <Counter start={1} />
        <TodoList title="My Tasks" />
        <ThemeToggle />
      </div>
    </div>
  );
}
