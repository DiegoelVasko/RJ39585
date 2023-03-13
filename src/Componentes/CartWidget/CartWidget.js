const CartWidget = () => {
  return (
    <div className="container__cartWidget">
      <img
        src="./imgs/cart-shopping-solid.svg"
        className="cartWidget"
        alt="cartWidget"
      />
      <button className="cartWidget__cant">2</button>
    </div>
  );
};

export default CartWidget;
