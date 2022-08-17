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
            {console.log(productDetail)}
            <h1>{productDetail.length && productDetail[0].name}</h1>
            <img src={productDetail.length && productDetail[0].img} alt="imagen" />
            <h3>$ {productDetail.length && productDetail[0].precio}</h3>
            <h3>Calificacion: {productDetail.length && productDetail[0].calificacion}</h3>
            <h3>Disponible: {productDetail.length && productDetail[0].stock}</h3>
            <h3>Vendido: {productDetail.length && productDetail[0].vendido}</h3>
            <h3>Talles disponible: {productDetail.length && productDetail[0].talle}</h3>
        </div>
    )
}