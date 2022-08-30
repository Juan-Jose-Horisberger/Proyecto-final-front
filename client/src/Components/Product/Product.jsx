import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import addCart from "../../Imagenes/add-cart.svg";
import deleteCart from "../../Imagenes/delete-cart.svg";
import addFav from "../../Imagenes/add-fav.svg";
import deleteFav from "../../Imagenes/delete-fav.svg";
import Cookies from "universal-cookie";
import useHover from "@react-hook/hover";
import {
  deleteFavProduct,
  getFavoriteProduct,
  getCartProduct,
  deleteCartProduct,
} from "../../Redux/Action";
import { useState } from "react";
import { useEffect } from "react";

export default function Product({ id, name, price, image }) {
  const dispatch = useDispatch();
  const productFav = useSelector((state) => state.productFav);
  const productCart = useSelector((state) => state.productCart);
  const cookies = new Cookies();
  /*Hover en la img*/
  const Hovertarget = React.useRef(null);
  const Hovered = useHover(Hovertarget);
  const onHover = React.useRef(false);

  /*Hover en el button*/
  const HovertargetButton = React.useRef(null);
  const HoveredButton = useHover(HovertargetButton);
  const onHoverButton = React.useRef(false);

  /*Hover en el img del button*/
  const HovertargetButton1 = React.useRef(null);
  const HoveredButton1 = useHover(HovertargetButton1);
  const onHoverButton1 = React.useRef(false);

  const handleOnFav = () => {
    const findProduct = productFav.find((e) => e.id === id);

    if (findProduct) {
      dispatch(deleteFavProduct(id));
    } else {
      dispatch(getFavoriteProduct(id));
    }
  };

  const handleOnCart = () => {
    const findProduct = cookies.get(id);

    if (findProduct) {
      dispatch(deleteCartProduct(id));
      cookies.remove(id);
    } else {
      dispatch(getCartProduct(id));
    }
  };

  const validateCart = (id) => {
    const findProductCart = cookies.get(id);

    if (findProductCart) return true;

    return false;
  };

  const validateFav = (id) => {
    const findProductFav = productFav.find((e) => e.id === id);

    return findProductFav;
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.container_productInfo}`}>
        {/* {console.log(Hovertarget + " Hovered")} */}
        <Link
          to={`/ProductDetail/${id}`}
          ref={Hovertarget}
          className={
            Hovered || onHoverButton.current
              ? (onHover.current = true)
              : (onHover.current = false) /*Cambiamos a false para que no tire warning*/
          }
        >
          <img src={image} alt="Imagen no encontrada" className={`img-fluid`} />
        </Link>
        {/*Despues este div aparecera solo cuando se le pase el mouse por arriba de la img*/}

        <button
          onClick={handleOnCart}
          ref={HovertargetButton1}
          className={`${
            HoveredButton1
              ? (onHoverButton1.current = true)
              : (onHoverButton1.current = false)
          }
            ${styles.button1} ${
            (onHover.current || onHoverButton1.current) && styles.open
          }`}
        >
          {validateCart(id) ? (
            <img src={deleteCart} alt="image-not-found" />
          ) : (
            <img src={addCart} alt="image-not-found" />
          )}
        </button>

        <button
          onClick={handleOnFav}
          ref={HovertargetButton}
          className={`${
            HoveredButton
              ? (onHoverButton.current = true)
              : (onHoverButton.current = false)
          } ${styles.button2} ${
            (onHover.current || onHoverButton.current) && styles.open
          } `}
        >
          {validateFav(id) ? (
            <img src={deleteFav} alt="image-not-found" />
          ) : (
            <img src={addFav} alt="image-not-found" />
          )}
        </button>
      </div>

      <div className={`${styles.info} mt-2`}>
        <h1 className={styles.name_Product}>{name}</h1>
        <h2 className={`${styles.price_Product} text-center`}>$ {price}</h2>
      </div>
    </div>
  );
}
