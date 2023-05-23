import React from 'react'
import SelectionCard from './SelectionCard'
import { useGetTeasQuery } from '../../../store/serverApi';
import styles from "./selection.module.css";

function Selection() {


  // recuperation des thés /////////////////////////////////
  const { data: teas, isLoading: teasLoading } = useGetTeasQuery();

  // dernier thé  => position en dernier dans le tableau ///
  const newTea = () => {
    return (teas[teas.length-1]);
  }

  // thé le plus vendu ( random pour l'instant ) ///////////
  const bestTea = () => {
    const index = Math.floor(Math.random() * (teas.length));
    return teas[index];
  };

  // thé avec marqueur loved ( random pour l'instant ) /////
  const lovedTea = () => {
    const index = Math.floor(Math.random() * (teas.length));
    return teas[index];
  };
  //////////////////////////////////////////////////////////
  return (
    <>
    {teasLoading ? (
        <p>Loading</p>
      ) : (
      <section className={`container ${styles.selection}`}>
        <div className={styles.wrapSelection}>
          <article>
            <h2>Notre nouveauté</h2>
            <SelectionCard tea={newTea()} />
          </article>
          <article>
            <h2>Notre best-seller</h2>
            <SelectionCard tea={bestTea()} />
          </article>
          <article>
            <h2>Notre coup de coeur</h2>
            <SelectionCard tea={lovedTea()} />
          </article>
        </div>
      </section>
      )}
    </>
  );
}

export default Selection