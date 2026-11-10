import Products from "./components/products/Products";
import "./App.css";
import Placement from "./components/Placement/Placement";
import { useState } from "react";
const App = () => {
  const [cart, setCart] = useState([]);
  function addToCart(placement) {
    setCart((prevCart) => [...prevCart, placement]);
  }

  return (
    <div className="flex gap-4">
      <Products addToCart={addToCart}></Products>
      <Placement cart={cart}></Placement>
    </div>
  );
};

export default App;
