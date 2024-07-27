import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container" style={{ marginTop: "10vh" }}>
        <article>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/dashboard" element={<div>Dashboard</div>} />
            <Route path="/about" element={<div>About</div>} />
          </Routes>
        </article>
      </main>
    </>
  );
}

export default App;
