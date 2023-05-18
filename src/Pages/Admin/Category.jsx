import {useState, useEffect} from 'react'
import { BASE_URL } from '../../data/const.js';
import { PUBLIC_DIR } from "../../data/const";

function Category() {


  // on va chercher le catalogue de produits
  const [datas, setDatas] = useState([]);
  const [reload, setReload]= useState(0)

  useEffect(() => {
    let urlReq = `${BASE_URL}/category`;
    async function fetchData() {
      await fetch(urlReq)
        .then((res) => res.json())
        .then((datas) => setDatas(datas.categories));
    }
    fetchData();
  }, [reload]);  

  const urlImg = (url) => {
    return( `${PUBLIC_DIR}/img/categories/${url}` ) 
  }

  // delete à ce niveau 

  const handleDelete = async (id) => {
    let urlReq = `${BASE_URL}/category/${id}`;
    await fetch(urlReq, {method: "DELETE"})
    .catch((error) => {
        console.error("Error deleting file:", error);
    });
    setReload (reload +1)  
  };

  ///////////////////////
  return (
    <div>
      {!datas.length ? (
        <p>Loading</p>
      ) : (
        <ul>
          {datas.map((category, i) => (
            <article key={category.catTitle}>
              <h3>{category.catTitle}</h3>
              <p>{category.description}</p>
              <img src={urlImg(category.url)} />
              <a
                className="button"
                onClick={() => handleDelete(category.catId)}
              >
                Delete
              </a>
            </article>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Category