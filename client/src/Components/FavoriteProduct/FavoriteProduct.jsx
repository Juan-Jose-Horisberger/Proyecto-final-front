import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteProduct, deleteFavProduct, getCartProduct, deleteCartProduct } from '../../Redux/Action';
import styles from './FavoriteProduct.module.css';
import SearchBar from "../SearchBar/SearchBar.jsx";
import unaX from "../../Imagenes/unaX.svg"
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";

export default function FavoriteProduct() {
  const productFav = useSelector(state => state.productFav);
  const cookies = new Cookies();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteFavProduct(id))
  };

  const handleOnCart = (id) => {
    const findProduct = cookies.get(id)

    if (findProduct) {
      dispatch(deleteCartProduct(id));
      cookies.remove(id)
    } else {
      dispatch(getCartProduct(id))
    }
  }

  const validateCart = (id) => {
    const findProductCart = cookies.get(id);

    if (findProductCart) return true;

    return false;
  }
  return (
    <div className={styles.container} key="Asdasd">
      {/* <SearchBar /> */}

      <p className='mb-4'><Link to="/">Inicio</Link>/Favoritos</p>

      {productFav.length ? productFav.map(e => {
        return (
          <div key={e.id} className={styles.divProduct}>

            <div className={styles.divBtnDelete}>
              <button onClick={() => handleDelete(e.id)} className={styles.btnDelete}>
                x
              </button>
            </div>

            <div className={styles.divImage}>
              <Link to={`/ProductDetail/${e.id}`}>
                <img src={e.image} alt="Image not found" className={styles.image} />
              </Link>
            </div>

            <div className={styles.divName}>
              <Link to={`/ProductDetail/${e.id}`}>
                <p>{e.name}</p>
              </Link>
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

            {validateCart(e.id) ?
              <div className={styles.divBtnCart}>
                <button onClick={(ev) => handleOnCart(e.id)}
                  className={styles.btnCart}>Añadido al Carrito</button>
              </div>
              :
              <div className={styles.divBtnCart}>
                <button onClick={(ev) => handleOnCart(e.id)}
                  className={styles.btnCart}>Añadir al Carrito</button>
              </div>}

          </div>
        )
      }) :
        <h1>No agregaste productos a tus favoritos</h1>}
    </div>
  )
}