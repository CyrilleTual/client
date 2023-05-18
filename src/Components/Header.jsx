import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import NavAdmin from "../Pages/Admin/Components/NavAdmin";

function Header() {
  return (
    <header>
      <nav>
        <NavLink className={style.button} to="/">
          Home
        </NavLink>
        <NavLink className={style.button} to="/test">
          test
        </NavLink>
      </nav>
      <NavAdmin />
    </header>
  );
}

export default Header;
