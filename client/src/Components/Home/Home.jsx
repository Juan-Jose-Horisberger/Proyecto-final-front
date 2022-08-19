import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { getAllProducts } from '../../Redux/Action';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Pagination from '../Pagination/Pagination.jsx';

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

            <div className={`${styles.container_Filters}`}>
                <h3>Filtro</h3>
                <div>
                    <h4>Categoria</h4>
                    <select className="form-select" aria-label="Default select example">
                        <option>Indumentaria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
                    <h4>Marcas</h4>
                    <select className="form-select" aria-label="Default select example">
                        <option>Selecciona una marca</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
                    <h4>Talle Calzado</h4>
                    <select className="form-select" aria-label="Default select example">
                        <option>Selecciona un talle</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
                    <h4>Talle Indumentaria</h4>
                    <select className="form-select" aria-label="Default select example">
                        <option>Selecciona un talle</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
                    <h4>Precio</h4>
                    <label className="form-label">Example range</label>
                    <input type="range" className="form-range" id="customRange1"></input>

                    <p>Mostramos la info del range</p>
                </div>
            </div>

            <Pagination
                allProducts={allProducts}
                loaded={loaded}
            />

        </div>
    )
}