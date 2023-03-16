import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.scss";
import logo from "./pulpostorelogo.svg";
import { Link, link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <ul className="navbar">
          <Link to="/" className="navbar__link">
            Inicio
          </Link>
          <Link to="/productos/calzado" className="navbar__link">
            Calzado
          </Link>
          <Link to="/productos/indumentaria" className="navbar__link">
            Indumentaria
          </Link>
          <Link to="/productos/accesorios" className="navbar__link">
            Accesorios
          </Link>
          <Link to="/contacto" className="navbar__link">
            Contacto
          </Link>
          <Link to="/shoetester" className="navbar__link">
            Shoe Tester
          </Link>
        </ul>
        <CartWidget />
      </div>
    </header>
  );
};

export default Navbar;
