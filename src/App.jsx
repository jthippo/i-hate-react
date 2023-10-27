import "./App.css";
import Home from "./pages/Home";
import How from "./pages/How";
import What from "./pages/What";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>&#128545;I hate React &#128545;</h1>
        <div className="linkyBois">
          <Link to="/">Why do I hate React?</Link>
          <Link to="/how">How mad does React make me?</Link>
          <Link to="/what">What am I going to do about it?</Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how" element={<How />} />
        <Route path="/what" element={<What />} />
      </Routes>

      <footer>
        &copy;Mike "Prone to over<b>REACT</b>ion" Foster
      </footer>
    </BrowserRouter>
  );
}

export default App;
