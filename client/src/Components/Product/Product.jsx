import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import styles from './Product.module.css';
import addCart from "../../Imagenes/add-cart.svg";
import deleteCart from "../../Imagenes/delete-cart.svg";
import addFav from "../../Imagenes/add-fav.svg"
import deleteFav from "../../Imagenes/delete-fav.svg"
import { deleteFavProduct, getFavoriteProduct, getCartProduct, deleteCartProduct } from '../../Redux/Action';

export default function Product({ id, name, price, image }) {
    const dispatch = useDispatch()
    const productFav = useSelector(state => state.productFav)
    const productCart = useSelector(state => state.productCart)

    const handleOnFav = () => {
        const findProduct = productFav.find(e => e.id === id)

        if (findProduct) {
            dispatch(deleteFavProduct(id))
        } else {
            dispatch(getFavoriteProduct(id))
        }
    }

    const handleOnCart = () => {
        const findProduct = productCart.find(e => e.id === id)

        if (findProduct) {
            dispatch(deleteCartProduct(id))
        } else {
            dispatch(getCartProduct(id))
        }
    }

    const validateCart = (id) => {
        const findProductCart = productCart.find(e => e.id === id);

        return findProductCart;
    }

    const validateFav = (id) => {
        const findProductFav = productFav.find(e => e.id === id);

        return findProductFav;
    }

    return (

        <div className={`${styles.container}`}>
            <div>
                <div>
                    <Link to={`/ProductDetail/${id}`}>
                        <img src={image} alt="Imagen no encontrada" className={`img-fluid`} />
                    </Link>
                </div>
                <div>  {/*Despues este div aparecera solo cuando se le pase el mouse por arriba de la img*/}
                    {validateCart(id) ?
                        <button onClick={handleOnCart}>
                            <img src={deleteCart} alt="image-not-found" width="60px" />
                        </button> :
                        <button onClick={handleOnCart}>
                            <img src={addCart} alt="image-not-found" width="60px" />
                        </button>
                    }


                    {validateFav(id) ?
                        <button onClick={handleOnFav}>
                            <img src={deleteFav} alt="image-not-found" width="40px" />
                        </button> :
                        <button onClick={handleOnFav}>
                            <img src={addFav} alt="image-not-found" width="40px" />
                        </button>}
                </div>
            </div>
            <div>
                <h1 className={styles.name_Product}>{name}</h1>
                <h2 className={`${styles.price_Product}`}>$ {price}</h2>
            </div>
        </div>
    )
}
