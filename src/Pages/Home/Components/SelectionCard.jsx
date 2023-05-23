import React from 'react';
import { NavLink } from 'react-router-dom';
import { PUBLIC_DIR } from '../../../data/const';
import styles  from './selectionCard.module.css';

function SelectionCard({tea}) {

  // recup de l'image /////////////////////////////////////
  const urlImg = (url) => {
    return `${PUBLIC_DIR}/img/teas/${url}`;
  };
  ///// lien vers le detail produit ///////////////////////
  const detail = (idTea) => {
    return `/product/${idTea}`;
  };
  
  //////////////////////////////////////////////////////////

  return (
    <>
      <figure className={styles.selectionCard}>
        <img key={tea.url} src={urlImg(tea.url)} alt="illustration" />
        <figcaption>{tea.mainTitle}</figcaption>
      </figure>
      <p>{tea.description}</p>
      <p>A partir</p>
      <p className={styles.prix}>7.60€</p>
      <NavLink className={styles.detailsBtn} key={tea.teaId} to={detail(tea.teaId)}>
        Voir ce produit
      </NavLink>
    </>
  );
}

export default SelectionCard