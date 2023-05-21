import { useState} from "react";
import { useParams } from "react-router";
import { useGetTeasQuery } from "../../store/serverApi.js";
import { PUBLIC_DIR } from "../../data/const.js";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  styles  from "./index.module.css"

function Product() {
  // recup de l'id du produit passé en paramètre
  const { id } = useParams();
  const navigate = useNavigate();

  // recuperation des thés
  const { data: teas, isLoading: teasLoading } = useGetTeasQuery();

  // recup de l'image /////////////////////////////////////
  const urlImg = (url) => {
    return `${PUBLIC_DIR}/img/teas/${url}`;
  };

  ////// formulaire de choix //////////////////////////////
  const [pannier, setPannier] = useState("20,55");
  const handleChange = (e) => {
    setPannier( e.target.value );
  };

  // navigation vers Prévious /////////////////////////////
  const  navPrevious =()=>{
    // recherche de l'index du produit actuel 
    const index = teas.findIndex((tea) => tea.teaId === parseInt(id));
    // si l'index ext 0 on est au début, pas de précédent 
    if (index ===0) return;
    // redirection vers le thé précédent 
    return navigate(`/product/${((teas[index-1]).teaId)}`);
  }

  //////  navigation vers next ////////////////////////////
  const navNext = () => {
    const index = teas.findIndex((tea) => tea.teaId === parseInt(id));
    const lastIndex = teas.length 
    if (index === lastIndex-1) return;
    return navigate(`/product/${(teas[index + 1].teaId)}`);
  };


  /////////////////////////////////////////////////////////

  return (
    <main className={`container ${styles.page_product}`}>
      {teasLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {" "}
          {teas
            .filter((tea) => tea.teaId === parseInt(id))
            .map((tea, i) => (
              <article key={i}>
                <div className={styles.prevNext}>
                  <button onClick={navPrevious}>
                    précédent
                
                  </button>
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
                        onChange={handleChange}
                        name="panier"
                        id="panier"
                        value={pannier}
                      >
                        <option value="5,88"  >
                          sachet de 100g{" "}
                        </option>
                        <option value="20,68">Sachet de 500g</option>
                        <option value="34,88">Sachet de 1kg</option>
                      </select>
                      <div id="affPrix">{pannier}</div>
                      <button>Ajouter au pannier</button>
                    </form>
                    <form id="wish">
                      <button className={styles.wishList} >
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
