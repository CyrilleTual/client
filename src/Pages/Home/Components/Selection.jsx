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
      <section className="container selection">
        <h2>Notre sélection</h2>
        <div className="wrapSelection">
          <article>
            <h3>Notre nouveauté</h3>
            <SelectionCard tea={newTea()} />
          </article>
          <article>
            <h3>Notre best-seller</h3>
            <SelectionCard tea={bestTea()} />
          </article>
          <article>
            <h3>Notre coup de coeur</h3>
            <SelectionCard tea={lovedTea()} />
          </article>
        </div>
      </section>
      )}
    </>
  );
}

export default Selection