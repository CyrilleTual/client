import React from "react";
import styles from "./addCategory.module.css";
import ImageUpload from "./Components/ImageUpload";

import { useCreateCategoryMutation } from "../../store/serverApi.js";


function AddCategory() {

  // gestion du formulaire /////////////////////  
  const [values, setValues] = React.useState({
    title: "",
    description: "",
    imgTitle: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  ///////////  on veut post formData /////////////////////////////////

  const [ createCategory, {isLoading}] = useCreateCategoryMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    createCategory(formData);
   setValues({ ...values, title: "", description: "", imgTitle: "" });

  };

 //////////////////////////////////////////////////////////////////
  return (
    <> 

        <h2>Ajout d'une catégorie :</h2>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        method="POST "
        encType="multipart/form-data"
      >
        <label className={styles.label} htmlFor="title">
          titre
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
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
          img Title
        </label>
        <input
          type="text"
          id="imgTitle"
          name="imgTitle"
          value={values.imgTitle}
          onChange={handleChange}
        />
        <br />
        < ImageUpload />
        <br />

        <input type="submit" value="Add" />
      </form>
    </>
  );
}

export default AddCategory;
