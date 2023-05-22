import React from "react";
import { NavLink } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useGetTeasQuery,
} from "../../store/serverApi.js";
import { PUBLIC_DIR } from "../../data/const.js";
import styles from "./index.module.css";

function Listing() {
  // on recupère chaque catégorie
  const { data: categories, isLoading: catLoading } = useGetCategoriesQuery();

  //   on recupère les thés
  const { data: teas, isLoading: teasLoading } = useGetTeasQuery();

  // filter des teas selon l'id de la categorie ////////
  const goodTeas = (idCat) => {
    const result = teas.filter((tea) => tea.category_id === idCat);
    return result;
  };
 

  // recup de l'image /////////////////////////////////
  const urlImg = (url) => {
    return `${PUBLIC_DIR}/img/teas/${url}`;
  };
  
  ////////////////////////////////////////////////////
  const detail = (idTea) => {
    return `/product/${idTea}`;
  };

  ///////

  return (
    <main className={styles.container}>
      {teasLoading || catLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <h1>Notre carte des thés</h1>

          {categories.map((category, i) => (
            <section key={category.catId} className={styles.selection}>
              <div>
                <h2>{category.catTitle}</h2>
                <p>{category.description}</p>
              </div>

              <div className={styles.wrapSelection}>
                {goodTeas(category.catId).map((tea) => (
                  <article key={tea.Id}>
                    <h3>{tea.mainTitle} </h3>
                    <figure>
                      <img
                        key={tea.url}
                        src={urlImg(tea.url)}
                        alt="illustration"
                      />
                    </figure>
                    <p>{tea.description}</p>
                    <p>A partir</p>
                    <p className={styles.prix}>9,00€</p>
                    <NavLink key={tea.teaId} to={detail(tea.teaId)}>
                      Voir ce produit
                    </NavLink>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </>
      )}
    </main>
  );
};

export default Listing;
