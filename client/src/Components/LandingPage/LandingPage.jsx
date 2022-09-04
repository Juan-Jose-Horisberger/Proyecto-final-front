import React, { useEffect } from "react";
import styles from "./LandingPage.module.css";
import imgCarrousel1 from "../../Imagenes/ImagerCarrousel1.jpg";
import imgCarrousel2 from "../../Imagenes/ImagenCarrousel2.jpg";
import imagenCarrousel5 from "../../Imagenes/ImagenCarrousel5.jpg";
import SearchBar from "../SearchBar/SearchBar";
import { getAllProducts } from "../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import stylesComponents from "./stylesComponents.css";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import imgProducts from "../../Imagenes/ImagenProducts1.png";
import imgDress from "../../Imagenes/ImagenIndumentaria2.png";
import imgFootwear from "../../Imagenes/ImagenCalzado1.png";

export default function LandingPage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const count = 10;
  const allProductsSort = allProducts.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }

    return 0;
  });
  const productsFiltered = allProductsSort.filter((e, i) => i <= count);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

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
            <div className={`${styles.container_Image_Carrousel}`}>
              <img
                src={imgCarrousel2}
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className={`${styles.containerInfoCarrousel2}`}>
              <p>Conoce todos nuestras nuevos ingresos!</p>
              <h4>NUEVOS PANTALONES NIKE ZERO GRAVITY </h4>
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

      <div className={`${styles.container_Carrousel} col-12`}>
        <h4 className={`${styles.new_Products}`}>NUEVOS PRODUCTOS</h4>
        <div className={`d-flex flex-wrap justify-content-sm-evenly`}>
          <Carousel breakPoints={breakPoints}>
            {productsFiltered.map((p, i) => {
              return (
                <Product
                  key={i}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                  offer={p.offer}
                  discount={p.discount}
                  landingPage={true}
                />
              );
            })}
          </Carousel>
        </div>
      </div>

      <div>
        <div>
          <img src={imgProducts} alt="" className="img-fluid" />
        </div>
        <div>
          <img src={imgDress} alt="" className="img-fluid" />
        </div>
        <div>
          <img src={imgFootwear} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
