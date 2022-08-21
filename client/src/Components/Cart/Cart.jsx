import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartProduct } from '../../Redux/Action';
import styles from './Cart.module.css';
import SearchBar from '../SearchBar/SearchBar';

export default function Cart() {
  const productCart = useSelector(state => state.productCart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCartProduct(id))
  }

  return (
    <div className={styles.container} key="Asdasd">
      <SearchBar />
      {productCart.length ? productCart.map(e => {
        return (
          <div key={e.id} className={styles.divProduct}>

            <div className={styles.divBtn}>
              <button onClick={() => handleDelete(e.id)} className="btn-close mx-auto p-3" aria-label="Close"></button>
            </div>

            <div className={styles.divImage}>
              <img src={e.image} alt="Image not found" className={styles.image} />
            </div>

            <div>
              <p>{e.name}</p>
              <p>$ {e.price}</p>
              <p>{e.stock}</p>
            </div>

            <div>
              <button>Comprar</button>
            </div>

          </div>
        )
      }) :
        <h1>No agregaste productos a tus favoritos</h1>}
    </div>
  )
}