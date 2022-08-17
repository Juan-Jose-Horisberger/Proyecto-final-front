import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Product from '../Product/Product.jsx';
import { getAllProducts } from '../../Redux/Action';

export default function Home() {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.products);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (allProducts.length) {
            return;
        }
        dispatch(getAllProducts());
        setLoaded(true);
    }, [])

    return (
        <div className={styles.container}>
            <h1>BERSACHE</h1>
            {
                loaded ? (
                    <div>
                        {allProducts.length && allProducts.map((p, i) =>
                            <div key={i}>
                                <Product
                                    id={p.id}
                                    name={p.nombre}
                                    price={p.precio}
                                    image={p.img}
                                />
                            </div>
                        )}
                    </div>
                )
                : <p>Loading...</p>
            }


        </div>
    )
}