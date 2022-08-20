import React from 'react';
import styles from './ProductDetail.module.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import {getProductDetail} from '../../Redux/Action/index.js'

export default function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetail);

    useEffect( () => {
        dispatch(getProductDetail(id))
      }, [id])

    return (
        <div className={styles.container}>
            <h1>{productDetail && productDetail.name}</h1>
            <img src={productDetail && productDetail.image} alt="imagen" />
            <h3>$ {productDetail && productDetail.price}</h3>
            <h3>Calificacion: {productDetail && productDetail.score}</h3>
            <h3>Disponible: {productDetail && productDetail.stock}</h3>
            <h3>Vendido: {productDetail && productDetail.sold}</h3>
            <h3>Talles disponible: {productDetail && productDetail.size}</h3>
        </div>
    )
}