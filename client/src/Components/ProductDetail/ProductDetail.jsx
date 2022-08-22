import React, { useState } from 'react';
import styles from './ProductDetail.module.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from 'react-router-dom';
import { getProductDetail } from '../../Redux/Action/index.js';
import SearchBar from '../SearchBar/SearchBar';

export default function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetail);
    const [detail, setDetail] = useState(0)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (productDetail.length > 0) {
            setLoaded(true);
            return
        }
        dispatch(getProductDetail(id))
            .then(res => res && setLoaded(true))
    }, [])

    return (
        <div className={styles.container}>
            <SearchBar />
            {
                loaded ? (<div>
                    <div className={styles.overallContainer}>
                        <div className={styles.container_1}>
                            <h1>
                                <Link to="/"><span>Inicio</span></Link>
                                <span> / </span>
                                <Link to=""><span>{productDetail.categoryName}</span></Link>
                                <span> / </span>
                                <Link to="/"><span></span></Link>
                                <span>{productDetail.name}</span>
                            </h1>
                            <div>
                                <img src={productDetail.image} alt="imagen" className='img-fluid' />
                            </div>
                        </div>
                        <div className={styles.container_2}>
                            <h1>{productDetail.name}</h1>
                            <h2>$ {productDetail.price}</h2>
                            <p>3 Cuotas sin interés de {(productDetail.price / 3 + "").slice(0, 5)}</p>
                            <h3>Talles disponible: {productDetail.size && productDetail.size.map(a => {
                                return (
                                    <p>{a}</p>
                                )
                            }
                                    
                                )}</h3>

                            <h3>Calificacion: {productDetail.score}</h3>
                            <h3>Disponible: {productDetail.stock}</h3>
                            <h3>Vendido: {productDetail.sold}</h3>

                        </div>

                        <div className={styles.container_3}>
                            <h4>Especificaciones</h4>
                            <div>
                                <p>Genero:</p>
                                <p>{productDetail.genre}</p>
                                <p>Tipo de producto:</p>
                                <p>{productDetail.categoryName}</p>
                                <p>Marca:</p>
                                <p>{productDetail.brand}</p>
                                <p>Disciplina:</p>
                                <p>Moda</p>
                            </div>
                        </div>

                        <div>
                            <h4>Aca mostramos 3 prendas relacionadas</h4>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>) : <p>Cargando...</p>
            }
        </div>
    )
}