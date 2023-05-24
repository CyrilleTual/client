import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import styles from "./navAdmin.module.css"

function NavAdmin() {

    useEffect (()=>{
        var element = document.getElementById("navAdmin");
        element.classList.toggle("hidden");
    },[])


    const toggleStyle = () =>{
      var element = document.getElementById("navAdmin");
      element.classList.toggle("hidden");
    }

    return (
      <>
        <button className={styles.tgglBtn} onClick={toggleStyle}>
          Administration
        </button>
        <nav className={styles.nav} id="navAdmin">
          <NavLink className="button" to="/admin/addCategory">
            Création de catégories
          </NavLink>
          <NavLink className="button" to="/admin/manageCategory">
            Gestion des categories
          </NavLink>
          <NavLink className="button" to="/admin/addTea">
            Création des Thés
          </NavLink>
          <NavLink className="button" to="/admin/teas">
            Gestion des Thés
          </NavLink>
          <NavLink className="button" to="/admin/addTeaPAck">
            Ajout des teaPacks
          </NavLink>
        </nav>
      </>
    );
}

export default NavAdmin



