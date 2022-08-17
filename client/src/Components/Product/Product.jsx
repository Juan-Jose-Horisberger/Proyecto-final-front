import React from 'react';
import styles from './Product.module.css';

export default function Product({name,price,image}){
  return(

    <div className={styles.container}>
           
      <h1>{name.toUpperCase()}</h1>
      <img src={image} alt="Imagen no encontrada" width='290px' height='200px' />
      <h2>{price}</h2>
      <button>Carrito</button>
      <button>Favoritos</button>
        
    </div>
      )
  }
        