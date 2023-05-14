import React, { useRef, useState } from "react";
import styles from "./ProductDetail.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import {
  getProductDetail,
  filterByQuery,
  getCartProduct,
  deleteCartProduct,
  addReviewToProduct,
  getUserDetail,
} from "../../Redux/Action/index.js";
import agregadoImage from "../../Imagenes/agregadoCart.svg";
import Carousel from "react-elastic-carousel";
import Cookies from "universal-cookie";
import stylesComponents from "./stylesComponents.css";
import { useAuth0 } from "@auth0/auth0-react";
import { TbTrashX } from "react-icons/tb";
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
import BuyProduct from "./MercadoLibre.jsx";
import Footer from "../Footer/Footer";

export default function ProductDetail() {
  //instalar style-component si no funciona
  const history = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const products = useSelector((state) => state.products);
  const productCart = useSelector((state) => state.productCart);
  const cookies = new Cookies();
  const [detail, setDetail] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const grandTotalRef = useRef("");

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      dispatch(getUserDetail(user.email));
    }
  }, [user]);

  const userDetail = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(getProductDetail(id)).then((res) => res && setLoaded(true));
  }, []);

  useEffect(() => {
    dispatch(
      filterByQuery(
        `category=${productDetail.categoryName}&genre=${productDetail.genre}`
      )
    );
  }, [productDetail]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  function handleOnClick(id) {
    dispatch(getProductDetail(id));
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }

  const [review, setReview] = useState({
    email: "",
    idProduct: "",
    number: 0,
    comment: "",
  });
  const onChangeReview = (e) => {
    e.preventDefault();
    setReview({
      ...review,
      email: userDetail.email,
      idProduct: productDetail.id,
      [e.target.name]: e.target.value,
    });
  };
  const addReview = async () => {
    if (isAuthenticated && !isLoading) {
      if (review.number <= 0 || review.number > 5) {
        return Swal.fire({
          title: "Ingresa una puntuación entre 1 y 5",
          icon: "warning",
          background: "#111111",
          confirmButtonColor: "#282626",
          confirmButtonText: "Continuar",
        });
      }
      if (review.comment.length <= 5) {
        return Swal.fire({
          title: "Debes ingresar un comentario mas largo",
          icon: "warning",
          background: "#111111",
          confirmButtonColor: "#282626",
          confirmButtonText: "Continuar",
        });
      }
      const reviewParse = {
        email: review.email,
        idProduct: review.idProduct,
        number: parseInt(review.number),
        comment: review.comment,
      };
      const response = await axios.post(
        "https://proyecto-final-back-ifyd.onrender.com/reviews/create",
        reviewParse
      );
      if (response.data.message) {
        Swal.fire({
          icon: "error",
          title: "Algo salio mal",
          background: "#111111",
          text: response.data.message,
          confirmButtonColor: "#282626",
        });
      } else {
        Swal.fire({
          position: "top-end",
          background: "#111111",
          icon: "success",
          title: "Muchas gracias por comentar!",
          text: response.data,
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(getProductDetail(reviewParse.idProduct));
        cookies.set(reviewParse.idProduct, reviewParse);
      }
    } else {
      return Swal.fire({
        title: "Debes estar registrado para comentar!",
        icon: "warning",
        background: "#111111",
        confirmButtonColor: "#282626",
        confirmButtonText: "Continuar",
      });
    }
  };
  const DeleteComment = async (id, productId) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "Si borras el comentario se perderá para siempre!",
      icon: "warning",
      showCancelButton: true,
      background: "#111111",
      confirmButtonColor: "#B91A1A",
      cancelButtonColor: "#282626",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(
          "https://proyecto-final-back-ifyd.onrender.com/reviews/delete/" + id
        );
        dispatch(getProductDetail(productId));
        Swal.fire({
          icon: "success",
          title: "Comentario eliminado",
          background: "#111111",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  const handleOnCart = () => {
    const findProduct = cookies.get(id);

    if (findProduct) {
      dispatch(deleteCartProduct(id));
      cookies.remove(id);
    } else {
      dispatch(getCartProduct(id));
    }
  };

  const validateCart = (id) => {
    const findProductCart = cookies.get(id);

    if (findProductCart) return true;

    return false;
  };

  const priceWithDiscount = (price, discount) => {
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

    const grandTotal = price - discountLogic; //El total con descuento.
    grandTotalRef.current = grandTotal;
    return (
      <div className={`${styles.container_price}`}>
        <p>${productDetail.price}</p>
        <h2>${grandTotal}</h2>
      </div>
    );
  };

  const handleInfo = (value) => {
    if (value === "cuotas") {
      Swal.fire({
        showConfirmButton: false,
        showCloseButton: true,
        imageUrl: "https://i.ibb.co/Yj89rCZ/MP.png",
        background: "#111111",
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
      });
    } else if (value === "sucursales") {
      Swal.fire({
        showConfirmButton: false,
        showCloseButton: true,
        width: "90%",
        height: "90%",
        html: `<iframe
						src="https://www.google.com/maps/d/u/0/embed?mid=1bfViWcnhJT6Per1ePvfgeWT5oExoC4U&ehbc=2E312F"
						width="90%"
						height="450"
					></iframe>`,
        background: "#111111",
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
      });
    } else if (value === "envios") {
      Swal.fire({
        showConfirmButton: false,
        showCloseButton: true,
        html:
          `<img src="https://i.ibb.co/rsDHGDg/nike2.gif" />` +
          `<h2 style="color: #b8b8b8;">ENVIOS A TODO EL PAIS</h2>` +
          `<b style="color: #982334;">
						Si vives en Buenos Aires su pedido se entregará en los próximos 4
						días hábiles después de la compra. Sino tendrá una demora de hasta 7
						días.
					</b>`,
        background: "#000",
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
      });
    }
  };


  return (
    <div className={styles.container}>
      {loaded ? (
        <div>
          <div className={styles.overallContainer}>
            <div className={styles.container_1}>
              <h1>
                <Link to="/">
                  <span>Inicio</span>
                </Link>
                {/* <span> / </span> */}
                {/* <Link to="/">
                <span
                  onClick={() => handleFilterDetail(productDetail.categoryName)}
                >
                  {productDetail.categoryName}
                </span>
                </Link> */}
                <span> / </span>
                <Link to="/">
                  <span></span>
                </Link>
                <span className={`${styles.span_3}`}>
                  {" "}
                  {productDetail.name}
                </span>
              </h1>
              <div className={`${styles.container_Img}`}>
                <img
                  src={productDetail.image}
                  alt="imagen"
                  className="img-fluid"
                />
                {productDetail.offer && <p>-{productDetail.discount}</p>}
              </div>
            </div>

            <div className={styles.container_2}>
              {/* <img src="" alt="" />img de marca */}
              <h1>{productDetail.name}</h1>
              {productDetail.offer ? (
                priceWithDiscount(productDetail.price, productDetail.discount)
              ) : (
                <div>
                  <h2 className="mb-3" style={{ color: "white" }}>
                    ${productDetail.price}
                  </h2>
                </div>
              )}

              <p>
                3 Cuotas sin interés de{" "}
                {productDetail.offer
                  ? (grandTotalRef.current / 3 + "").slice(0, 5)
                  : (productDetail.price / 3 + "").slice(0, 5)}
              </p>
              <div className={`${styles.size_Container}`}>
                <h3>SELECCIONE TALLE: </h3>
                <div>
                  {productDetail.size &&
                    productDetail.size.map((a, i) => {
                      return <p key={i}>{a}</p>;
                    })}
                </div>
              </div>

              {validateCart(id) ? (
                <div className={`${styles.container_button}`}>
                  <button onClick={handleOnCart}>
                    AGREGADO AL CARRITO
                    <img src={agregadoImage} className={styles.tilde} alt="" />
                  </button>
                </div>
              ) : (
                <div className={`${styles.container_button}`}>
                  <button onClick={handleOnCart}>AGREGAR AL CARRITO</button>
                </div>
              )}

              <div>
                <div className={`${styles.container_img1}`}>
                  <img
                    src="https://www.svgrepo.com/show/20854/credit-card.svg"
                    width="27px"
                    alt=""
                  />
                  <p>
                    Tarjetas de Crédito y Débito{" "}
                    <button
                      name="cuotas"
                      onClick={(e) => handleInfo(e.target.name)}
                    >
                      Ver más...
                    </button>
                  </p>
                </div>
                <div className={`${styles.container_img1}`}>
                  <img
                    src="https://www.svgrepo.com/show/9771/box.svg"
                    width="27px"
                    alt=""
                  />
                  <p>
                    Cambios grátis en sucursales{" "}
                    <button
                      name="sucursales"
                      onClick={(e) => handleInfo(e.target.name)}
                    >
                      Ver más...
                    </button>
                  </p>
                </div>
                <div className={`${styles.container_img1}`}>
                  <img
                    src="https://www.svgrepo.com/show/6989/truck.svg"
                    width="27px"
                    alt=""
                  />
                  <p>
                    Envíos{" "}
                    <button
                      name="envios"
                      onClick={(e) => handleInfo(e.target.name)}
                    >
                      Ver más...
                    </button>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.container_3}>
              <div>
                <h3>DESCRIPCIÓN</h3>
                <h5>{productDetail.name}</h5>
                <p className={`${styles.qualification}`}>
                  Calificación: {productDetail.average}
                </p>
                <p className={`${styles.available}`}>
                  Disponible: {productDetail.stock}
                </p>
                <p className={`${styles.soldOut}`}>
                  Vendido: {productDetail.sold}
                </p>
              </div>
            </div>

            <div className={styles.container_4}>
              <h4>Especificaciones</h4>
              <div>
                <p>Genero:</p>
                <p>{productDetail.genre}</p>
                <p>Tipo de producto:</p>
                <p>{productDetail.categoryName}</p>
                <p>Marca:</p>
                <p>{productDetail.brand}</p>
                <p>Disciplina:</p>
                <p>Moda</p>
              </div>
            </div>

            <div className={`${styles.container_carrousel}`}>
              <h2 className="d-flex justify-content-center">
                PRODUCTOS RELACIONADOS
              </h2>
              <Carousel breakPoints={breakPoints}>
                {products.map((p, i) => {
                  return (
                    <div key={i} className={`${styles.carts}`}>
                      <Link to={`/ProductDetail/${p.id}`}>
                        <img
                          onClick={() => handleOnClick(p.id)}
                          src={p.image}
                          alt="img"
                          width="300px"
                          className="img-fluid"
                        />
                        <p>{p.name}</p>
                        <p>$ {p.price}</p>
                        <p>
                          <b>3</b> Cuotas sin interés de{" "}
                          <b>${(p.price / 3 + "").slice(0, 5)}</b>
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div className={styles.divComments}>
              <input
                className={styles.commentsScore}
                name="number"
                type="number"
                placeholder="⭐ score "
                onChange={(e) => onChangeReview(e)}
              />
              <textarea
                className={styles.commentsText}
                name="comment"
                type="text"
                placeholder="Dejanos un comentario junto a tu puntuacion del producto"
                onChange={(e) => onChangeReview(e)}
                style={{ resize: "none" }}
              ></textarea>
              <button
                className={styles.commentsBtn}
                onClick={() => addReview()}
              >
                Comentar
              </button>

              <div className={styles.comments}>
                {userDetail && userDetail.admin === true
                  ? productDetail.reviews &&
                    productDetail.reviews.map((e) => {
                      let index = productDetail.opinion
                        .map((e) => e.comment)
                        .indexOf(e.data[0].comment);

                      return (
                        <div key={e.id} className={styles.divComment}>
                          <div className={styles.divImg}>
                            <img
                              className={styles.imgUser}
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgHA0ssBCQvOPwPj8afbl6XkiZ2NM_miC3g&usqp=CAU"
                              alt="not found"
                            />
                            <p>
                              Usuario: {productDetail.opinion[index].username}
                            </p>
                            <div className={styles.divBtnDeleteComment}>
                              <button
                                onClick={() => DeleteComment(e.id, e.productId)}
                                className={styles.btnDeleteComment}
                              >
                                <TbTrashX size="30px" color="#8F8F8F" />
                              </button>
                            </div>
                          </div>
                          <p className={styles.h1comment}>
                            Puntuacion: {productDetail.opinion[index].number}
                          </p>
                          <div>
                            <p className={styles.divCommentUser}>
                              {productDetail.opinion[index].comment}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  : productDetail.reviews &&
                    productDetail.reviews.map((e) => {
                      let index = productDetail.opinion
                        .map((e) => e.comment)
                        .indexOf(e.data[0].comment);

                      return (
                        <div key={e.id} className={styles.divComment}>
                          <div className={styles.divImg}>
                            <img
                              className={styles.imgUser}
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgHA0ssBCQvOPwPj8afbl6XkiZ2NM_miC3g&usqp=CAU"
                              alt="not found"
                            />
                            <p>
                              Usuario: {productDetail.opinion[index].username}:
                            </p>
                            <div className={styles.divBtnDeleteComment}>
                              {isAuthenticated &&
                              userDetail &&
                              productDetail.opinion[index].email ==
                                userDetail.email ? (
                                <button
                                  onClick={() =>
                                    DeleteComment(e.id, e.productId)
                                  }
                                  className={styles.btnDeleteComment}
                                >
                                  <TbTrashX size="30px" />
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <p>
                            Puntuacion: {productDetail.opinion[index].number}:
                          </p>
                          <div>
                            <p className={styles.divCommentUser}>
                              {productDetail.opinion[index].comment}
                            </p>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>

          <Footer />
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
    </div>
  );
}
