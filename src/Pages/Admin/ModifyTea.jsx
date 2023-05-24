import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetOneTeaQuery,
  useGetCategoriesQuery,
  useUpdateTeaMutation,
} from "../../store/serverApi";
import styles from "./modifyTea.module.css";

function ModifyTea() {
  const { id } = useParams();
  const [values, setValues] = useState({
    teaId: 0,
    mainTitle: "",
    subTitle: "",
    description: "",
    category_id: "",
  });

  // on recupère le thé à modifier
  const { data: tea, isLoading: teaLoading } = useGetOneTeaQuery(id);
  // et les catégories
  const { data: categories, isLoading: catLoading } = useGetCategoriesQuery();
  // le hook pour upgrade
  const [updateTea, {isLoading}] = useUpdateTeaMutation();


  // on set les valeurs par defaut aux anciennes valeurs 


  useEffect(() => {
    if (!teaLoading && !catLoading) {

        // traitement du champ de la catégorie 
        const idCat = tea[0].category_id;
        const catName = (categories.find ((category) => category.catId === idCat)).catTitle

        console.log (catName)

      setValues({
        ...values,
        teaId: (tea[0]).teaId,
        mainTitle: (tea[0]).mainTitle,
        subTitle: (tea[0]).subTitle,
        description: (tea[0]).description,
        category_id: (tea[0]).category_id,
      });
    }
  }, [tea]);


  const toto = (id) => {

    console.log(categories)
    console.log (id)
    const goodCat = categories.find((category) =>   (category.catId === id) )
    return (goodCat.catTitle)
  }





  ///// gestion du formulaire //////////////////////////////

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      
        "mainTitle": values.mainTitle,
        "subTitle": values.subTitle,
        "description": values.description,
        "category_id": values.category_id
    
    });

    console.log ("data", data)

    updateTea(
      { id: values.teaId, data });

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

  ////////////////////////////////////////////////////////
  return (
    <div className="container">
      {teaLoading || catLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <h2>Modification d'un thé :</h2>
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
              value={values.mainTitle}
              onChange={handleChange}
            />
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
            <select
              onChange={handleChange}
              id="category_id"
              name="category_id"
              defaultValue={values.category_id}
            >
              {categories.map((category, i) => (
                <option
                  key={i}
                  value={category.catId}
                    selected={
                      category.catId === values.category_id ? true : false
                    }
                  // {toto(category.catId)}
                >
                  {category.catTitle}
                </option>
              ))}
            </select>
            {values.category_id}
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
            <input type="submit" value="Validation" /> <br />
          </form>
        </>
      )}
    </div>
  );
}

export default ModifyTea;
