import React from "react";
import { Link } from "react-router-dom";
import styles from "./Returns.module.css";
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

export default function Returns() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.container_Inicio}`}>
        <div>
          <Link to="/">
            <span className={`${styles.span1}`}>Inicio</span>
          </Link>
          <span className={`${styles.span2}`}> / </span>
          <span className={`${styles.span5}`}>Terminos y condiciones</span>
        </div>
      </div>

      <div className={`${styles.containerInfoAll}`}>
        <div className={`${styles.containerInfo}`}>
          <p>
            Al ser una tienda de consignación, en Drops ofrecemos un período de
            48hs para realizar cambios siempre y cuando los artículos se
            encuentren en las mismas condiciones que cuando fueron comprados.
            Para efectuar este cambio, escribinos a nuestro Instagram, número de
            WhatsApp o Gaedjminfo@gmail.com dentro de las 48hs.
          </p>
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
