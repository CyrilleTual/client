import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  useGetPackagingsQuery,
  useGetTeaPackQuery,
  useGetTeasQuery,
} from "../../store/serverApi.js";
import { PUBLIC_DIR } from "../../data/const.js";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

function Product() {
  // recup de l'id du produit passé en paramètre
  const { id } = useParams();
  const navigate = useNavigate();
  let availablesPacks = [];

  // recuperation des thés
  const { data: teas, isLoading: teasLoading } = useGetTeasQuery();
  // recupération des teapacks
  const { data: teaPacks, isLoading: teaPacksLoading } = useGetTeaPackQuery();
  // recupétation des packagings

  const { data: packagings, isLoading: packagingsLoading } =
    useGetPackagingsQuery();


  // recup de l'image /////////////////////////////////////
  const urlImg = (url) => {
    return `${PUBLIC_DIR}/img/teas/${url}`;
  };

  // navigation vers Prévious /////////////////////////////
  const navPrevious = () => {
    // recherche de l'index du produit actuel
    const index = teas.findIndex((tea) => tea.teaId === parseInt(id));
    // si l'index ext 0 on est au début, pas de précédent
    if (index === 0) return;
    // redirection vers le thé précédent
    return navigate(`/product/${teas[index - 1].teaId}`);
  };
  //////  navigation vers next ////////////////////////////
  const navNext = () => {
    const index = teas.findIndex((tea) => tea.teaId === parseInt(id));
    const lastIndex = teas.length;
    if (index === lastIndex - 1) return;
    return navigate(`/product/${teas[index + 1].teaId}`);
  };

 
  ////// formulaire de choix //////////////////////////////
  // on recupère les teaPackagings qui correspondent au thé selectionné
  const goodArray = () => {
    if (!teasLoading && !teaPacksLoading && !packagingsLoading) {
      availablesPacks = teaPacks.filter(
        (element) => element.tea_id === parseInt(id)
      );
      let newArray = []
  // et on ajoute le pack weight //////////// /////////
      for (let item of availablesPacks)   {
        for (let pack of packagings) {
          if(item.packaging_id == pack.id){   // les cles matchent
            newArray.push({ ...item, packaging: pack.weight }); 
          }
        }
      };



        

      return newArray
    }
  };
 

  const [choise, setChoise] = useState(""); 
  // necessaire pour reset entre changement de vue 
  useEffect (()=>{
    //setChoise(newArray[0].price);
  },[id])


  const handleChange = (e) => {
    setChoise(e.target.value);
  };

  /////////////////////////////////////////////////////////
  return (
    <main className={`container ${styles.page_product}`}>
      {teasLoading ||
      teaPacksLoading ||
      packagingsLoading || goodArray().length === 0 ? (
        <p>Loading</p>
      ) : (
        <>
          {" "}
          {teas
            .filter((tea) => tea.teaId === parseInt(id))
            .map((tea, i) => (
              <article key={i}>
                <div className={styles.prevNext}>
                  <button onClick={navPrevious}>précédent</button>
                  <button onClick={navNext}>suivant</button>
                </div>
                <div className={styles.description}>
                  <div className={styles.wrapperDesignation}>
                    <div className={styles.ref}>
                      <h1>{tea.mainTitle}</h1>
                      <p>{tea.subTitle}</p>
                      <small>Réf: 133742</small>
                    </div>
                  </div>
                  <div className={styles.wrapperRatings}>
                    <aside>
                      <NavLink>
                        <span className={`fa fa-star ${styles.checked}`}></span>
                        <span className={`fa fa-star ${styles.checked}`}></span>
                        <span className={`fa fa-star ${styles.checked}`}></span>
                        <span className={`fa fa-star ${styles.checked}`}></span>
                        <span
                          className={`fa fa-star ${styles.unchecked}`}
                        ></span>{" "}
                        <br />
                        <span className={styles.text}>Voir les 56 avis</span>
                      </NavLink>
                    </aside>
                  </div>

                  <img src={urlImg(tea.url)} alt="illustration" />

                  <div className={styles.formulaires}>
                    <form>
                      <select
                        name="choise"
                        value={choise}
                        onChange={handleChange}
  
                      >
                        <option>Make your choise</option>
                        {goodArray().map((product, i) => {
                          return(
                            <option key={i} value={product.price}>
                              {product.packaging}
                            </option>
                          )
                        })}

                      </select>
                      <div id="affPrix">{choise} €</div>
                      <button>Ajouter au pannier</button>
                    </form>
                    <form id="wish">
                      <button className={styles.wishList}>
                        Ajouter à ma liste d'entrée
                      </button>
                    </form>
                    <div id="alertPanel"></div>
                  </div>
                </div>
                <div>
                  <p>{tea.description}</p>
                </div>
              </article>
            ))}
        </>
      )}
    </main>
  );
}

export default Product;
