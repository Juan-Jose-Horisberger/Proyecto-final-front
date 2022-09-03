import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";
import Carousel from "react-elastic-carousel";
import stylesComponents from "./stylesComponents.css";
import CartImg from "../../Imagenes/imagenCart2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaTruck } from "react-icons/fa";
import {
  BsShieldCheck,
  BsCheckCircle,
  BsFillTelephoneFill,
  BsArrowUp,
} from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai"; //Instagram

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

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

      <div
        className="container-fluid d-flex flex-row-reverse justify-content-center"
        // style={{ border: "1px solid red" }}
      >
        <div className={`${styles.container_Info}`}>
          <p className={`p-3 mb-0 ${styles.p1}`}>
            Somos una empresa dedicada a la venta de indumentaria Hombre y
            Mujer. Nos encontramos en movimiento constante y fusionando las
            últimas tendencias de la moda urbana y el deporte con una nueva
            propuesta orientada al público joven que incorpora nuevas marcas y
            diseños de vanguardia. Nos adaptamos a tiempos de cambios, a las
            nuevas generaciones, y por eso te traemos los más exclusivos
            productos de las mejores marcas para que crees tu propio estilo.
          </p>
          <p className={`p-3 mb-0 ${styles.p2}`}>
            Misión: Vivimos entrenando para ganar y conquistar a los
            consumidores ofreciendo una experiencia premium. Hablamos a través
            del deporte y de la moda con el objetivo de acompañarlos en cada
            momento de sus vidas para que puedan competir, entrenar o lucir su
            estilo personal, transmitiendo inspiración e innovación.
          </p>
          <p className={`p-3 mb-0 ${styles.p1}`}>
            Visión: Ser el retailer líder en ventas y en servicio al cliente,
            siendo siempre cercano al consumidor.
          </p>
        </div>
        <div className={`${styles.container_image}`}>
          <div>
            <img
              src="https://i.pinimg.com/564x/43/b1/a6/43b1a62a851490bfef2c6fbf95689ea9.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div
        // style={{ border: "1px solid red" }}
        className={`${styles.container_title}`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h3 className="text-center mb-3">SHOWROOM</h3>
        <Carousel breakPoints={breakPoints}>
          <div className={`${styles.carts}`}>
            <img
              src="https://images.unsplash.com/photo-1611858447060-7e516251cf4c?ixlib=rb-1.2.1&"
              alt="img"
              width="300px"
              className="img-fluid"
            />
          </div>
          <div className={`${styles.carts2}`}>
            <img
              src="https://images.unsplash.com/photo-1611858447195-ce967dd3ff49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt="img"
              width="300px"
              className="img-fluid"
            />
          </div>
          <div className={`${styles.carts}`}>
            <img
              src="https://images.unsplash.com/photo-1611858447026-b16c9351c9df?ixlib=rb-1.2.1&"
              alt="img"
              width="300px"
              className="img-fluid"
            />
          </div>
          <div className={`${styles.carts}`}>
            <img
              src="https://images.unsplash.com/photo-1611858447198-c6b3cc794943?ixlib=rb-1.2.1&"
              alt="img"
              width="300px"
              className="img-fluid"
            />
          </div>
          <div className={`${styles.carts}`}>
            <img
              src="https://images.unsplash.com/photo-1611858447092-90f0433a3b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt="img"
              width="300px"
              className="img-fluid"
            />
          </div>
          <div className={`${styles.carts}`}>
            <img
              src="https://images.unsplash.com/photo-1611858447443-dd7ba81accb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt="img"
              width="300px"
              className="img-fluid"
            />
          </div>
          <div className={`${styles.carts}`}>
            <img
              src="https://images.unsplash.com/photo-1611858447638-1113f15f7177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
              alt="img"
              width="300px"
              className="img-fluid"
            />
          </div>
          <div className={`${styles.carts}`}>
            <img
              src={CartImg}
              alt="img"
              width="300px"
              height="322px"
              className="img-fluid"
            />
          </div>
        </Carousel>
      </div>

      <div className={`${styles.container_sales}`}>
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className={`${styles.container_imageSales}`}
        >
          <img
            src="https://drops-ba.com/wp-content/uploads/2021/07/Sumate.jpg"
            className="img-fluid"
            alt=""
          />
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-duration="3000"
          className={`${styles.container_infoSales}`}
        >
          <h4>SUMATE AL LAS PROXIMAS VENTAS</h4>
          <p>
            Sumate a nuestro servicio premium de consignación para vender tus
            ítems en nuestro local en Buenos Aires y a través de nuestras redes.
          </p>

          <Link to="/Contact">VENDER</Link>
        </div>
      </div>

      <div className={`${styles.container_Img}`}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1631774577666-9ce632e70af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="img-fluid"
          />
          <div data-aos="fade-up">
            <p>ENCONTRANOS EN</p>
            <img
              src="https://www.svgrepo.com/show/423301/location.svg"
              width="50px"
              alt=""
            />
            <p>Olazabal 1515 Oficina 201 Cuerpo A, Belgrano,Cp 1428</p>
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
        <div>
          <h4>REDES SOCIALES</h4>
          <div>
            <AiOutlineInstagram size="22px" color="white" />
          </div>
        </div>
        <div className={`${styles.containerInfoP}`}>
          <p>© GEAD.JM, 2022. Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
