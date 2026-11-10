const Product = ({ product, addToCart }) => {
  const { name, role, id } = product;

  return (
    <div className="border-2 border-green-600 p-6">
      <h1 className="text-2xl"> {name} </h1>
      <p> {role} </p>
      <p> {id} </p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-800 my-2 rounded-2xl px-4 p-2 text-white"
      >
        Add to card
      </button>
    </div>
  );
};

export default Product;
