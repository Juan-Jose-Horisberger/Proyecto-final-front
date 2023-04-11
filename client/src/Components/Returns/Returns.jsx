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
import Footer from "../Footer/Footer";

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

      <Footer />
    </div>
  );
}
