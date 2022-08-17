import React from 'react';
import styles from './ProductDetail.module.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

export default function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetail);

    useEffect( () => {
        dispatch(getProductById(id))
      }, [])

    return (
        <div className={styles.container}>
            <h1>{productDetail.nombre}</h1>
            <h3>{productDetail.img}</h3>
            <h3>$ {productDetail.precio}</h3>
            <h3>Calificacion: {productDetail.calificacion}</h3>
            <h3>Disponible: {productDetail.stock}</h3>
            <h3>Vendido: {productDetail.vendido}</h3>
            <h3>Talles disponible: {productDetail.talle}</h3>
        </div>
    )
}