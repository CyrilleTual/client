import React from 'react';
import { useGetCategoriesQuery } from '../../../store/serverApi';
import { PUBLIC_DIR } from '../../../data/const';
import { NavLink } from 'react-router-dom';
import styles from "./choise.module.css";

function Choise() {

  // on recup les catégories et on va boucler dessus
  const { data: categories, isLoading } = useGetCategoriesQuery();

  // on va chercher les images
  const urlImg = (url) => {
    return `${PUBLIC_DIR}/img/categories/${url}`;
  };

  ////////////////////////////////////////////////////////////////

  return (
    <section className={styles.choiseThe}>
      <h1>Choisissez votre thé</h1>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className={styles.itemsWrapper}>
          {categories.map((category, i) => (
            <NavLink
              key={category.catId}
              to={`/listing#anchor${category.catId}`}
            >
              <figure>
                <img src={urlImg(category.url)} />
                <figcaption>{category.catTitle} </figcaption>
              </figure>
            </NavLink>
          ))}
        </div>
      )}
    </section>
  );
}

export default Choise