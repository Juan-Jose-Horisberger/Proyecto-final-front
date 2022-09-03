import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Register.module.css";

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
          </div>

          <div>
            <label>Nombre</label> <br />
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label>Apellido</label> <br />
            <input
              type="text"
              value={input.surname}
              name="surname"
              onChange={(e) => handleChange(e)}
            />
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
          </div>
          <div>
            <label>Codigo Postal</label> <br />
            <input
              type="number"
              value={input.postal}
              name="postal"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Celular</label> <br />
            <input
              type="number"
              value={input.telephone}
              name="telephone"
              onChange={(e) => handleChange(e)}
            />
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
