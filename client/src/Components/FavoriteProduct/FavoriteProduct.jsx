import React from 'react';
import { useSelector } from 'react-redux';
import styles from './FavoriteProduct.module.css';

export default function FavoriteProduct() {
  const productFav = useSelector(state => state.productFav)

  const handleDelete = (id) => {
    productFav.filter(e => e.id === id)
  }

  return (
    <div className={styles.container}>
      <h1>Hola estas en FavoriteProduct</h1>
      {productFav.length && productFav.map(e => {
        return (
          <div>

            <div>
              <button onClick={() => handleDelete(e.id)}>X</button>
            </div>

            <div>
              <img src={e.image} alt="Image not found" />
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