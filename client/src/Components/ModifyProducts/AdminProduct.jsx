import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Product/Product.module.css";
import { TbTrashX } from "react-icons/tb";
import { HiOutlinePencil } from "react-icons/hi";
import Cookies from "universal-cookie";
import useHover from "@react-hook/hover";
import { getProductDetail, deleteProduct } from "../../Redux/Action";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function AdminProduct({
  id,
  name,
  price,
  image,
  offer,
  discount,
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

  const getDetail = () => {
    dispatch(getProductDetail(id));
  };

  const handleDelete = () => {
    Swal.fire({
      icon: "warning",
      background: "#000",
      title: "¿Estás seguro de eliminar este producto?",
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#A91111",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#282626",
    }).then((res) => {
      if (res.isConfirmed === true) {
        dispatch(deleteProduct(id));
        console.log(id);
      } else console.log(res);
    });
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.container_productInfo}`}>
        {/* {console.log(Hovertarget + " Hovered")} */}
        <Link
          to={`/AdminDetail/${id}`}
          ref={Hovertarget}
          className={
            Hovered || onHoverButton.current
              ? (onHover.current = true)
              : (onHover.current = false) /*Cambiamos a false para que no tire warning*/
          }
        >
          <img src={image} alt="Imagen no encontrada" className={`img-fluid`} />
          {offer && <p className={`${styles.discountP}`}>-{discount}</p>}
        </Link>
        {/*Despues este div aparecera solo cuando se le pase el mouse por arriba de la img*/}

        <button
          onClick={handleDelete}
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
          <TbTrashX size="40px" color="#8B8B8B" />
        </button>

        <Link to={`/EditProduct/${id}`}>
          <button
            onClick={getDetail}
            ref={HovertargetButton}
            className={`${
              HoveredButton
                ? (onHoverButton.current = true)
                : (onHoverButton.current = false)
            } ${styles.button2} ${
              (onHover.current || onHoverButton.current) && styles.open
            } `}
          >
            <HiOutlinePencil size="35px" color="#8B8B8B" />
          </button>
        </Link>
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
  );
}
