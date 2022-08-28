import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartProduct } from '../../Redux/Action';
import styles from './Cart.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie"
import useForm from '../Checkout/useForm';

export default function Cart() {
  const cookies = new Cookies()
  var expiryDate = new Date(Date.now() + (100 * 24 * 3600000));
  const productCart = useSelector(state => state.productCart);
  productCart.map(e => cookies.set(e.id, e, {path: "/", expires: expiryDate}))
  const cuki = cookies.getAll();
  var products = Object.entries(cuki)
  const [checkout, setCheckout] = useState(0)
  const dispatch = useDispatch();
  const { handleBuy } = useForm()

  const handleDelete = (id) => {
    dispatch(deleteCartProduct(id))
    cookies.remove(id)
    console.log(id)
  };

  const handleCheckout = () => {
    var price = 0;
    products.map(e => price = price + e[1].price);
    setCheckout(price)
  }

  useEffect(() => {
    handleCheckout()
  }, [productCart])

  return (
    <div className={styles.container} key="Asdasd">
      {/* <SearchBar /> */}

      <p className='mb-4'><Link to="/">Inicio</Link>/Carrito</p>

      {products.length ? products.map(e => {
        return (e[1].id ?
          <div key={e[1].id} className={styles.divProduct}>

            <div className={styles.divBtnDelete}>
              <button onClick={() => handleDelete(e[1].id)} className={styles.btnDelete}>
                x
              </button>
            </div>

            <div className={styles.divImage}>
              <Link to={`/ProductDetail/${e[1].id}`}><img src={e[1].image} alt="Image not found" className={styles.image} /></Link>
            </div>

            <div className={styles.divName}>
              <Link to={`/ProductDetail/${e[1].id}`}><p>{e[1].name}</p></Link>
            </div>

            <div className={styles.divPrice}>
              <p>$ {e[1].price}</p>
            </div>

            <div className={styles.divStock}>
              {e[1].stock === 0 ?
                <p className={styles.pStock}>OUT OF STOCK</p>
                :
                <p className={styles.pStock}>IN STOCK</p>}
            </div>

            <div className={styles.divBtnbuy}>
              <Link to="/Checkout">
                <button onClick={(ev) => handleBuy(e[1].id)} className={styles.btnBuy}>Comprar</button>
              </Link>
            </div>
          </div> : true
        )
      }) :
        <h1>No agregaste productos a tu carrito</h1>}

      <div>
        <Link to="/Checkout">
          <button onClick={(ev) => handleBuy()} className={styles.btnCheckout}>
            ${checkout} Checkout
          </button>
        </Link>
      </div>
    </div>
  )
}