import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../Redux/Action";
import styles from "./Offers.module.css";
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

export default function Offers() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [loaded, setLoaded] = useState(false);
  const [sales, setSales] = useState([]);
  const renderOnce = useRef(0);
  const [displayNone, setDisplayNone] = useState(false);
  const [discounts, setDiscounts] = useState([0.1, 0.2, 0.3, 0.5]); //10%
  // const randomDiscount =
  //   discounts[Math.floor(Math.random() - 0.5)];
  const renderOnce2 = useRef(0);
  const conteinerCards = useRef(); //Nos ayuda con el scroll
  const showDiscounts = ["-10%", "-20%", "-30%", "-50%"]; //Mostramos el descuento
  const [algo, setAlgo] = useState([]);
  const renderOnce3 = useRef("");

  useEffect(() => {
    dispatch(getAllProducts()).then(
      (res) =>
        res.payload.length &&
        setSales(
          ...sales,
          res.payload.filter((e) => e.offer)
        )
    );
    // console.log(discounts);
  }, []);

  useEffect(() => {
    if (renderOnce.current === 0) {
      renderOnce.current = renderOnce.current + 1;
      return;
    }
    setLoaded(true);
    console.log(sales);
    if (typeof conteinerCards === "object") {
      window.scrollTo({
        top: 525,
        behavior: "smooth",
      });
    }
  }, [sales]);

  function priceWithDiscount(price, discount) {
    let discountNumber;
    if (discount) {
      if (discount === "10%") {
        discountNumber = 0.1;
      } else if (discount === "20%") {
        discountNumber = 0.2;
      } else if (discount === "30%") {
        discountNumber = 0.3;
      } else if (discount === "40%") {
        discountNumber = 0.4;
      } else {
        discountNumber = 0.5;
      }
    }
    const discountLogic = price * discountNumber; //Calculamos descuento
    console.log(discountNumber);

    const grandTotal = price - discountLogic; //El total con descuento.
    return (
      <div className={`${styles.container_InfoDiscount}`}>
        <p>Precio: ${price}</p>
        <p>
          <b>${grandTotal}</b>
        </p>
        <p>{discount} DE DESCUENTO!</p>
      </div>
    );
  }

  return (
    <div className={`${styles.container}`}>
      <div>
        <div
          className={`${styles.msg_discount} ${displayNone && styles.close}`}
        >
          <p>AHORA PODES PAGAR HASTA 3 CUOTAS SIN INTERES</p>
          <button
            onClick={() => setDisplayNone(true)}
            style={{ color: "white" }}
          >
            X
          </button>
        </div>
        <div>
          <img
            src="https://essential.vteximg.com.br/arquivos/ids/437409/Banner-promo-60off.jpg?v=637595408874370000"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div>
        <div className={`${styles.container_Inicio}`}>
          <Link to="/">
            <span>Inicio</span>
          </Link>
          <span> / </span>
          <span>
            <b>Ofertas</b>
          </span>
        </div>
      </div>
      <div
        className={`d-flex justify-content-center ${styles.container_Title}`}
      >
        <h3>PRODUCTOS EN DESCUENTO</h3>
      </div>
      {renderOnce.current === 0 ? (
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
      ) : (
        <div ref={conteinerCards}>
          {/* {console.log(console.log(showDiscounts))} */}
          {loaded ? (
            <div className={`${styles.container_infoProducts}`}>
              {sales.length ? (
                sales.map((p, i) => (
                  <div key={i} className={`${styles.container_cart}`}>
                    <div>
                      <img src={p.image} alt="image" className="img-fluid" />
                    </div>
                    {/* {console.log(renderOnce2.current)} */}
                    <div>
                      <p className="mt-3">{p.name}</p>
                      {renderOnce2.current === 0 &&
                        priceWithDiscount(p.price, p.discount)}{" "}
                      {/*discount*/}
                      <Link to={`/ProductDetail/${p.id}`}>
                        <button>VER MÁS</button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className={`${styles.notResult}`}>
                  <p role="status">NO HAY PRODUCTOS EN DESCUENTO..</p>
                  <Link to="/">Inicio</Link>
                </div>
              )}
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
                  <BsCheckCircle size="20px" color="white" /> Variedad de
                  productos exclusivos
                </p>
                <p>
                  <FaTruck size="20px" color="white" /> Envios a todo el pais
                </p>
                <p>
                  <GiPadlock size="20px" color="white" /> Sitio Seguro
                </p>
                <p>
                  <BsShieldCheck size="20px" color="white" /> Garantía de
                  calidad
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
      )}
    </div>
  );
}
