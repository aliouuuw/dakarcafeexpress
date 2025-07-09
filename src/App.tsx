import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Boutique } from "./pages/Boutique";
import { Abonnements } from "./pages/Abonnements";
import { NotreCafe } from "./pages/NotreCafe";
import { Product } from "./pages/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/abonnements" element={<Abonnements />} />
        <Route path="/notre-cafe" element={<NotreCafe />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
