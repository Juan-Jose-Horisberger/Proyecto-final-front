import React, { useState } from 'react';
import styles from './Contact.module.css';
import { validate } from './validate.js';
import SearchBar from '../SearchBar/SearchBar';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        affair: "",
        message: ""
    })

    const [errorsExist, setErrorsExist] = useState(false); // Este estado local habilita el submit
    const [error, setError] = useState({});
    const [enableErrors, setEnableErrors] = useState(false);
    const [notError, setNotError] = useState(false);


    function handleOnChange(e) {
        const objError = validate({ ...input, [e.target.name]: e.target.value });
        setError(objError)

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        if (e.target.value) {
            setEnableErrors(true)
        }
    }

    function errorExist(e) {
        e.preventDefault();
        // console.log( error.name, error.email)
        if (
            error.name ||
            error.email ||
            error.affair ||
            error.message
        ) {
            setErrorsExist(true);
            setNotError(false);
            console.log("entra aca 1")
        }
        else if (!input.name.length || !input.email.length || !input.affair.length) {
            setErrorsExist(true);
            setNotError(false);
        }
        else {
            setErrorsExist(false);
            setNotError(true);
        }
    }

    function validateErrors(e) {
        e.preventDefault();
        if (
            error.name ||
            error.email ||
            error.affair ||
            error.message
        ) {
            setErrorsExist(true);
            setNotError(true);
        }
        else if (!input.name.length || !input.email.length || input.affair.length || input.message.length) {
            setErrorsExist(true);
            setNotError(true);
        }
        setErrorsExist(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('entra aca??')
        if (
            !error.name ||
            !error.email ||
            !error.affair ||
            !error.message
        ) {
            if (input.name && input.email && input.affair && input.message) {
                emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, e.target, process.env.YOUR_PUBLIC_KEY).then(res => {
                    alert("Se ha enviado correctamente.");
                    console.log(res);
                    setInput({
                        name: "",
                        email: "",
                        affair: "",
                        message: ''
                    })
                })
            }
        }
        //3:27
    }

    return (
        <div className={`container-fluid p-0`}>
            <SearchBar />
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
                    <div className={`col-12 ${styles.container_infoContact}`} >
                        <div className={`${styles.container_infoContact2}`} >
                            <h2>Contactate</h2>
                            <p>¿Tenes alguna consulta, queres dejar tus productos en consignación o realizar un encargo? Contactate con nosotros.</p>
                            <div className={`d-flex mb-3`}>
                                <img src="https://www.svgrepo.com/show/128093/location-pin.svg" width="23px" alt="" />
                                <p className={`m-0 ${styles.localInfop}`}>Olazabal 1515 Oficina 201 Cuerpo A, Belgrano,Cp 1428</p>
                            </div>
                            <div className={`d-flex`}>
                                <img src="https://www.svgrepo.com/show/423308/envelope.svg" alt="" width="20px" className='me-1' />
                                <p className='m-0'>Gaedjminfo@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} className={`container-fluid d-flex justify-content-center col-12 p-0`} >
                        <div className={`row col-12`}>
                            <div className='mb-3'>
                                <input
                                    type="text"
                                    // className={`form-control ms-0 ${error.name ? 'is-invalid' : 'is-valid'}`}
                                    className={`form-control ms-0 ${enableErrors && (error.name ? 'is-invalid' : 'is-valid')}`}
                                    placeholder='Nombre *'
                                    name='name'
                                    value={input.name}
                                    autoComplete='off'
                                    onChange={(e) => handleOnChange(e)}
                                />
                                {
                                    error.name && <p className="invalid-feedback mb-0">{error.name}</p>
                                }
                            </div>
                            <div className='mb-3'>

                                <input
                                    type="text"
                                    className={`form-control ms-0 ${enableErrors && (error.email ? 'is-invalid' : 'is-valid')}`}
                                    placeholder='Email *'
                                    name='email'
                                    value={input.email}
                                    autoComplete='off'
                                    onChange={(e) => handleOnChange(e)}
                                />
                                {
                                    error.email && <p className="invalid-feedback mb-0">{error.email}</p>
                                }
                            </div>
                            <div className='mb-3'>
                                <input
                                    type="text"
                                    className={`form-control ms-0 ${enableErrors && (error.affair ? 'is-invalid' : 'is-valid')}`}
                                    placeholder='Asunto *'
                                    name='affair'
                                    value={input.affair}
                                    autoComplete='off'
                                    onChange={(e) => handleOnChange(e)}
                                />
                                {
                                    error.affair && <p className="invalid-feedback mb-0">{error.affair}</p>
                                }
                            </div>

                            <div className={`${styles.container_TextArea}`} style={{ marginTop: "10px" }}>
                                <textarea
                                    name="message"
                                    className={`form-control ${enableErrors && (error.message ? 'is-invalid' : 'is-valid')}`}
                                    autoComplete='off'
                                    placeholder='Mensaje *'
                                    value={input.message}
                                    onChange={(e) => handleOnChange(e)}
                                ></textarea>
                                <p className="invalid-feedback mb-0">{error.message}</p>
                            </div>
                            <div className={`${styles.container_button}`}>
                                {
                                    (errorsExist && !input.name.length || !input.email || !input.affair || !input.message)
                                        ? (<button name="button" onClick={(e) => errorExist(e)}>ENVIAR MENSAJE</button>)
                                        : (<button type="submit" name="button">ENVIAR MENSAJE</button>)
                                }
                            </div>
                            {/* {console.log(notError)} {(errorsExist && notError === false) ? styles.open : styles.container_Alert}*/}
                            <div
                                className={`
                                alert alert-danger alert-dismissible fade show d-flex 
                                ${styles.container_Alert} 
                                ${(errorsExist && notError === false) ? styles.open : styles.container_Alert}`}
                                role="alert">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                                    viewBox="0 0 16 16"
                                    role="img"
                                    aria-label="Warning:">
                                    <path
                                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                    />
                                </svg>
                                <div className={`${styles.alertMsj}`}>Por favor complete los campos correspondientes</div>
                                <button type="button" className="btn-close" onClick={(e) => validateErrors(e)}></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}