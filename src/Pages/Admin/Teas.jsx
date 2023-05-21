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

  //selection du nom de la catégorie en fonction de l'id passé avec le thé
  const findCat = (idCat) => {
    for (const category of categories) {
      if (category.catId === idCat) return category.catTitle;
    }
  };

  /////////////////////////////////////////////////////////////////
  return (
    <div className={styles.container}>
      {teasLoading || catLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {teas.map((tea, i) => (
            <article key={i}>
              <h3>{tea.mainTitle}</h3>

              <p>Thé de la catégorie {findCat(tea.category_id)}</p>
              <p>{tea.subTitle}</p>

              <img src={urlImg(tea.url)} />
              <p>{tea.description}</p>

              <a className="button" onClick={() => deleteTea(tea.teaId)}>
                Delete
              </a>
              <div className={styles.clear}></div>
            </article>
          ))}
        </>
      )}
    </div>
  );
}

export default Teas;
