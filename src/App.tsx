import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>React + TypeScript + Webpack</h1>
      <p>Everything is wired up 👇</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Count: {count}
      </button>
    </main>
  );
}