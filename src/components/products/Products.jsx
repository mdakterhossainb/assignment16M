import { useEffect, useState } from "react";
import Product from "../product/Product";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((mydata) => setProducts(mydata));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 p-3 py-8 text-center">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
