import styles from "./teas.module.css";

// import des middlewares de redux
import {
  useGetCategoriesQuery,
  useGetTeasQuery,
  useDeleteTeaMutation,
} from "../../store/serverApi.js";
import { PUBLIC_DIR } from "../../data/const";

function Teas() {
  // middleware
  const { data: teas, isLoading: teasLoading } = useGetTeasQuery();
  const { data: categories, isLoading: catLoading } = useGetCategoriesQuery();
  const [deleteTea] = useDeleteTeaMutation();

  const urlImg = (url) => {
    return `${PUBLIC_DIR}/img/teas/${url}`;
  };

  // selection du favorite Tea /////////////////
  const setFavorite = (newId) => {

    // on retrouve l'ancien tea favori 
    const oldFavorite = teas.find ((element) => (parseInt(element.isFavorite) ===  1 ));
    // on passe le isFavorite de l'ancien à 0
    console.log ("ancien favori", oldFavorite) 
    // on set le nouveau favori
    console.log ("nouveau favori", newId)

  }




  //selection du nom de la catégorie en fonction de l'id passé avec le thé
  const findCat = (idCat) => {
    for (const category of categories) {
      if (category.catId === idCat) return category.catTitle;
    }
  };

  /////////////////////////////////////////////////////////////////
  return (
    <div className="container">
      {teasLoading || catLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <table className={styles.adminCat}>
            <thead>
              <tr>
                <th>designation</th>
                <th>catégorie</th>
                <th>sous titre</th>
                <th>photo</th>
                <th>description</th>
                <th>favori</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {teas.map((tea, i) => (
                <tr key={i}>
                  <td>{tea.mainTitle}</td>
                  <td>{findCat(tea.category_id)}</td>

                  <td>
                    <div className={styles.tableH}>{tea.subTitle}</div>
                  </td>
                  <td>
                    <img src={urlImg(tea.url)} />
                  </td>
                  <td className={styles.noPad}>
                    <div className={styles.tableH}>{tea.description}</div>
                  </td>
                  <td
                    className={styles.onOver}
                    onClick={() => setFavorite(tea.teaId)}
                  >
                    {tea.isFavorite !== 0 ? "yes" : "no"}
                  </td>
                  <td>
                    <a className={`button ${styles.button}`}>Modifier</a>
                  </td>
                  <td>
                    <a
                      className={`button ${styles.button}`}
                      onClick={() => deleteTea(tea.teaId)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Teas;
