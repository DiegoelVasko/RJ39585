import logoCart from "./cart-shopping-solid.svg";

const CartWidget = () => {
  return (
    <div className="container__cartWidget">
      <img src={logoCart} className="cartWidget" />
      <button className="cartWidget__cant">2</button>
    </div>
  );
};

export default CartWidget;
