import React from "react";
import { useCreateTeaPackMutation, useGetPackagingsQuery, useGetTeasQuery } from "../../store/serverApi";
import styles from "./addTeaPack.module.css";

function AddTeaPack() {

  // recup des teas
  const { data: teas, isLoading: teaLoading } = useGetTeasQuery();
  // recup des packagings existants
  const { data: packagings, isLoading: packagingLoading } =
    useGetPackagingsQuery();
  // hook de creation
  const [createTeaPack] = useCreateTeaPackMutation();

  // gestion des chanps du formulaires /////////////////////
  const [values, setValues] = React.useState({
    stock: 10,
    price: 0,
    tea_id: 0,
    packaging_id: 0,
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // creation de nouveau teaPAck ///////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.tea_id !== 0 && values.packaging_id !== 0) createTeaPack(values);
  };
  ////////////////////////////////////////////////////////////
  return (
    <div className="container">
      {teaLoading || packagingLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="tea_id">
              Choisissez un thé
            </label>
            <select id="tea_id" name="tea_id" onChange={handleChange}>
              <option>selectionner ici</option>
              {teas.map((tea, y) => (
                <option key={y} value={tea.teaId}>
                  {tea.mainTitle}
                </option>
              ))}
            </select>

            <label className={styles.label} htmlFor="packaging_id">
              consitionnement
            </label>

            <select
              id="packaging_id"
              name="packaging_id"
              onChange={handleChange}
            >
              <option>selectionner ici</option>
              {packagings.map((pkg, i) => (
                <option key={i} value={pkg.id}>
                  {pkg.weight}
                </option>
              ))}
            </select>

            <label className={styles.label} htmlFor="price">
              prix
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={values.price}
              onChange={handleChange}
            />
            <label className={styles.label} htmlFor="stock">
              stock
            </label>
            <input
              type="number"
              step={1}
              id="stock"
              name="stock"
              value={values.stock}
              onChange={handleChange}
            />
            <input type="submit" value="Validation" />
          </form>
        </>
      )}
    </div>
  );
}

export default AddTeaPack;
