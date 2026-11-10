const SingleCart = ({ singleCart }) => {
  const { name, role, id } = singleCart;
  return (
    <div>
      <h1 className="text-2xl"> {name} </h1>
      <p> {role} </p>
      <p> {id} </p>
    </div>
  );
};

export default SingleCart;
