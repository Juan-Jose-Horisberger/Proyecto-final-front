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

            <div className={styles.divBtnDelete}>
              <button onClick={() => handleDelete(e.id)} className={styles.btnDelete}>
                x
              </button>
            </div>

            <div className={styles.divImage}>
              <img src={e.image} alt="Image not found" className={styles.image} />
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

            <div className={styles.divBtnbuy}>
              <button className={styles.btnBuy}>Comprar</button>
            </div>

          </div>
        )
      }) :
        <h1>No agregaste productos a tus favoritos</h1>}
    </div>
  )
}