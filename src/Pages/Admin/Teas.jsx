import styles from "./teas.module.css";
import { useNavigate } from "react-router-dom";

// import des middlewares de redux
import {
  useGetCategoriesQuery,
  useGetTeasQuery,
  useDeleteTeaMutation,
  useSetFavoriteMutation,
} from "../../store/serverApi.js";
import { PUBLIC_DIR } from "../../data/const";

function Teas() {

  const navigate = useNavigate();
  // middleware
  const { data: teas, isLoading: teasLoading } = useGetTeasQuery();
  const { data: categories, isLoading: catLoading } = useGetCategoriesQuery();
  const [deleteTea] = useDeleteTeaMutation();
  const [setFavorite, { isLoading }] = useSetFavoriteMutation();

  const urlImg = (url) => {
    return `${PUBLIC_DIR}/img/teas/${url}`;
  };

  // selection du favorite Tea /////////////////
  const switchFavorite = (newId) => {

    
    // on retrouve l'ancien tea favori 
    const oldFavorite = (teas.find ((element) => (parseInt(element.isFavorite) ===  1 )).teaId);
  
    console.log ("id ancien favori", oldFavorite) 
    console.log ("id nouveau favori", newId)

     const data = JSON.stringify({
       newFavoriteId: newId,
       oldFavoriteId: oldFavorite,
     });

     console.log ("data-favorite", data) ;
     setFavorite({data})



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
                    onClick={() => switchFavorite(tea.teaId)}
                  >
                    {tea.isFavorite !== 0 ? "yes" : "no"}
                  </td>
                  <td>
                    <a
                      className={`button ${styles.button}`}
                      onClick={() =>
                        navigate(`/admin/mofifyTea/${tea.teaId}`)
                      }
                    >
                      Modifier
                    </a>
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
