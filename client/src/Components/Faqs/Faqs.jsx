import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Faqs.module.css";
import { FaTruck, FaTiktok, FaFacebookSquare } from "react-icons/fa";
import {
  BsShieldCheck,
  BsCheckCircle,
  BsFillTelephoneFill,
  BsArrowUp,
} from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Faqs() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.container_Inicio}`}>
        <div>
          <Link to="/">
            <span className={`${styles.span1}`}>Inicio</span>
          </Link>
          <span className={`${styles.span2}`}> / </span>
          <span className={`${styles.span5}`}>Preguntas frecuentes</span>
        </div>
      </div>

      <div className={`${styles.container_InfoAccordion}`}>
        <div
          className={`accordion ${styles.container_accordion}`}
          id="accordionExample"
        >
          <div className={`accordion-item ${styles.containerDiv_accordion}`}>
            <h2 className="accordion-header border border-white" id="Question1">
              <button
                className={`accordion-button collapsed text-light`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <h4>¿Hay que solicitar una cita para ir al Shoowroom?</h4>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="Question1"
              data-bs-parent="#accordionExample"
            >
              <div className={` accordion-body ${styles.containerText}`}>
                <p className="m-0">
                  No, no es necesario, abrimos de Lunes a Sabado de 11 a 18hs.
                </p>
              </div>
            </div>
          </div>

          <div className={`accordion-item ${styles.containerDiv_accordion}`}>
            <h2 className="accordion-header" id="Question2">
              <button
                className={`accordion-button collapsed text-light`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h4>¿Cúanto tardan los envios?</h4>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse bg-dark"
              aria-labelledby="Question2"
              data-bs-parent="#accordionExample"
            >
              <div className={` accordion-body ${styles.containerText}`}>
                <p className="m-0">
                  En CABA un máximo de 48hs. El resto del país entre 2-7 días
                  hábiles.
                </p>
              </div>
            </div>
          </div>

          <div className={`accordion-item ${styles.containerDiv_accordion}`}>
            <h2 className="accordion-header" id="Question3">
              <button
                className={`accordion-button collapsed text-light`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h4>¿Cuáles son los métodos de pago?</h4>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="Question3"
              data-bs-parent="#accordionExample"
            >
              <div className={` accordion-body ${styles.containerText}`}>
                <p className="m-0">
                  Todas las tarjetas disponibles por Mercadopago o transferencia
                  bancaria.
                </p>
              </div>
            </div>
          </div>

          <div className={`accordion-item ${styles.containerDiv_accordion}`}>
            <h2 className="accordion-header" id="Question4">
              <button
                className={`accordion-button collapsed text-light`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <h4>¿Hay garantía? ¿Puedo devolver mis items?</h4>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="Question4"
              data-bs-parent="#accordionExample"
            >
              <div className={` accordion-body ${styles.containerText}`}>
                <p className="m-0">
                  No, no hay garantía. Los items se pueden devolver dentro de
                  las primeras 48hs y en las condiciones que se adquirieron.
                </p>
                <Link to="/Returns">Política de devoluciones</Link>
              </div>
            </div>
          </div>

          <div className={`accordion-item ${styles.containerDiv_accordion}`}>
            <h2 className="accordion-header" id="Question5">
              <button
                className={`accordion-button collapsed text-light`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <h4>¿Puedo cancelar o cambiar mi orden?</h4>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="Question5"
              data-bs-parent="#accordionExample"
            >
              <div className={` accordion-body ${styles.containerText}`}>
                <p className="m-0">
                  Comunicarse al +54 9 11 6631-8575 o enviar un email a
                  Gaedjminfo@gmail.com. Si el orden ya se despacho consultar
                  nuestra
                </p>
                <Link to="/Returns">Política de devoluciones</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className={`${styles.footer}`}>
        <div className={`${styles.containerInfoFooter}`}>
          <div>
            <h4>Soporte</h4>
            <Link to="/Faqs">
              <p>
                <RiArrowRightSLine size="20px" color="white" /> Preguntas
                frecuentes
              </p>
            </Link>
            <Link to="/TermsAndConditions">
              <p>
                <RiArrowRightSLine size="20px" color="white" /> Política de
                privacidad
              </p>
            </Link>
            <Link to="/Returns">
              <p>
                <RiArrowRightSLine size="20px" color="white" /> Política de
                devoluciones
              </p>
            </Link>
            {/* <p>
              <RiArrowRightSLine size="20px" color="white" /> Consignación de
              usados
            </p> */}
            <p>
              <img
                src="https://www.svgrepo.com/show/423308/envelope.svg"
                alt=""
                width="20px"
                className="me-1"
              />
              Gaedjminfo@gmail.com
            </p>
            <p>
              <BsFillTelephoneFill size="15px" color="white" />{" "}
              <span style={{ paddingLeft: "5px" }}>11 6631-8575</span>
            </p>
          </div>

          <div>
            <h4>¿Por qué Gaed.jm?</h4>
            <p>
              <BsCheckCircle size="20px" color="white" /> Variedad de productos
              exclusivos
            </p>
            <p>
              <FaTruck size="20px" color="white" /> Envios a todo el pais
            </p>
            <p>
              <GiPadlock size="20px" color="white" /> Sitio Seguro
            </p>
            <p>
              <BsShieldCheck size="20px" color="white" /> Garantía de calidad
            </p>
          </div>

          <div>
            <h4>Metodos de pago</h4>
            <img
              src="https://drops-ba.com/wp-content/uploads/2021/11/Visa-Mastercard-American-Express-Naranja-Tarjeta-Shopping-Nativa-Cencosud-Cabal-Argencard-Diners-Cordobesa-CMR-Cordial.png"
              alt=""
              className="img-fluid"
            />
          </div>

          <div className={`${styles.Footer_div4}`}>
            <h4>Newsletter Semanal</h4>
            <button>Subscribite!</button>
            <span
              onClick={() =>
                window.scrollTo({ behavior: "smooth", top: "0px" })
              }
            >
              <BsArrowUp size="25px" color="white" />
            </span>
          </div>
        </div>
        <div className={`${styles.container_SocialNetworks}`}>
          <div
            className={`d-flex justify-content-center flex-wrap`}
            //  style={{ border: "1px solid red" }}
          >
            <h4
              className="col-12 text-center"
              // style={{ border: "1px solid red" }}
            >
              REDES SOCIALES
            </h4>
            <div
              className="col-10 d-flex justify-content-around pt-2"
              // style={{ border: "1px solid red" }}
            >
              <span style={{ cursor: "pointer" }}>
                <AiOutlineInstagram size="22px" color="white" />
              </span>
              <span style={{ cursor: "pointer" }}>
                <FaTiktok size="22px" color="white" />
              </span>
              <span style={{ cursor: "pointer" }}>
                <FaFacebookSquare size="22px" color="white" />{" "}
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.containerInfoP}`}>
          <p>© GEAD.JM, 2022. Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
