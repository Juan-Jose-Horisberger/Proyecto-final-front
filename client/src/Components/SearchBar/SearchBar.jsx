import React from 'react';
import styles from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("")

  function handleOnClick() {
    productName ? dispatch(getProductByName(productName)) : alert("No escribiste nada");
  }

  return (
    <div className={styles.container}>
      <Link>
        <span>About</span>
      </Link>

      <h1>GAED.JM</h1>

      <input type="text"
        value={productName}
        placeholder="Buscar..."
        onChange={e => setProductName(e.target.value)} />

      <button onClick={handleOnClick}>Buscar</button>

      <Link>Carrito</Link>
      <Link>Favoritos</Link>
      <Link>Registrate</Link>
      <Link>Inicia Sesion</Link>
    </div>
  )
}