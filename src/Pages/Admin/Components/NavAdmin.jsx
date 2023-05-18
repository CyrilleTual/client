import React from 'react';
import { NavLink } from "react-router-dom";

function NavAdmin() {
    return (
      <nav>
        <NavLink className="button" to="/admin/addCategory">
          Création de catégories
        </NavLink>
        <NavLink className="button" to="/admin/manageCategory">
          Gestion des categories
        </NavLink>
        <NavLink className="button" to="/admin/addTea">
          Création des Thés
        </NavLink>
      </nav>
    );
}

export default NavAdmin



