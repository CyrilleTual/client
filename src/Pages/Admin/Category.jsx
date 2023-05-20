// import des middlewares de redux
import { useGetCategoriesQuery, useDeleteCategoryMutation } from '../../store/serverApi.js';
import { PUBLIC_DIR } from "../../data/const";

function Category() {

  // middleware d'affichage des catégories
  const { data: categories, isLoading } = useGetCategoriesQuery();
  // middleware de delete des catégories
  const [deleteCategory] = useDeleteCategoryMutation();

  const urlImg = (url) => {
    return `${PUBLIC_DIR}/img/categories/${url}`;
  };

  ///////////////////////
  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {categories?.map((category, i) => (
            <article key={category.catTitle}>
              <h3>{category.catTitle}</h3>
              <p>{category.description}</p>
              <img src={urlImg(category.url)} />
              <a
                className="button"
                onClick={() => deleteCategory(category.catId)}
              >
                Delete
              </a>
            </article>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Category