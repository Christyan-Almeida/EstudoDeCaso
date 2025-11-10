import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="logo">MyShop</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/product/1">Produto Exemplo</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} MyShop — Todos os direitos reservados</p>
      </footer>
    </Router>
  );
}

export default App;
