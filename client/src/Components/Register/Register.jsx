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
    direccion: "",
    localidad: "",
    date: "",
    celular: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(input);
    alert("Datos guardados");
    setInput({
      name: "",
      lastName: "",
      date: "",
      celular: "",
    });
    history("/");
  }

  return (
    <div className={styles.container}>
      <div className="d-flex justify-content-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <Link to="/Profile">
            <button>Atras</button>
          </Link>

          <button>Modificar datos personales</button>

          <div>
            <label>Apodo</label> <br />
            <input
              type="text"
              value={input.apodo}
              name="apodo"
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
              value={input.lastName}
              name="lastName"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label>Fecha de nacimiento</label> <br />
            <input
              type="date"
              value={input.date}
              name="date"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label>Direccion</label> <br />
            <input
              type="text"
              value={input.direction}
              name="direction"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Provincia</label> <br />
            <input
              type="text"
              value={input.provincia}
              name="provincia"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Codigo Postal</label> <br />
            <input
              type="number"
              value={input.cp}
              name="cp"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Celular</label> <br />
            <input
              type="number"
              value={input.celular}
              name="celular"
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
