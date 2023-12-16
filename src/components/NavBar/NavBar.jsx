import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../Cartwidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav__brand">
          <NavLink className="nav__link" to='/'>HOMESMART</NavLink>
        </div>
        <ul className="nav__links">
          <li>
            <NavLink className="nav__link" to="/articulos/enchufes">Enchufes</NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/articulos/wifi">Wifi</NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/articulos/router">Router</NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to='/cart'>
              <CartWidget />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
