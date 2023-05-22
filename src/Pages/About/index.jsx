import React from 'react'
import Team from './Components/Team';
import Concept from './Components/Concept';
import Values from './Components/Values';

import staff from '../../data/staff.json';
import concept from '../../data/concept.json';
import values from '../../data/values.json';

import styles from './index.module.css';



function About() {
  return (
    <main className={`container ${styles.page_about}`}>
      <h1>Je suis le H1 qui doit disparaitre</h1>
      <h2>Notre équipe</h2>
      <Team staff={staff} />
      <h2>Notre concept</h2>
      <Concept concept={concept} />
      <Values values={values} />
    </main>
  );
}

export default About
