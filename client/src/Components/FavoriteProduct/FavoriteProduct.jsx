import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteProduct, deleteFavProduct } from '../../Redux/Action';
import styles from './FavoriteProduct.module.css';
import SearchBar from "../SearchBar/SearchBar.jsx"

export default function FavoriteProduct() {
  const productFav = useSelector(state => state.productFav);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteFavProduct(id))
  }

  return (
    <div className={styles.container} key="Asdasd">
      <SearchBar />
      {productFav.length ? productFav.map(e => {
        return (
          <div key={e.id} className={styles.divProduct}>

            <div className={styles.divBtn}>
              <button onClick={() => handleDelete(e.id)} className="btn-close mx-auto p-3" aria-label="Close"></button>
            </div>

            <div className={styles.divImage}>
              <img src={e.image} alt="Image not found" className={styles.image}/>
            </div>

            <div>
              <p>{e.name}</p>
              <p>$ {e.price}</p>
              <p>{e.stock}</p>
            </div>

            <div>
              <button>Añadir a Carrito</button>
            </div>

          </div>
        )
      }) :
      <h1>No agregaste productos a tus favoritos</h1>}
    </div>
  )
}