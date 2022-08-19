import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteProduct, deleteFavProduct } from '../../Redux/Action';
import styles from './FavoriteProduct.module.css';

export default function FavoriteProduct() {
  const productFav = useSelector(state => state.productFav);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id)
    dispatch(deleteFavProduct(id))
  }

  return (
    <div className={styles.container} key="Asdasd">
      <h1>Hola estas en FavoriteProduct</h1>
      {productFav.length && productFav.map(e => {
        return (
          <div key={e.id}>

            <div>
              <button onClick={() => handleDelete(e.id)}>X</button>
            </div>

            <div>
              <img src={e.img} alt="Image not found" />
            </div>

            <div>
              <p>{e.name}</p>
              <p>{e.price}</p>
              <p>{e.stock}</p>
            </div>

            <div>
              <button>Añadir a Carrito</button>
            </div>

          </div>
        )
      })}
    </div>
  )
}