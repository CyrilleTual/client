import React from 'react';
import { PUBLIC_DIR } from '../../../data/const';

function SelectionCard({tea}) {
  console.log(tea);

  // recup de l'image /////////////////////////////////
  const urlImg = (url) => {
    return `${PUBLIC_DIR}/img/teas/${url}`;
  };
  ////////////////////////////////////////////////////

  return (
    <>
      <figure>
        <img key={tea.url} src={urlImg(tea.url)} alt="illustration" />
        <figcaption>{tea.mainTitle}</figcaption>
      </figure>
      <p>{tea.description}</p>
      <p>A partir</p>
      <p class="prix">7.60€</p>
      <a href="# ">Voir ce produit</a>
    </>
  );
}

export default SelectionCard