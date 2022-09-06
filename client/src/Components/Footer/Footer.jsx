import React from "react";
import styles from "./Footer.module.css";
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
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Footer() {
  function handleCupon() {
    Swal.fire({
      title: "Suscribite al Newsletter!",
      html: `
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label d-flex text-start">Nombre</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Juan" autocomplete="off">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label d-flex text-start">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" autocomplete="off">
              </div>
            </form>
          `,
      imageUrl:
        "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esAR/Images/originals-ss22-parley-launch-hp-mh-large-GV7616-d_tcm216-854476.jpg",
      imageWidth: 400,
      imageHeight: "auto",
      imageAlt: "Custom image",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: false,
      confirmButtonText: "Enviar",
      showLoaderOnConfirm: true,
      confirmButtonColor: "#282626",

      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `El formulario se ha enviado correctamente.`,
          confirmButtonColor: "#282626",
        });
      }
    });
  }

  return (
    <>
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
            <button onClick={() => handleCupon()}>Subscribite!</button>
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
    </>
  );
}
