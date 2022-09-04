import React from "react";
import styles from "./LandingPage.module.css";
import imgCarrousel1 from "../../Imagenes/ImagerCarrousel1.jpg";
import imgCarrousel2 from "../../Imagenes/ImagenCarrousel2.jpg";
import imagenCarrousel5 from "../../Imagenes/ImagenCarrousel5.jpg";
import SearchBar from "../SearchBar/SearchBar";

export default function LandingPage() {
  return (
    <div>
      <SearchBar />

      <div
        id="carouselExampleControls"
        className={`carousel slide ${styles.container_Carrousel}`}
        data-bs-ride="carousel"
        // style={{ border: "1px solid red" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <div>
              <img
                src={imgCarrousel2}
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <div className="carousel-item active">
            <div className={`${styles.container_Image_Carrousel}`}>
              <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esAR/Images/originals-ss22-parley-launch-hp-mh-large-GV7616-d_tcm216-854476.jpg"
                className="d-block w-100"
                alt="img"
              ></img>
            </div>
            <div className={`${styles.containerInfoCarrousel}`}>
              <h4>FORUM, CREADAS PARA EL MAÑANA.</h4>
              <p>
                Conocé nuestra última colección de íconos, ahora hechos
                parcialmente con Parley Ocean Plastic.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={imagenCarrousel5}
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div style={{ border: "1px solid red" }}>
        <h4>Nuevos productos</h4>
        <p>Carrousel con carrito y fav cuando se haga el hover</p>
      </div>
    </div>
  );
}
