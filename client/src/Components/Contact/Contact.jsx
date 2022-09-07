import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";
import { validate } from "./validate.js";
import SearchBar from "../SearchBar/SearchBar";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
// require("dotenv").config();

export default function Contact() {
  const form = useRef();
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    user_affair: "",
    user_message: "",
  });

  const [errorsExist, setErrorsExist] = useState(false); // Este estado local habilita el submit
  const [error, setError] = useState({
    user_name: "",
    user_email: "",
    user_affair: "",
    user_message: "",
  }); //Estado maneja errores
  const [enableErrors, setEnableErrors] = useState({
    name: false,
    email: false,
    affair: false,
    message: false,
  });

  const [notError, setNotError] = useState(false);
  const [submittedForm, setSubmittedForm] = useState(false);
  const [submittedFormTrue, setSubmittedFormTrue] = useState(false);
  const [cleanForm, setCleanForm] = useState(false); //Este estado me permite que los inputs vuelvan con su borde inicial

  function handleOnChange(e) {
    const objError = validate(
      { ...input, [e.target.name]: e.target.value },
      e.target.name,
      error,
      setError
    );

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "user_name") {
      setEnableErrors({
        ...enableErrors,
        name: true,
      });
      setCleanForm(false);
      return;
    }
    if (e.target.name === "user_email") {
      setEnableErrors({
        ...enableErrors,
        email: true,
      });
      setCleanForm(false);
      return;
    }
    if (e.target.name === "user_affair") {
      setEnableErrors({
        ...enableErrors,
        affair: true,
      });
      setCleanForm(false);
      return;
    }
    if (e.target.name === "user_message") {
      setEnableErrors({
        ...enableErrors,
        message: true,
      });
      setCleanForm(false);
      return;
    }
  }

  function errorExist(e) {
    e.preventDefault();
    if (
      error.user_name ||
      error.user_email ||
      error.user_affair ||
      error.user_message
    ) {
      setErrorsExist(true);
      setNotError(false);
      console.log("entro al if");
    }
    if (
      !input.user_name.length ||
      !input.user_email.length ||
      !input.user_affair.length ||
      !input.user_message.length
    ) {
      setErrorsExist(true);
      setNotError(false);
      console.log("entro al else if");
    } else {
      if (
        error.user_name ||
        error.user_email ||
        error.user_affair ||
        error.user_message
      ) {
        setErrorsExist(true);
        setNotError(false);
      } else {
        setErrorsExist(false);
        setNotError(true);
        console.log("entro al else");
      }
    }
  }

  function validateErrors(e) {
    e.preventDefault();
    if (
      error.user_name ||
      error.user_email ||
      error.user_affair ||
      error.user_message
    ) {
      setErrorsExist(true);
      setNotError(true);
      return;
    } else if (
      !input.user_name.length ||
      !input.user_email.length ||
      input.user_affair.length ||
      input.user_message.length
    ) {
      setErrorsExist(true);
      setNotError(true);
      return;
    }
    setErrorsExist(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !error.user_name.length &&
      !error.user_email.length &&
      !error.user_affair.length &&
      !error.user_message.length
    ) {
      if (
        input.user_name &&
        input.user_email &&
        input.user_affair &&
        input.user_message
      ) {
        emailjs
          .sendForm(
            process.env.REACT_APP_YOUR_SERVICE_ID,
            process.env.REACT_APP_YOUR_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_YOUR_PUBLIC_KEY
          )
          .then((res) => {
            setInput({
              user_name: "",
              user_email: "",
              user_affair: "",
              user_message: "",
            });
          })
          .then((res) => res === undefined && setSubmittedForm(true))
          .then((res) => res === undefined && setCleanForm(true))
          .then(
            (res) =>
              res === undefined &&
              setEnableErrors({
                name: false,
                email: false,
                affair: false,
                message: false,
              })
          );
      } else {
        setErrorsExist(true);
        setNotError(true);
      }
    } else {
      setErrorsExist(true);
      setNotError(true);
    }
    //3:27
  }

  function closeSuccessAlert(e) {
    e.preventDefault();
    setSubmittedFormTrue(true);
  }

  return (
    <div className={`container-fluid p-0 ${styles.container}`}>
      {/* <SearchBar /> */}
      <div className={`${styles.container_Inicio}`}>
        <div>
          <Link to="/">
            <span>Inicio</span>
          </Link>
          <span> / </span>
          <span>Contacto</span>
        </div>
      </div>
      <div className={`d-flex mb-2 col-12 ${styles.container_Info}`}>
        <div className={`col-5 ${styles.container_image}`}>
          <img
            // className='img-fluid'
            src="https://images.unsplash.com/photo-1615461469775-9d244476325f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9wYSUyMG5pa2V8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
          {/* https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/0769f21f-1bb7-4ea0-85b1-505206a6a755/nike-sb-nike-skateboard-desde-dentro.jpg */}
        </div>
        <div className={`${styles.container_infoAndForm}`}>
          <div className={`col-12 ${styles.container_infoContact}`}>
            <div className={`${styles.container_infoContact2}`}>
              <h2>Contactate</h2>
              <p>
                ¿Tenes alguna consulta, queres dejar tus productos en
                consignación o realizar un encargo? Contactate con nosotros.
              </p>
              <div className={`d-flex mb-3`}>
                <img
                  src="https://www.svgrepo.com/show/423301/location.svg"
                  width="23px"
                  alt=""
                />
                <p className={`m-0 ${styles.localInfop}`}>
                  Olazabal 1515 Oficina 201 Cuerpo A, Belgrano,Cp 1428
                </p>
              </div>
              <div className={`d-flex`}>
                <img
                  src="https://www.svgrepo.com/show/423308/envelope.svg"
                  alt=""
                  width="20px"
                  className="me-1"
                />
                <p className="m-0">Gaedjminfo@gmail.com</p>
              </div>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={(e) => handleSubmit(e)}
            className={`container-fluid d-flex justify-content-center col-12 p-0`}
          >
            <div className={`row col-12`}>
              <div className="mb-3">
                <input
                  type="text"
                  // className={`form-control ms-0 ${error.name ? 'is-invalid' : 'is-valid'}`}
                  className={`
                                    form-control 
                                    ms-0 
                                    ${styles.inputs}
                                    ${
                                      enableErrors.name && cleanForm === false
                                        ? error.user_name
                                          ? "is-invalid"
                                          : "is-valid"
                                        : "form-control"
                                    }`}
                  placeholder="Nombre *"
                  name="user_name"
                  value={input.user_name}
                  style={{ color: "azure" }}
                  autoComplete="off"
                  onChange={(e) => handleOnChange(e)}
                />
                {error.user_name && (
                  <p className="invalid-feedback mb-0">{error.user_name}</p>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className={`
                                    form-control 
                                    ms-0 
                                    ${styles.inputs}
                                    ${
                                      enableErrors.email && cleanForm === false
                                        ? error.user_email
                                          ? "is-invalid"
                                          : "is-valid"
                                        : "form-control"
                                    }`}
                  placeholder="Email *"
                  name="user_email"
                  value={input.user_email}
                  style={{ color: "azure" }}
                  autoComplete="off"
                  onChange={(e) => handleOnChange(e)}
                />
                {error.user_email && (
                  <p className="invalid-feedback mb-0">{error.user_email}</p>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className={`
                                    form-control 
                                    ms-0 
                                    ${styles.inputs}
                                    ${
                                      enableErrors.affair && cleanForm === false
                                        ? error.user_affair
                                          ? "is-invalid"
                                          : "is-valid"
                                        : "form-control"
                                    }`}
                  placeholder="Asunto *"
                  name="user_affair"
                  value={input.user_affair}
                  style={{ color: "azure" }}
                  autoComplete="off"
                  onChange={(e) => handleOnChange(e)}
                />
                {error.user_affair && (
                  <p className="invalid-feedback mb-0">{error.user_affair}</p>
                )}
              </div>

              <div
                className={`${styles.container_TextArea}`}
                style={{ marginTop: "10px" }}
              >
                <textarea
                  name="user_message"
                  className={`
                                    form-control 
                                    ${styles.inputs}
                                    ${
                                      enableErrors.message &&
                                      cleanForm === false
                                        ? error.user_message
                                          ? "is-invalid"
                                          : "is-valid"
                                        : "form-control"
                                    }`}
                  autoComplete="off"
                  placeholder="Mensaje *"
                  value={input.user_message}
                  onChange={(e) => handleOnChange(e)}
                  style={{ resize: "none", color: "azure" }}
                ></textarea>
                <p className="invalid-feedback mb-0">{error.user_message}</p>
              </div>
              <div className={`${styles.container_button}`}>
                {/* {console.log(errorsExist)} */}
                {console.log(
                  input.user_name,
                  input.user_email,
                  input.user_affair,
                  input.user_message
                )}
                {(errorsExist &&
                  (error.user_name ||
                    error.user_email ||
                    error.user_affair ||
                    error.user_message)) ||
                !input.user_name.length ||
                !input.user_email.length ||
                !input.user_affair.length ||
                !input.user_message.length ? (
                  <button
                    name="button"
                    onClick={(e) => errorExist(e)}
                    className={`${styles.button_send}`}
                  >
                    ENVIAR MENSAJE
                  </button>
                ) : (
                  <button
                    type="submit"
                    name="button"
                    className={`${styles.button_send}`}
                  >
                    ENVIAR MENSAJE
                  </button>
                )}
              </div>
              {/* {console.log(notError)} {(errorsExist && notError === false) ? styles.open : styles.container_Alert}*/}
              <div
                className={`
                                alert alert-danger alert-dismissible fade show d-flex 
                                ${styles.container_Alert} 
                                ${
                                  errorsExist && notError === false
                                    ? styles.open
                                    : styles.container_Alert
                                }`}
                role="alert"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                  viewBox="0 0 16 16"
                  role="img"
                  aria-label="Warning:"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <div className={`${styles.alertMsj}`}>
                  Por favor complete los campos correspondientes
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={(e) => validateErrors(e)}
                ></button>
              </div>

              <div
                className={`
                                alert alert-success alert-dismissible fade show d-flex 
                                ${styles.container_AlertSuccess}
                                ${
                                  submittedForm === true &&
                                  submittedFormTrue === false
                                    ? styles.open
                                    : styles.container_AlertSuccess
                                }`}
                role="alert"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                  viewBox="0 0 16 16"
                  role="img"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <div>Gracias por tu mensaje, se envio correctamente.</div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={(e) => closeSuccessAlert(e)}
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
