import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img
          src="./imgs/pulpostorelogo.svg"
          className="header__logo"
          alt="logo"
        />
        <ul className="navbar">
          <li className="navbar__li">Productos</li>
          <li className="navbar__li">Shoe Tester</li>
          <li className="navbar__li">Preguntas Frecuentes</li>
          <li className="navbar__li">Contacto</li>
        </ul>
        <CartWidget />
      </div>
    </header>
  );
};

export default Navbar;
