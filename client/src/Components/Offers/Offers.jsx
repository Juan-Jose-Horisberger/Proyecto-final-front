import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../Redux/Action";
import styles from "./Offers.module.css";

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
    if (typeof conteinerCards === "object") {
      window.scrollTo({
        top: 525,
        behavior: "smooth",
      });
    }
  }, [sales]);

  function priceWithDiscount(price, min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const i = Math.floor(Math.random() * (max - min + 1) + min); //Indice random;
    const discountLogic = price * discounts[i]; //Calculamos descuento

    if (discounts[i] === 0.1) {
      renderOnce3.current = "-10%";
    } else if (discounts[i] === 0.2) {
      renderOnce3.current = "-20%";
    } else if (discounts[i] === 0.3) {
      renderOnce3.current = "-30%";
    } else {
      renderOnce3.current = "-50%";
    }
    const grandTotal = price - discountLogic; //El total con descuento.
    return (
      <div className={`${styles.container_InfoDiscount}`}>
        <p>Precio: ${price}</p>
        <p>
          <b>${grandTotal}</b>
        </p>
        <p>{renderOnce3.current} DE DESCUENTO!</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div
          className={`${styles.msg_discount} ${displayNone && styles.close}`}
        >
          <p>AHORA PODES PAGAR HASTA 3 CUOTAS SIN INTERES</p>
          <button onClick={() => setDisplayNone(true)}>X</button>
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
                        priceWithDiscount(p.price, 0, 3)}
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

          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      )}
    </div>
  );
}
