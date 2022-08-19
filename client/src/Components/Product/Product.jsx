import React from 'react';
import { Link } from "react-router-dom";
import styles from './Product.module.css';

export default function Product({ id, name, price, image }) {
    return (

        <div className={`${styles.container}`}>
            <div>
                <div>
                    <Link to={`/ProductDetail/${id}`}>
                        <img src={image} alt="Imagen no encontrada" className={`img-fluid`} />
                    </Link>
                </div>
                <div>  {/*Despues este div aparecera solo cuando se le pase el mouse por arriba de la img*/}
                    <button>Carrito</button>
                    <button>Favoritos</button>
                </div>
            </div>
            <div>
                <h1 className={styles.name_Product}>{name}</h1>
                <h2 className={`${styles.price_Product}`}>$ {price}</h2>
            </div>
        </div>
    )
}
