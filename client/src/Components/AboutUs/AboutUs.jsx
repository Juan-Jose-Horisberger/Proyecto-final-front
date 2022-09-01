import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";

export default function About() {
  return (
    <div className={`container-fluid p-0 ${styles.container}`}>
      <div className={`${styles.container_Inicio}`}>
        <div>
          <Link to="/">
            <span>Inicio</span>
          </Link>
          <span> / </span>
          <span>Quienes Somos</span>
        </div>
      </div>
      <h1 className="d-flex justify-content-center">¿Quienes Somos?</h1>

      <div className={`${styles.container_informacion}`}>
        <div className={`col-12 ${styles.container_infoAbout}`}>
          <div className={`${styles.container_infoAbout2}`}>
            <p>
              Somos una empresa dedicada a la venta de indumentaria Hombre y
              Mujer. Nos encontramos en movimiento constante y fusionando las
              últimas tendencias de la moda urbana y el deporte con una nueva
              propuesta orientada al público joven que incorpora nuevas marcas y
              diseños de vanguardia. Nos adaptamos a tiempos de cambios, a las
              nuevas generaciones, y por eso te traemos los más exclusivos
              productos de las mejores marcas para que crees tu propio estilo.
            </p>
            <div className={`d-flex mb-3`}>
              <p>
                Misión: Vivimos entrenando para ganar y conquistar a los
                consumidores ofreciendo una experiencia premium. Hablamos a
                través del deporte y de la moda con el objetivo de acompañarlos
                en cada momento de sus vidas para que puedan competir, entrenar
                o lucir su estilo personal, transmitiendo inspiración e
                innovación.
              </p>
            </div>
            <div className={`d-flex`}>
              <p className="m-0">
                {" "}
                Visión: Ser el retailer líder en ventas y en servicio al
                cliente, siendo siempre cercano al consumidor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`col-5 ${styles.container_image}`}>
        <img
          src="https://i.pinimg.com/564x/79/86/91/7986914867d6366dcc16143021f41de5.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
