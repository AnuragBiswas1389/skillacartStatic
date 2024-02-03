import "./App.css";

import ProductGrid from "./Routes/ProductGrid";
import ProdView from "./Routes/ProdView";
import Home from "./Routes/Home";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<ProdView />} />
        <Route path="/grid" element={<ProductGrid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
