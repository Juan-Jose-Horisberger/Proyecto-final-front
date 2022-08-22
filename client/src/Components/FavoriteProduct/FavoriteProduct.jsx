import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteProduct, deleteFavProduct } from '../../Redux/Action';
import styles from './FavoriteProduct.module.css';
import SearchBar from "../SearchBar/SearchBar.jsx";
import unaX from "../../Imagenes/unaX.svg"

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

            <div className={styles.divBtnDelete}>
              <button onClick={() => handleDelete(e.id)} className={styles.btnDelete}>
               x
              </button>
            </div>
            {/* <button type="button" className="btn-close btn-close-white"></button> */}

            <div className={styles.divImage}>
              <img src={e.image} alt="Image not found" className={styles.image}/>
            </div>

            <div className={styles.divName}>
              <p>{e.name}</p>
            </div>

            <div className={styles.divPrice}>
              <p>$ {e.price}</p>
            </div>

            <div className={styles.divStock}>
              {e.stock === 0 ? 
              <p className={styles.pStock}>OUT OF STOCK</p>
              :
              <p className={styles.pStock}>IN STOCK</p>}
            </div>

            <div className={styles.divBtnCart}>
              <button className={styles.btnCart}>Añadir al Carrito</button>
            </div>

          </div>
        )
      }) :
      <h1>No agregaste productos a tus favoritos</h1>}
    </div>
  )
}