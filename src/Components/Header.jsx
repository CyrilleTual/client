import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import NavAdmin from "../Pages/Admin/Components/NavAdmin";
import logo from "../assets/img/logo.png";
//import ribbon from "../assets/img/ribbon.svg"

function Header() {
  return (
    <header className={style.header}>
      {/* <img
        className={style.angleHt}
        src={ribbon}
        alt="meilleur thé"></img> */}

      <div className={style.bandeau}>
        <span>Livraison offerte à partir de 65€ d'achat !</span>
      </div>

      <div className={`${style.container} ${style.blocHeader}`}>
        <div className={style.headerHt}>
          <NavLink to="/">
            <img src={logo} alt="logo Cup of tea"></img>
          </NavLink>

          <a href="#" className={style.lienPanier}>
            <span className={style.txt}>Mon Panier</span>
            <div className={style.logoPanier}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>42,00 €</span>
            </div>
          </a>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink className={style.button} to="/listing">
                Thés
              </NavLink>
            </li>
            <li>
              <a href="">Grands crus</a>
            </li>
            <li>
              <a href="#">accessoires</a>
            </li>
            <li>
              <a href="#">&#201;picerie</a>
            </li>
            <li>
              <NavLink className={style.button} to="/about">
                Notre histoire
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <NavAdmin />
    </header>
  );
}

export default Header;
