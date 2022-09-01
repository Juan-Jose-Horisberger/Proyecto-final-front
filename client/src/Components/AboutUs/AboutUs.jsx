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
        {/*https://i.pinimg.com/564x/79/86/91/7986914867d6366dcc16143021f41de5.jpg

          Esta va si o si
        https://drops-ba.com/wp-content/uploads/2021/07/Sumate.jpg drops

        https://images.unsplash.com/photo-1611858447060-7e516251cf4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80
        https://images.unsplash.com/photo-1611858447026-b16c9351c9df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80
        https://images.unsplash.com/photo-1591009986876-28ee2a1912cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80
        https://images.unsplash.com/photo-1513188732907-5f732b831ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80
        https://images.unsplash.com/photo-1611858447198-c6b3cc794943?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80
        https://images.unsplash.com/photo-1578592383917-2f0c0f16c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
        */}
        <img
          src="https://images.unsplash.com/photo-1590884226650-3611f205c13e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  );
}
