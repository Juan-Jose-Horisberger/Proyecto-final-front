import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from './Contact.module.css';
import { validate } from './validate.js';


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

    useEffect(() => {

    }, [])

    return (
        <div className={`d-flex`}>
            <div className={`col-5 ${styles.container_image}`} style={{ border: "1px solid red" }}>
                <img
                    className='img-fluid'
                    src="https://images.unsplash.com/photo-1615461469775-9d244476325f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9wYSUyMG5pa2V8ZW58MHx8MHx8&w=1000&q=80"
                    alt=""
                />
                {/* https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/0769f21f-1bb7-4ea0-85b1-505206a6a755/nike-sb-nike-skateboard-desde-dentro.jpg */}
            </div>
            <div className={`col-7`} style={{ border: "1px solid red" }}>
                <div className={`col-12 ${styles.container_infoContact}`} style={{ border: "1px solid red" }}>
                    <div className={`p-4`}>
                        <h2>Contactate</h2>
                        <p>¿Tenes alguna consulta, queres dejar tus productos en consignación o realizar un encargo? Contactate con nosotros.</p>
                        <p><img src="https://www.svgrepo.com/show/128093/location-pin.svg" width="23px" alt="" /> Olazabal 1515 Oficina 201 Cuerpo A, Belgrano,Cp 1428</p>
                        <p><img src="https://www.svgrepo.com/show/423308/envelope.svg" alt="" width="23px"/> Gaedjminfo@gmail.com</p>
                    </div>
                </div>
                <form className={`container-fluid d-flex justify-content-center col-12 p-0`} style={{ border: "1px solid red" }}>
                    <div className={`row col-12`}>
                        <div>
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
                                error.name && <p className="invalid-feedback">{error.name}</p>
                            }
                        </div>
                        <div>
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
                                error.email && <p className="invalid-feedback">{error.email}</p>
                            }
                        </div>
                        <div>
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
                                error.affair && <p className="invalid-feedback">{error.affair}</p>
                            }
                        </div>


                        <div className='mb-4' style={{ marginTop: "10px" }}>
                            {console.log(error.massage)}
                            <textarea
                                name="message"
                                className={`form-control ${enableErrors && (error.message ? 'is-invalid' : 'is-valid')}`}
                                autoComplete='off'
                                placeholder='Mensaje *'
                                value={input.message}
                                onChange={(e) => handleOnChange(e)}
                            ></textarea>
                            <p className="invalid-feedback">{error.message}</p>
                        </div>


                        <div className={`${styles.container_button}`}>
                            <div>ENVIAR MENSAJE</div>
                        </div>

                    </div>
                    <hr />
                    <hr />
                    <hr />
                </form>
            </div>
        </div>
    )
}