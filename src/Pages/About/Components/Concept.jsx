import React from 'react'
import styles from './concept.module.css'

function Concept({concept}) {
  return (
    <>
      {!concept ? (
        <p>loading</p>
      ) : (
        <div className={styles.concept}>
          {concept.map((item, i) => (
            <div key ={i}>
              <p>{item.p1}</p>
              <p>{item.p2}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Concept