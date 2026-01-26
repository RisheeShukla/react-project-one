import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="app">
      <div
        className="glow"
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      />

      <nav className="nav">
        <h2>Welcome to MyApp</h2>
        <button onClick={() => setCount((c) => c + 1)}>
          Clicks {count}
        </button>
      </nav>

      <main className="hero">
        <h1>
          Build.
          <span> Deploy.</span>
          <span> Scale.</span>
        </h1>
        <p>Modern interactive React frontpage</p>

        <div className="actions">
          <button className="primary">Get Started</button>
          <button className="secondary">Live Demo</button>
        </div>
      </main>

      <section className="cards">
        {["Fast", "Secure", "Scalable"].map((item) => (
          <div key={item} className="card">
            <h3>{item}</h3>
            <p>Optimized for production deployment</p>
          </div>
        ))}
      </section>
    </div>
  );
}
