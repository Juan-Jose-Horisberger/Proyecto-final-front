import React from 'react';
import { Link } from "react-router-dom";
import styles from './Product.module.css';

export default function Product({id,name,price,image}){
  return(

    <div className={styles.container}>
           
      <h1>{name.toUpperCase()}</h1>
      <Link to={`/ProductDetail/${id}`}>
        <img src={image} alt="Imagen no encontrada" width='290px' height='200px' />
      </Link>
      <h2>{price}</h2>
      <button>Carrito</button>
      <button>Favoritos</button>
        
    </div>
      )
  }
        