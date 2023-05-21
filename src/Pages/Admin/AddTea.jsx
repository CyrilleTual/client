import {useState} from 'react'
import styles from "./addCategory.module.css";
import ImageUpload from "./Components/ImageUpload";
import { useGetCategoriesQuery, useCreateTeaMutation } from '../../store/serverApi.js';


function AddTea() {

  // recupération des catégories pour le select //////////////////
  const { data: categories, isLoading } = useGetCategoriesQuery();

  // gestion des chanps du formulaires ///////////////////////////
  const [values, setValues] = useState({
    mainTitle: "",
    subTitle: "",
    description: "",
    category_id: "",
    imgTitle: "",
  });
  const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
  };

  ///////// creation du nouveau thé //////////////////////////

  const [createTea] = useCreateTeaMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    createTea(formData);
    // reset des champs du form
    setValues({
      ...values,
      mainTitle: "",
      subTitle: "",
      description: "",
      category_id: "",
      imgTitle: "",
    });
  };

    ////////////////////////////////////////////////////////////

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <h2>Ajout d'un thé :</h2>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            method="POST "
            encType="multipart/form-data"
          >
            <label className={styles.label} htmlFor="mainTitle">
              titre
            </label>
            <input
              type="text"
              id="mainTitle"
              name="mainTitle"
              value={values.title}
              onChange={handleChange}
            />
            <br />
            <label className={styles.label} htmlFor="subTitle">
              sous-titre
            </label>
            <input
              type="text"
              id="subTitle"
              name="subTitle"
              value={values.subTitle}
              onChange={handleChange}
            />
            <label className={styles.label} htmlFor="category_id">
              Choisissez une catégorie
            </label>
            <select onChange={handleChange} id="category_id" name="category_id">
              <option value="0" />
              {categories.map((category, i) => (
                <option key={i} value={category.catId}>
                  {category.catTitle}
                </option>
              ))}
            </select>
            {values.category_id}
            <br />
            <label className={styles.label} htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={8}
              cols={5}
              value={values.description}
              onChange={handleChange}
            />
            <br />
            <label className={styles.label} htmlFor="imgTitle">
              Texte alternatif image
            </label>
            <input
              type="text"
              id="imgTitle"
              name="imgTitle"
              value={values.imgTitle}
              onChange={handleChange}
            />
            <br />
            <ImageUpload />
            <br />
            <input type="submit" value="Add" />
          </form>
        </>
      )}
    </>
  );
}

export default AddTea