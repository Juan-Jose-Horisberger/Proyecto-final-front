import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Product from '../Product/Product.jsx';
import { getAllProducts } from '../../Redux/Action';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function Home() {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.products);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        // if (allProducts.length) {
        //     return;
        // }
        dispatch(getAllProducts());
        setLoaded(true);
    }, [])

    return (
        <div className={`${styles.container} container-fluid p-0 d-flex flex-wrap justify-content-evenly`}>
            <div className={'col-12'}>
                <SearchBar />
            </div>

            <div className={`${styles.container_Filters}`} style={{ border: '1px solid red' }}>
                <h3>Filtro</h3>
                <div>
                    <h4>Categoria</h4>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Indumentaria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
                    <h4>Marcas</h4>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecciona una marca</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
                    <h4>Talle Calzado</h4>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecciona un talle</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
                    <h4>Talle Indumentaria</h4>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecciona un talle</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
                    <h4>Precio</h4>
                    <label for="customRange1" class="form-label">Example range</label>
                    <input type="range" class="form-range" id="customRange1"></input>

                    <p>Mostramos la info del range</p>
                </div>
            </div>

            {
                loaded ? (
                    <div className={`${styles.container_Cards} col-9 d-flex flex-wrap justify-content-sm-evenly`} style={{ border: '1px solid red' }}>
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