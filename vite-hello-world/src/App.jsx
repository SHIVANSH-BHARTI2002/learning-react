import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Hello, World! 👋</h1>
      <p>This is a React app built with Vite.</p>
      <div className="count">Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
