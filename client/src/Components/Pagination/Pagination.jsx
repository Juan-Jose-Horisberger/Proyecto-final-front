import React, { useEffect, useState } from 'react';
import styles from './Pagination.module.css';
import Product from '../Product/Product.jsx';

export default function Pagination({ allProducts, loaded }) {

    return (

        <div className={`${styles.container_Cards} col-9`} style={{ border: '1px solid red' }}>

            {
                loaded ? (
                    <div className={`d-flex flex-wrap justify-content-sm-evenly`}>
                        {allProducts.length ? allProducts.map((p, i) =>
                            <Product
                                key={i}
                                id={p.id}
                                name={p.nombre}
                                price={p.precio}
                                image={p.img}
                            />
                        )
                            : <h1>No se encontro lo que se esta buscando</h1>
                        }
                    </div>
                )
                : <p>Loading...</p>
            }

        </div>

    )
}