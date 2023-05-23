import React from 'react';
import noel from '../../../assets/img/offre-noel.jpg';
import styles from './pub.module.css'

function Pub() {
  return (
    <aside className={styles.pub}>
        <strong>C'est noël, profitez-en</strong>
        <img src={noel} alt="offre spéciale noël"/>
        <small>* Pour toute commande effectuée avant le 20 décembre </small>
    </aside>
  )
}
export default Pub