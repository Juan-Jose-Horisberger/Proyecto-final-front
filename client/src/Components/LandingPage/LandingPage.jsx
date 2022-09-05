import React, { useEffect } from "react";
import styles from "./LandingPage.module.css";
import imgCarrousel1 from "../../Imagenes/ImagerCarrousel1.jpg";
import imgCarrousel2 from "../../Imagenes/ImagenCarrousel2.jpg";
import imagenCarrousel5 from "../../Imagenes/ImagenCarrousel5.jpg";
import SearchBar from "../SearchBar/SearchBar";
import { filterByQuery, getAllProducts } from "../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import stylesComponents from "./stylesComponents.css";
import { Link, useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import imgProducts from "../../Imagenes/ImagenProducts1.png";
import imgDress from "../../Imagenes/ImagenIndumentaria2.png";
import imgFootwear from "../../Imagenes/ImagenCalzado1.png";
import Aos from "aos";
import "aos/dist/aos.css";
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

export default function LandingPage({ setBoolean }) {
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

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
              <p>Conoce todos nuestros nuevos ingresos!</p>
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
          <div
            data-aos="fade-up-right"
            data-aos-anchor-placement="center-center"
            className={`${styles.container_Products_img}`}
            //data-aos-anchor-placement="top-center"
          >
            <Link to="/">
              <span className={`${styles.hover_In_Image}`}>
                <img src={imgProducts} alt="" className="img-fluid" />
              </span>
            </Link>
          </div>
          <div className={`${styles.container_Dress_Footwear}`}>
            <div data-aos="fade-up" data-aos-anchor-placement="center-center">
              <span
                className={`${styles.hover_In_Image}`}
                style={{ cursor: "pointer" }}
              >
                <img src={imgDress} alt="" className="img-fluid" />
              </span>
            </div>
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
          </div>
        </div>
      </div>

      <div className={`${styles.container_AboutUs}`}>
        <div>
          <h4 data-aos="fade-up" data-aos-anchor-placement="center-center">
            ¿Que es GAED.JM?
          </h4>
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
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
            data-aos-duration="500"
          >
            <img
              src="https://drops-ba.com/wp-content/uploads/2021/07/Crew-1.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
            data-aos-duration="1000"
          >
            <img
              src="https://drops-ba.com/wp-content/uploads/2021/07/Crew-2.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
            data-aos-duration="2000"
          >
            <img
              src="https://drops-ba.com/wp-content/uploads/2021/07/Crew-3.jpg"
              alt=""
              className="img-fluid"
            />
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
