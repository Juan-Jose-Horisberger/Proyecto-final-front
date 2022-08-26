import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Checkout.module.css"
import { useSelector } from "react-redux";
import useForm from "./useForm.js"

const initialForm = {
  name: "",
  surname: "",
  companyName: "",
  country: "",
  streetAddress: "",
  apartment: "",
  province: "",
  codePostal: "",
  phoneNumber: "",
  email: "",
  extraNotes: "",
  price: "",
};

const validateForm = (form, nameInput) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  if (nameInput.includes("name")) {
    if (!form.name.trim()) {
      errors.name = "Debes colocar tu nombre";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "Tu nombre solo debe contener letras y espacios.";
    };
  };

  if (nameInput.includes("surname")) {
    if (!form.surname.trim()) {
      errors.surname = "Debes colocar tu apellido";
    } else if (!regexName.test(form.surname.trim())) {
      errors.surname = "Tu apellido solo debe contener letras y espacios.";
    };
  };

  if (nameInput.includes("streetAddress")) {
    if (!form.streetAddress.trim()) {
      errors.streetAddress = "Debes colocar tu direccion";
    } else if (form.streetAddress.length < 5) {
      errors.streetAddress = "Tu direccion tiene que tener al menos 5 caracteres";
    };
  };

  if (nameInput.includes("codePostal")) {
    if (!form.codePostal.trim()) {
      errors.codePostal = "Debes colocar tu codigo postal";
    } else if (form.codePostal.length < 3) {
      errors.codePostal = "Tu codigo postal tiene que tener al menos 3 caracteres";
    };
  };

  if (nameInput.includes("phoneNumber")) {
    if (!form.phoneNumber.trim()) {
      errors.phoneNumber = "Debes colocar un telefono celular"
    } else if (form.phoneNumber.length < 10) {
      errors.phoneNumber = "El telefeno celular tiene que tener al menos 10 caracteres";
    } else if (!regexPhone.test(form.phoneNumber.trim())) {
      errors.phoneNumber = "Tu numero celular solo debe contener numeros";
    };
  };

  if (nameInput.includes("email")) {
    if (!form.email.trim()) {
      errors.email = "Debes colocar un email valido"
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El email no es valido";
    };
  };

  return errors;
};

export default function Checkout() {
  const { loginWithRedirect } = useAuth0();
  const productsToBuy = useSelector(state => state.productsToBuy);
  var subTotal = 0;
  const provincias = ["Ciudad Autonoma De Buenos Aires", "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"]
  const {
    form,
    errors,
    handleOnChange,
    handleSubmit,
  } = useForm(initialForm, validateForm);

  return (
    <div className={style.containerPrincipal}>
      <SearchBar />

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
            onChange={handleOnChange} />

          <input type="text"
            placeholder="Apellido"
            name="surname"
            onChange={handleOnChange} />

          {errors.name && <p className={style.error}>{errors.name}</p>}
          {errors.surname && <p className={style.error}>{errors.surname}</p>}
        </div>

        <p>Nombre de la empresa (opcional)</p>
        <div className={style.divEmpresa}>
          <input type="text"
            name="companyName"
            onChange={handleOnChange} />
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
            onChange={handleOnChange} />

          {errors.streetAddress && <p className={style.error}>{errors.streetAddress}</p>}
        </div>
        <div className={style.divCalle}>
          <input type="text"
            placeholder="Apartamento, piso, habitacion, etc (opcional)"
            name="apartment"
            onChange={handleOnChange} />
        </div>

        <p>Region / Provincia</p>
        <div className={style.divProvincia}>
          <select name="province" id="my_select" onChange={handleOnChange}>
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
            onChange={handleOnChange} />

          {errors.codePostal && <p className={style.error}>{errors.codePostal}</p>}
        </div>

        <p>Teléfono</p>
        <div className={style.divTelefono}>
          <input type="text"
            placeholder="Teléfono..."
            name="phoneNumber"
            onChange={handleOnChange} />

          {errors.phoneNumber && <p className={style.error}>{errors.phoneNumber}</p>}
        </div>

        <p>Direccion de correo electrónico</p>
        <div className={style.divCorreo}>
          <input type="email"
            placeholder="Direccion de correo electrónico..."
            name="email"
            onChange={handleOnChange} />

          {errors.email && <p className={style.error}>{errors.email}</p>}
        </div>

        <p>Notas del pedido (opcional)</p>
        <div className={style.divNotas}>
          <input type="text"
            placeholder="Notas sobre tu pedido que puedan facilitar la entrega, etc."
            name="extraNotes"
            onChange={handleOnChange} />
        </div>
      </div>

      <div className={style.containerRegisterCupon}>
        <h3>Tu Pedido</h3>
      </div>

      <div className={style.containerPedido}>

        {productsToBuy.map(e => {
          return (
            <div key={e.id} className={style.divProduct}>
              <img src={e.image} alt="" />
              <p>{e.name}</p>
              <p>${e.price}</p>
            </div>
          )
        })}

        <p className={style.cuentita}>{productsToBuy.map(e => subTotal = subTotal + e.price)}</p>
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
          <button type="submit">REALIZAR EL PEDIDO</button>
        </div>

      </div>
      </form>

    </div>
  )
}
