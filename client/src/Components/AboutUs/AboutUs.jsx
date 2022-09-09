import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";
import Carousel from "react-elastic-carousel";
import stylesComponents from "./stylesComponents.css";
import CartImg from "../../Imagenes/imagenCart2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import { breackPointObserver } from "../LandingPage/LandingPage";

export default function About() {
  const [breakPointsState, setBreakPointsState] = useState("");
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scroll(0, 0);
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const breakPoints2 = {
    mobile: "(min-width: 100px) and (max-width: 576px)",
    tablet: "(min-width: 600px) and (max-width: 768px)",
    laptop: "(min-width: 700px) and (max-width: 1024px)",
  };

  useEffect(() => {
    breackPointObserver(breakPoints2, setBreakPointsState);
  }, [breakPointsState]);

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
      <h1 className="d-flex justify-content-center my-4">¿Quienes Somos?</h1>

      <div className={`container-fluid ${styles.containerInfo}`}>
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

      {breakPointsState === "mobile" ? (
        <div className={`${styles.container_title}`}>
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
      ) : (
        <div
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
      )}

      <div className={`${styles.container_sales}`}>
        <div
          // data-aos="fade-right"
          // data-aos-anchor-placement="center-center"
          className={`${styles.container_imageSales}`}
        >
          <img
            src="https://drops-ba.com/wp-content/uploads/2021/07/Sumate.jpg"
            className="img-fluid"
            alt=""
          />
        </div>
        <div
          // data-aos="zoom-out-left"
          // data-aos-anchor-placement="center-center"
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
          {breakPointsState === "mobile" ? (
            <div className={`${styles.containerInfoLocal}`}>
              <p className="fs-2">ENCONTRANOS EN</p>
              <img
                src="https://www.svgrepo.com/show/423301/location.svg"
                width="30px"
                alt=""
              />
              <p className="fs-5">
                Olazabal 1515 Oficina 201 Cuerpo A, Belgrano,Cp 1428
              </p>
            </div>
          ) : (
            <div data-aos="fade-up" className={`${styles.containerInfoLocal}`}>
              <p>ENCONTRANOS EN</p>
              <img
                src="https://www.svgrepo.com/show/423301/location.svg"
                width="50px"
                alt=""
              />
              <p>Olazabal 1515 Oficina 201 Cuerpo A, Belgrano,Cp 1428</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
