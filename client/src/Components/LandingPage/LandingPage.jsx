import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import imgCarrousel2 from "../../Imagenes/ImagenCarrousel2.jpg";
import SearchBar from "../SearchBar/SearchBar";
import { filterByQuery, getAllProducts } from "../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import { Link, useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import imgProducts from "../../Imagenes/ImagenProducts1.png";
import imgDress from "../../Imagenes/ImagenIndumentaria2.png";
import imgFootwear from "../../Imagenes/ImagenCalzado1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";

function matchMediaQuery(breakPoints2, setBreakPointsState) {
  for (var key of Object.keys(breakPoints2)) {
    if (window.matchMedia(`${breakPoints2[key]}`).matches) {
      setBreakPointsState(key);
    }
  }
}

export function breackPointObserver(breakPoints2, setBreakPointsState) {
  matchMediaQuery(breakPoints2, setBreakPointsState);

  window.addEventListener("resize", () => {
    matchMediaQuery(breakPoints2, setBreakPointsState);
  });
}

export default function LandingPage({ setBoolean, setBooleanSearchBar }) {
  const dispatch = useDispatch();
  const history = useNavigate();
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
  const [loaded, setLoaded] = useState(false);
  const [breakPointsState, setBreakPointsState] = useState("");

  useEffect(() => {
    dispatch(getAllProducts());
    window.scroll(0, 0);
  }, [dispatch]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    setLoaded(true);
  }, []);

  const breakPoints2 = {
    mobile: "(min-width: 100px) and (max-width: 576px)",
    tablet: "(min-width: 600px) and (max-width: 768px)",
    laptop: "(min-width: 700px) and (max-width: 1024px)",
  };

  useEffect(() => {
    breackPointObserver(breakPoints2, setBreakPointsState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakPointsState]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  function handleOnClick() {
    dispatch(filterByQuery("category=calzado&")).then(
      (res) => typeof res === "object" && history("/")
    );
    setBoolean(true);
  }

  return (
    <div className={`${styles.container}`}>
      <SearchBar setBooleanSearchBar={setBooleanSearchBar} />

      {loaded ? (
        <div
          id="carouselExampleControls"
          className={`carousel slide ${styles.container_Carrousel}`}
          data-bs-ride="carousel"
          // style={{ border: "1px solid red" }}
        >
          <div className="carousel-inner">
            <div className={`carousel-item ${styles.container_carrousel1}`}>
              <div className={`${styles.container_Image_Carrousel}`}>
                <img
                  src={imgCarrousel2}
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div className={`${styles.containerInfoCarrousel2}`}>
                <p>Conoce todos nuestros nuevos ingresos!</p>
                <h4>NUEVOS PANTALONES NIKE ZERO GRAVITY </h4>
              </div>
            </div>

            <div
              className={`carousel-item active ${styles.container_carrousel2}`}
            >
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
            {/* <div className="carousel-item">
            <img
              src={imagenCarrousel5}
              className="d-block w-100"
              alt="..."
            ></img>
          </div> */}
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
      ) : (
        <div
          className={`d-flex justify-content-center flex-column ${styles.container_loading}`}
        >
          <p>Cargando...</p>
          <div
            className={`spinner-border ${styles.loading}`}
            style={{ width: "4rem", height: "4rem" }}
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}

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

      <div className={`${styles.container_Images}`}>
        <div className={`${styles.containerInfoImages}`}>
          {breakPointsState === "mobile" ? (
            <div className={`${styles.container_Products_img}`}>
              <Link to="/">
                <span className={`${styles.hover_In_Image}`}>
                  <img src={imgProducts} alt="" className="img-fluid" />
                </span>
              </Link>
            </div>
          ) : (
            <div
              data-aos="fade-up-right"
              data-aos-anchor-placement="center-center"
              // data-aos-anchor-placement="top-center"
              className={`${styles.container_Products_img}`}
            >
              <Link to="/">
                <span className={`${styles.hover_In_Image}`}>
                  <img src={imgProducts} alt="" className="img-fluid" />
                </span>
              </Link>
            </div>
          )}

          <div className={`${styles.container_Dress_Footwear}`}>
            {breakPointsState === "mobile" ? (
              <div>
                <span
                  className={`${styles.hover_In_Image}`}
                  style={{ cursor: "pointer" }}
                >
                  <img src={imgDress} alt="" className="img-fluid" />
                </span>
              </div>
            ) : (
              <div data-aos="fade-up" data-aos-anchor-placement="center-center">
                <span
                  className={`${styles.hover_In_Image}`}
                  style={{ cursor: "pointer" }}
                >
                  <img src={imgDress} alt="" className="img-fluid" />
                </span>
              </div>
            )}
            {breakPointsState === "mobile" ? (
              <div>
                <span className={`${styles.hover_In_Image}`}>
                  <img
                    src={imgFootwear}
                    alt=""
                    className="img-fluid"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleOnClick()}
                  />
                </span>
              </div>
            ) : (
              <div
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-center"
              >
                <span className={`${styles.hover_In_Image}`}>
                  <img
                    src={imgFootwear}
                    alt=""
                    className="img-fluid"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleOnClick()}
                  />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`${styles.container_AboutUs}`}>
        <div>
          {breakPointsState === "mobile" ? (
            <h4>¿Que es GAED.JM?</h4>
          ) : (
            <h4 data-aos="fade-up" data-aos-anchor-placement="center-center">
              ¿Que es GAED.JM?
            </h4>
          )}
          <p>
            Somos la primer tienda de consignación HYPE en la Argentina. Que
            vino a revolucionar la industria de los sneakers, traemos la
            experiencia y la cultura del streetwear y las marcas highend al país
            mediante nuestro sistema de consignación . En GAED.JM vas a
            encontrar productos únicos y %100 originales.
          </p>
          <Link to="/About">CONOCENOS</Link>
        </div>
      </div>

      <div className={`${styles.container_AboutImages}`}>
        <div className={`${styles.container_Info_Images}`}>
          {breakPointsState === "mobile" ? (
            <div>
              <img
                src="https://drops-ba.com/wp-content/uploads/2021/07/Crew-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          ) : (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="500"
            >
              <img
                src="https://drops-ba.com/wp-content/uploads/2021/07/Crew-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          )}

          {breakPointsState === "mobile" ? (
            <div>
              <img
                src="https://drops-ba.com/wp-content/uploads/2021/07/Crew-2.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          ) : (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
            >
              <img
                src="https://drops-ba.com/wp-content/uploads/2021/07/Crew-2.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          )}

          {breakPointsState === "mobile" ? (
            <div>
              <img
                src="https://drops-ba.com/wp-content/uploads/2021/07/Crew-3.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          ) : (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
            >
              <img
                src="https://drops-ba.com/wp-content/uploads/2021/07/Crew-3.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
