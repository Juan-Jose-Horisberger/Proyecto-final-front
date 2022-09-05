import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Register.module.css";

function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Se requiere un nombre de usuario";
  } else if (!input.username.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)) {
    errors.username = "Solo se permiten letras y sin espacios al final!";
  } else if (!input.name) {
    errors.name = "Se requiere un nombre";
  } else if (!input.name.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)) {
    errors.name = "Solo se permiten letras y sin espacios al final!";
  } else if (!input.surname) {
    errors.surname = "Se requiere un apellido";
  } else if (!input.surname.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)) {
    errors.surname = "Solo se permiten letras y sin espacios al final!";
  } else if (!input.age) {
    errors.age = "Ingrese su fecha de nacimiento";
  } else if (!input.location) {
    errors.location = "Ingrese su localidad";
  } else if (!input.postal) {
    errors.postal = "Debes colocar tu codigo postal";
  } else if (input.postal.length < 3) {
    errors.postal = "Tu codigo postal tiene que tener al menos 3 caracteres";
  } else if (!input.telephone) {
    errors.telephone = "Debes colocar un telefono celular";
  } else if (input.telephone.length < 10) {
    errors.telephone =
      "El telefeno celular tiene que tener al menos 10 caracteres";
  } else if (
    !input.telephone.match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    )
  ) {
    errors.telephone = "Tu numero celular solo debe contener numeros";
  }

  return errors;
}

export default function Register() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [error, setError] = useState({});

  const [input, setInput] = useState({
    username: "",
    name: "",
    surname: "",
    img: "",
    age: "",
    province: "",
    location: "",
    postal: "",
    telephone: "",
    extra: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }
  function handleSelect(e) {
    setInput({
      ...input,
      province: [...input.province, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(input);
    alert("Datos guardados");
    setInput({
      username: "",
      name: "",
      surname: "",
      img: "",
      age: "",
      province: "",
      location: "",
      postal: "",
      telephone: "",
      extra: "",
    });
    history("/");
  }
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
  return (
    <div className={styles.container}>
      <div className="d-flex justify-content-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <Link to="/Profile">
            <button>Atras</button>
          </Link>

          <button>Modificar datos personales</button>

          <div>
            <label>Nombre de Usuario</label> <br />
            <input
              type="text"
              value={input.username}
              name="username"
              onChange={(e) => handleChange(e)}
            />
            {error.username && (
              <p className={styles.error}> {error.username} </p>
            )}
          </div>

          <div>
            <label>Nombre</label> <br />
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            {error.name && <p className={styles.error}> {error.name} </p>}
          </div>

          <div>
            <label>Apellido</label> <br />
            <input
              type="text"
              value={input.surname}
              name="surname"
              onChange={(e) => handleChange(e)}
            />
            {error.surname && <p className={styles.error}> {error.surname} </p>}
          </div>

          <div class="form-group">
            <label for="exampleFormControlFile1">Imagen</label>
            <br />
            <input
              type="file"
              value={input.img}
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>

          <div>
            <label>Fecha de nacimiento</label> <br />
            <input
              type="date"
              value={input.age}
              name="age"
              onChange={(e) => handleChange(e)}
            />
            {error.age && <p className={styles.error}> {error.age} </p>}
          </div>

          <div>
            <label>Provincias</label>
            <br />
            <select
              onChange={(e) => handleSelect(e)}
              name="province"
              type="text"
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

            <br />
          </div>
          <div>
            <label>Localidad</label> <br />
            <input
              type="text"
              value={input.location}
              name="location"
              onChange={(e) => handleChange(e)}
            />
            {error.location && (
              <p className={styles.error}> {error.location} </p>
            )}
          </div>
          <div>
            <label>Codigo Postal</label> <br />
            <input
              type="number"
              value={input.postal}
              name="postal"
              onChange={(e) => handleChange(e)}
            />
            {error.postal && <p className={styles.error}> {error.postal} </p>}
          </div>
          <div>
            <label>Celular</label> <br />
            <input
              type="number"
              value={input.telephone}
              name="telephone"
              onChange={(e) => handleChange(e)}
            />
            {error.telephone && (
              <p className={styles.error}> {error.telephone} </p>
            )}
          </div>
          <br />
          <div>
            <label>Informacion extra</label> <br />
            <input
              type="text"
              value={input.extra}
              name="extra"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <br />

          <button>GUARDAR CAMBIOS</button>
        </form>
      </div>
    </div>
  );
}
