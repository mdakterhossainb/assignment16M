import SingleCart from "../singleCart/SingleCart";

const Placement = ({ cart }) => {
  console.log(cart);

  return (
    <div className="py-8">
      <h1 className="text-3xl">this is Placement</h1>

      {cart.map((singleCart) => (
        <SingleCart key={singleCart.id} {...singleCart}></SingleCart>
      ))}
    </div>
  );
};

export default Placement;
