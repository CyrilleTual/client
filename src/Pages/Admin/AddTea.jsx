import {useEffect, useState} from 'react'
import { BASE_URL } from '../../data/const.js';
import styles from "./addCategory.module.css";
import ImageUpload from "./Components/ImageUpload";

function AddTea() {

  // recupération des catégories
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    let urlReq = `${BASE_URL}/category`;
    async function fetchData() {
      await fetch(urlReq)
        .then((res) => res.json())
        .then((datas) => setDatas(datas.categories));
    }
    fetchData();
  },[]);



    const [values, setValues] = useState({
      mainTitle: "",
      subTitle: "",
      description: "",
      category_id: "",
      imgTitle: "",
    });
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log (values)
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      await fetch("http://localhost:9002/tea/add", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("File upload failed");
          }
        })
        .then((data) => {
          console.log("Server response:", data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    };

  return (
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

        <select
            onChange={handleChange}
            id="category_id"
            name="category_id"
        >
            <option value="0"/>
        {datas.map((category, i) => (
          <option value={category.catId}>
            {category.catTitle}
          </option>
        ))}

        </select> {values.category_id}

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
  );
}

export default AddTea