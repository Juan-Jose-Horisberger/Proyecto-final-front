import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Checkout.module.css"
import { useDispatch, useSelector } from "react-redux";
import useForm from "./useForm.js"
import Cookies from "universal-cookie"
import { sendInformation } from '../../Redux/Action/index.js';

var cookies = new Cookies();
const initialForm = {
  name: cookies.get("name"),
  surname: cookies.get("surname"),
  companyName: cookies.get("companyName"),
  country: cookies.get("country"),
  streetAddress: cookies.get("streetAddress"),
  apartment: cookies.get("apartment"),
  province: cookies.get("province"),
  codePostal: cookies.get("codePostal"),
  phoneNumber: cookies.get("phoneNumber"),
  email: cookies.get("email"),
  extraNotes: cookies.get("extraNotes"),
  price: cookies.get("price"),
};

const validateForm = (form, nameInput) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  if (nameInput.includes("name")) {
    if (!form.name) {
      errors.name = "Debes colocar tu nombre";
    } else if (!regexName.test(form.name)) {
      errors.name = "Tu nombre solo debe contener letras y espacios.";
    };
  };

  if (nameInput.includes("surname")) {
    if (!form.surname) {
      errors.surname = "Debes colocar tu apellido";
    } else if (!regexName.test(form.surname)) {
      errors.surname = "Tu apellido solo debe contener letras y espacios.";
    };
  };

  if (nameInput.includes("streetAddress")) {
    if (!form.streetAddress) {
      errors.streetAddress = "Debes colocar tu direccion";
    } else if (form.streetAddress.length < 5) {
      errors.streetAddress = "Tu direccion tiene que tener al menos 5 caracteres";
    };
  };

  if (nameInput.includes("codePostal")) {
    if (!form.codePostal) {
      errors.codePostal = "Debes colocar tu codigo postal";
    } else if (form.codePostal.length < 3) {
      errors.codePostal = "Tu codigo postal tiene que tener al menos 3 caracteres";
    };
  };

  if (nameInput.includes("phoneNumber")) {
    if (!form.phoneNumber) {
      errors.phoneNumber = "Debes colocar un telefono celular"
    } else if (form.phoneNumber.length < 10) {
      errors.phoneNumber = "El telefeno celular tiene que tener al menos 10 caracteres";
    } else if (!regexPhone.test(form.phoneNumber)) {
      errors.phoneNumber = "Tu numero celular solo debe contener numeros";
    };
  };

  if (nameInput.includes("email")) {
    if (!form.email) {
      errors.email = "Debes colocar un email valido"
    } else if (!regexEmail.test(form.email)) {
      errors.email = "El email no es valido";
    };
  };

  return errors;
};

export default function Checkout({ socket }) {
  const provincias = ["Ciudad Autonoma De Buenos Aires", "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"]
  const {
    form,
    errors,
    handleOnChange,
    handleSubmit,
    handleRemoveCookies,
  } = useForm(initialForm, validateForm, socket);
  const { loginWithRedirect } = useAuth0();
  var cuki = cookies.getAll();
  var productIndividual = useSelector(state => state.productsToBuy);
  var productsToBuy = Object.entries(cuki)
  var subTotal = 0;
  const dispatch = useDispatch()
  const infoNotifications = useSelector(state => state.newNotification)

  useEffect(() => { //Esto iria en searchbar
    // console.log(infoNotifications.newProducts.length)

    socket?.on("getNotification", function (data) {
      dispatch(sendInformation(data))
    });

  }, [socket]);


  return (
    <div className={style.containerPrincipal}>
      {/* <SearchBar /> */}

      <div className={style.divCheckout}>
        <h2>Checkout</h2>
        <p><Link to="/">Inicio</Link>/Checkout</p>
      </div>

      <div className={style.containerRegisterCupon}>
        <div className={style.divRegisterCupon}>
          <p>¿No tienes una cuenta?<button onClick={() => loginWithRedirect()}>REGISTRATE</button></p>
        </div>

        <div className={style.divRegisterCupon}>
          <p>¿Tienes un cupón?<button>INGRESA TU CODIGO</button></p>
        </div>

        <h3>Detalles de facturacion</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={style.containerForm}>
          <p>Nombre y apellido</p>
          <div className={style.divNombreApellido}>
            <input type="text"
              placeholder="Nombre"
              name="name"
              onChange={handleOnChange}
              value={cookies.get("name")} />

            <input type="text"
              placeholder="Apellido"
              name="surname"
              onChange={handleOnChange}
              value={cookies.get("surname")} />

            {errors.name && <p className={style.error}>{errors.name}</p>}
            {errors.surname && <p className={style.error}>{errors.surname}</p>}
          </div>

          <p>Nombre de la empresa (opcional)</p>
          <div className={style.divEmpresa}>
            <input type="text"
              name="companyName"
              onChange={handleOnChange}
              value={cookies.get("companyName")} />
          </div>

          <p>Pais / Region</p>
          <div className={style.divPais}>
            <b>Argentina</b>
          </div>

          <p>Direccion de la calle</p>
          <div className={style.divCalle}>
            <input type="text"
              placeholder="Nombre de la calle y direccion de la casa"
              name="streetAddress"
              onChange={handleOnChange}
              value={cookies.get("streetAddress")} />

            {errors.streetAddress && <p className={style.error}>{errors.streetAddress}</p>}
          </div>
          <div className={style.divCalle}>
            <input type="text"
              placeholder="Apartamento, piso, habitacion, etc (opcional)"
              name="apartment"
              onChange={handleOnChange}
              value={cookies.get("apartment")} />
          </div>

          <p>Region / Provincia</p>
          <div className={style.divProvincia}>
            <select name="province" id="my_select" onChange={handleOnChange} value={cookies.get("province")}>
              <option style={{ display: "none" }}>Selecciona tu Region / Provincia</option>
              {provincias.length && provincias.map(e => {
                return (
                  <option key={e} value={e}>{e}</option>
                )
              })}
            </select>
          </div>

          <p>Codigo Postal</p>
          <div className={style.divPostal}>
            <input type="text"
              placeholder="Codigo Postal..."
              name="codePostal"
              onChange={handleOnChange}
              value={cookies.get("codePostal")} />

            {errors.codePostal && <p className={style.error}>{errors.codePostal}</p>}
          </div>

          <p>Teléfono</p>
          <div className={style.divTelefono}>
            <input type="text"
              placeholder="Teléfono..."
              name="phoneNumber"
              onChange={handleOnChange}
              value={cookies.get("phoneNumber")} />

            {errors.phoneNumber && <p className={style.error}>{errors.phoneNumber}</p>}
          </div>

          <p>Direccion de correo electrónico</p>
          <div className={style.divCorreo}>
            <input type="email"
              placeholder="Direccion de correo electrónico..."
              name="email"
              onChange={handleOnChange}
              value={cookies.get("email")} />

            {errors.email && <p className={style.error}>{errors.email}</p>}
          </div>

          <p>Notas del pedido (opcional)</p>
          <div className={style.divNotas}>
            <input type="text"
              placeholder="Notas sobre tu pedido que puedan facilitar la entrega, etc."
              name="extraNotes"
              onChange={handleOnChange}
              value={cookies.get("extraNotes")} />
          </div>
        </div>

        <div className={style.containerRegisterCupon}>
          <h3>Tu Pedido</h3>
        </div>

        <div className={style.containerPedido}>
              {console.log(productIndividual)}
          {productIndividual ?
            productIndividual.map(e => {
              return (e.id ?
                <div key={e.id} className={style.divProduct}>
                  <img src={e.image} alt="" />
                  <p>{e.name}</p>
                  <p>${e.price}</p>
                </div> : true
              )
            })
            :
            productsToBuy.map(e => {
              return (e[1].id ?
                <div key={e[1].id} className={style.divProduct}>
                  <img src={e[1].image} alt="" />
                  <p>{e[1].name}</p>
                  <p>${e[1].price}</p>
                </div> : true
              )
            })}

          <p className={style.cuentita}>{productsToBuy.map(e => subTotal = subTotal + e[1].price)}</p>
          <div className={style.divTotal}>
            <p>SUBTOTAL</p>
            <p>${subTotal}</p>
          </div>

          <div className={style.divTotal}>
            <p>ENVIO</p>
            <p>CABA $500</p>
          </div>

          <div className={style.divTotal}>
            <p>TOTAL</p>
            <p>${subTotal + 0.5}</p>
          </div>

          <div className={style.divBtn} >
            <button onClick={() => handleRemoveCookies(productsToBuy)} type="submit">REALIZAR EL PEDIDO</button>
          </div>

        </div>
      </form>

    </div>
  )
}
