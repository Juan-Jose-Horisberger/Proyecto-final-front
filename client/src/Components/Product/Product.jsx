import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import addCart from "../../Imagenes/add-cart.svg";
import deleteCart from "../../Imagenes/delete-cart.svg";
// import addFav from "../../Imagenes/add-fav.svg";
import addFav from "../../Imagenes/favorites.svg";

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

export default function Product({
  id,
  name,
  price,
  image,
  offer,
  discount,
  landingPage,
}) {
  const dispatch = useDispatch();
  const productFav = useSelector((state) => state.productFav);
  const productCart = useSelector((state) => state.productCart);
  const cookies = new Cookies();
  /*Hover en la img*/
  const Hovertarget = React.useRef(null);
  const Hovered = useHover(Hovertarget);
  const onHover = React.useRef(false);

  /*Hover en el button2*/
  const HovertargetButton = React.useRef(null);
  const HoveredButton = useHover(HovertargetButton);
  const onHoverButton = React.useRef(false);

  /*Hover en el button1*/
  const HovertargetButton1 = React.useRef(null);
  const HoveredButton1 = useHover(HovertargetButton1);
  const onHoverButton1 = React.useRef(false);

  const grandTotalRef = React.useRef("");

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

  const priceWithDiscount = (price, discount) => {
    let discountNumber;
    if (discount) {
      if (discount === "10%") {
        discountNumber = 0.1;
      } else if (discount === "20%") {
        discountNumber = 0.2;
      } else if (discount === "30%") {
        discountNumber = 0.3;
      } else if (discount === "40%") {
        discountNumber = 0.4;
      } else {
        discountNumber = 0.5;
      }
    }
    const discountLogic = price * discountNumber; //Calculamos descuento
    // console.log(discountNumber);

    const grandTotal = price - discountLogic; //El total con descuento.
    grandTotalRef.current = grandTotal;
    return (
      <div className={`${styles.container_price}`}>
        <p>${price}</p>
        <h2>${grandTotal}</h2>
      </div>
    );
  };

  return (
    <>
      {landingPage ? (
        <div className={`${styles.containerLandingPage}`}>
          <div className={`${styles.container_productInfo}`}>
            {/* {console.log(Hovertarget + " Hovered")} */}
            <Link
              to={`/ProductDetail/${id}`}
              ref={Hovertarget}
              className={
                Hovered || onHoverButton.current
                  ? (onHover.current = 1)
                  : (onHover.current = 0) /*Cambiamos a 0 para que no tire warning*/
              }
            >
              <img
                src={image}
                alt="Imagen no encontrada"
                className={`img-fluid`}
              />
              {landingPage && <p className={`${styles.newProduct}`}>NEW</p>}
              {offer && <p className={`${styles.discountP}`}>-{discount}</p>}
            </Link>
            {/*Despues este div aparecera solo cuando se le pase el mouse por arriba de la img*/}

            <button
              onClick={handleOnCart}
              ref={HovertargetButton1}
              className={`${
                HoveredButton1
                  ? (onHoverButton1.current = 1)
                  : (onHoverButton1.current = 0)
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
                  ? (onHoverButton.current = 1)
                  : (onHoverButton.current = 0)
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
            <div className="col-12">
              <h3 className={`${styles.name_Product}`}>{name}</h3>
            </div>
            {offer ? (
              priceWithDiscount(price, discount)
            ) : (
              <div>
                <h2 className="mb-3 fs-5">${price}</h2>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={`${styles.container}`}>
          <div className={`${styles.container_productInfo}`}>
            {/* {console.log(Hovertarget + " Hovered")} */}
            <Link
              to={`/ProductDetail/${id}`}
              ref={Hovertarget}
              className={
                Hovered || onHoverButton.current
                  ? (onHover.current = 1)
                  : (onHover.current = 0) /*Cambiamos a 0 para que no tire warning*/
              }
            >
              <img
                src={image}
                alt="Imagen no encontrada"
                className={`img-fluid`}
              />
              {offer && <p className={`${styles.discountP}`}>-{discount}</p>}
            </Link>
            {/*Despues este div aparecera solo cuando se le pase el mouse por arriba de la img*/}

            <button
              onClick={handleOnCart}
              ref={HovertargetButton1}
              className={`${
                HoveredButton1
                  ? (onHoverButton1.current = 1)
                  : (onHoverButton1.current = 0)
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
                  ? (onHoverButton.current = 1)
                  : (onHoverButton.current = 0)
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
            <div className="col-12">
              <h3 className={`${styles.name_Product}`}>{name}</h3>
            </div>
            {offer ? (
              priceWithDiscount(price, discount)
            ) : (
              <div>
                <h2 className="mb-3 fs-5">${price}</h2>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
