import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Register.module.css";

function validate(input) {
  let errors = {};
  if (!input.direccion) {
    errors.direccion = "Se requiere una direccion";
  } else if (!input.localidad) {
    errors.localidad = "Se requiere una localidad";
  } else if (!input.date) {
    errors.date = "Se requiere una fecha";
  } else if (!input.celular) {
    errors.celular = "Ingrese un numero";
  }

  return errors;
}

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
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(input);
    alert("Datos guardados");
    setInput({
      direccion: "",
      localidad: "",
      date: "",
      celular: "",
    });
    history("/");
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>Datos Personales</h3>
          <div>
            <label>Direccion</label> <br />
            <input
              type="text"
              value={input.direccion}
              name="direccion"
              onChange={(e) => handleChange(e)}
            />
            {error.direccion && <p> {error.direccion} </p>}
          </div>

          <div>
            <label>Localidad</label> <br />
            <input
              type="text"
              value={input.localidad}
              name="localidad"
              onChange={(e) => handleChange(e)}
            />
            {error.localidad && <p> {error.localidad} </p>}
          </div>

          <div>
            <label>Fecha de nacimiento</label> <br />
            <input
              type="date"
              value={input.date}
              name="date"
              onChange={(e) => handleChange(e)}
            />
            {error.date && <p> {error.date} </p>}
          </div>

          <div>
            <label>Celular</label> <br />
            <input
              type="text"
              value={input.celular}
              name="celular"
              onChange={(e) => handleChange(e)}
            />
            {error.celular && <p> {error.celular} </p>}
          </div>

          {!input.direccion ||
          !input.localidad ||
          !input.date ||
          !input.celular ? (
            <button disabled type="submit">
              Guardar
            </button>
          ) : (
            <button type="submit">Guardar</button>
          )}
        </form>
      </div>
    </div>
  );
}
