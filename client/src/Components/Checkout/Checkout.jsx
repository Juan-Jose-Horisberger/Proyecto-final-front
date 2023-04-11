import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import useForm from "./useForm.js";
import Cookies from "universal-cookie";
import { getUserDetail, sendInformation } from "../../Redux/Action/index.js";
import BuyProducts from "./MercadoLibreCheck.jsx";

var cookies = new Cookies();
const initialForm = {
  nameCompra: cookies.get("nameCompra"),
  surnameCompra: cookies.get("surnameCompra"),
  companyName: cookies.get("companyName"),
  ageCompra: cookies.get("ageCompra"),
  country: "Argentina",
  streetAddress: cookies.get("streetAddress"),
  apartment: cookies.get("apartment"),
  province: cookies.get("province"),
  codePostal: cookies.get("codePostal"),
  phoneNumber: cookies.get("phoneNumber"),
  emailCompra: cookies.get("emailCompra"),
  extraNotes: cookies.get("extraNotes"),
  price: cookies.get("price"),
  cupon: "",
};

const validateForm = (form, nameInput) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (nameInput.includes("nameCompra")) {
    if (!form.nameCompra) {
      errors.name = "Debes colocar tu nombre";
    } else if (!regexName.test(form.nameCompra)) {
      errors.name = "Tu nombre solo debe contener letras y espacios.";
    }
  }

  if (nameInput.includes("surnameCompra")) {
    if (!form.surnameCompra) {
      errors.surname = "Debes colocar tu apellido";
    } else if (!regexName.test(form.surnameCompra)) {
      errors.surname = "Tu apellido solo debe contener letras y espacios.";
    }
  }

  if (nameInput.includes("ageCompra")) {
    if (!form.ageCompra) {
      errors.age = "Debes colocar tu edad";
    }
  }

  if (nameInput.includes("streetAddress")) {
    if (!form.streetAddress) {
      errors.streetAddress = "Debes colocar tu direccion";
    } else if (form.streetAddress.length < 5) {
      errors.streetAddress =
        "Tu direccion tiene que tener al menos 5 caracteres";
    }
  }

  if (nameInput.includes("codePostal")) {
    if (!form.codePostal) {
      errors.codePostal = "Debes colocar tu codigo postal";
    } else if (form.codePostal.length < 3) {
      errors.codePostal =
        "Tu codigo postal tiene que tener al menos 3 caracteres";
    }
  }

  if (nameInput.includes("phoneNumber")) {
    if (!form.phoneNumber) {
      errors.phoneNumber = "Debes colocar un telefono celular";
    } else if (form.phoneNumber.length < 10) {
      errors.phoneNumber =
        "El telefeno celular tiene que tener al menos 10 caracteres";
    } else if (!regexPhone.test(form.phoneNumber)) {
      errors.phoneNumber = "Tu numero celular solo debe contener numeros";
    }
  }

  if (nameInput.includes("emailCompra")) {
    if (!form.emailCompra) {
      errors.email = "Debes colocar un email valido";
    } else if (!regexEmail.test(form.emailCompra)) {
      errors.email = "El email no es valido";
    }
  }

  return errors;
};

export default function Checkout({ socket }) {
  const provincias = [
    "Ciudad Autonoma De Buenos Aires",
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Cordoba",
    "Corrientes",
    "Entre Rios",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Rio Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán",
  ];
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  var cuki = cookies.getAll();
  var productsToBuy = Object.entries(cuki);
  var subTotal = 0;
  const dispatch = useDispatch();
  const infoNotifications = useSelector((state) => state.newNotification);
  const {
    form,
    errors,
    handleOnChange,
    handleSubmit,
    handleRemoveCookies,
    handleCupon,
    cupon,
    oneProd,
    pagar,
    setPagar,
    envio,
  } = useForm(initialForm, validateForm, socket);

  // useEffect(() => {
  //   //Esto iria en searchbar
  //   // console.log(infoNotifications.newProducts.length)

  //   socket?.on("getNotification", function (data) {
  //     dispatch(sendInformation(data));
  //   });
  // }, [socket]);

  useEffect(() => {
    isAuthenticated && dispatch(getUserDetail(user.email));
  }, []);

  return (
    <div className={style.containerPrincipal}>
      <div className={style.divCheckout}>
        <h2>Checkout</h2>
        <p>
          <Link to="/">Inicio</Link>
          <Link to="/Cart">/Carrito</Link>/Checkout
        </p>
      </div>

      <div className={style.containerRegisterCupon}>
        <div className={style.divRegisterCupon}>
          <p>
            ¿No tienes una cuenta?
            <button className={style.btnRe} onClick={() => loginWithRedirect()}>
              REGISTRATE
            </button>
          </p>
        </div>

        <div className={style.divRegisterCupon}>
          <div
            className="modal"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className={style.divPopOut}>
                  <div className="modal-body">
                    <input
                      type="text"
                      id="inputCupon"
                      className={style.inputPopOut}
                      onChange={handleOnChange}
                      name="cupon"
                      value={form.cupon}
                    />
                  </div>
                  <div className={`${style.footerPopOut} modal-footer`}>
                    <button
                      onClick={(e) =>
                        handleCupon(document.getElementById("inputCupon"))
                      }
                      className={style.btnPopOut}
                      data-bs-dismiss="modal"
                    >
                      Ingresar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p>
            ¿Tienes un cupón?
            <button
              className={style.btnRe}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              INGRESA TU CODIGO
            </button>
          </p>
        </div>

        <h3>Detalles de facturacion</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={style.containerForm}>
          <p>Nombre y apellido</p>
          <div className={style.divNombreApellido}>
            <div className={style.divNombre}>
              <input
                type="text"
                placeholder="Nombre"
                name="nameCompra"
                onChange={handleOnChange}
                value={form.nameCompra}
              />
              {errors.name && <p className={style.error}>{errors.name}</p>}
            </div>
            <div className={style.divApellido}>
              <input
                type="text"
                placeholder="Apellido"
                name="surnameCompra"
                onChange={handleOnChange}
                value={form.surnameCompra}
              />
              {errors.surname && (
                <p className={style.error}>{errors.surname}</p>
              )}
            </div>
          </div>

          <p>Fecha de nacimiento</p>
          <div className={style.divEdad}>
            <input
              type="date"
              name="ageCompra"
              onChange={handleOnChange}
              value={form.ageCompra}
            />
            {errors.age && <p className={style.error}> {errors.age} </p>}
          </div>

          <p>Nombre de la empresa (opcional)</p>
          <div className={style.divEmpresa}>
            <input
              type="text"
              name="companyName"
              onChange={handleOnChange}
              value={form.companyName}
            />
          </div>

          <p>Pais / Region</p>
          <div className={style.divPais}>
            <b>Argentina</b>
          </div>

          <p>Direccion de la calle</p>
          <div className={style.divCalle}>
            <input
              type="text"
              placeholder="Nombre de la calle y direccion de la casa"
              name="streetAddress"
              onChange={handleOnChange}
              value={form.streetAddress}
            />

            {errors.streetAddress && (
              <p className={style.error}>{errors.streetAddress}</p>
            )}
          </div>
          <div className={style.divCalle}>
            <input
              type="text"
              placeholder="Apartamento, piso, habitacion, etc (opcional)"
              name="apartment"
              onChange={handleOnChange}
              value={form.apartment}
            />
          </div>

          <p>Region / Provincia</p>
          <div className={style.divProvincia}>
            <select
              name="province"
              id="my_select"
              onChange={handleOnChange}
              value={form.province}
            >
              {provincias.length &&
                provincias.map((e) => {
                  return (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  );
                })}
            </select>
          </div>

          <p>Codigo Postal</p>
          <div className={style.divPostal}>
            <input
              type="text"
              placeholder="Codigo Postal..."
              name="codePostal"
              onChange={handleOnChange}
              value={form.codePostal}
            />

            {errors.codePostal && (
              <p className={style.error}>{errors.codePostal}</p>
            )}
          </div>

          <p>Teléfono</p>
          <div className={style.divTelefono}>
            <input
              type="text"
              placeholder="Teléfono..."
              name="phoneNumber"
              onChange={handleOnChange}
              value={form.phoneNumber}
            />

            {errors.phoneNumber && (
              <p className={style.error}>{errors.phoneNumber}</p>
            )}
          </div>

          <p>Direccion de correo electrónico</p>
          <div className={style.divCorreo}>
            <input
              type="email"
              placeholder="Direccion de correo electrónico..."
              name="emailCompra"
              onChange={handleOnChange}
              value={form.emailCompra}
            />

            {errors.email && <p className={style.error}>{errors.email}</p>}
          </div>

          <p>Notas del pedido (opcional)</p>
          <div className={style.divNotas}>
            <input
              type="text"
              placeholder="Notas sobre tu pedido que puedan facilitar la entrega, etc."
              name="extraNotes"
              onChange={handleOnChange}
              value={form.extraNotes}
            />
          </div>
        </div>

        <div className={style.containerRegisterCupon}>
          <h3>Tu Pedido</h3>
        </div>

        <div className={style.containerPedido}>
          {productsToBuy.map((e) => {
            return e[1].id ? (
              <div key={e[1].id} className={style.divProduct}>
                <div>
                  <img src={e[1].image} alt="" className="img-fluid" />
                </div>
                <div>
                  <p>{e[1].name}</p>
                  <p>${e[1].price}</p>
                </div>
              </div>
            ) : (
              true
            );
          })}

          <p className={style.cuentita}>
            {productsToBuy.map((e) =>
              e[1].id
                ? (subTotal = subTotal + e[1].price)
                : (subTotal = subTotal)
            )}
          </p>

          <div className={style.divTotal}>
            <p>SUBTOTAL</p>
            <p>${(subTotal + "").slice(0, 6)}</p>
          </div>

          <div className={style.divTotal}>
            <p>ENVIO</p>
            <p>${envio[0]}</p>
          </div>

          <div className={style.divTotal}>
            <p>DESCUENTO</p>
            <p>${cupon[0]}</p>
          </div>

          <div className={style.divTotal}>
            <p>TOTAL</p>
            <p>${(subTotal - cupon[1] + envio[1] + "").slice(0, 6)}</p>
          </div>

          <div id="page-content" className={style.divBtn}>
            {pagar ? (
              <BuyProducts data={productsToBuy} />
            ) : (
              <button onClick={handleSubmit}>Confirmar Pedido</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
