import React from 'react';
import styles from './values.module.css';

function Values({values}) {
  // recup de l'image /////////////////////////////////////
  const urlImg = (url) => {
    return require(`../../../assets/img/about/${url}`);
  };

  return (
    <>
      {!values ? (
        <p>loading</p>
      ) : (
        <div className={styles.values}>
          {values.map((item, i) => (
            <div key={i}>
              <img src={urlImg(item.icon_url)} />
              <h3>{item.title}</h3>
              <p>{item.p1}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Values