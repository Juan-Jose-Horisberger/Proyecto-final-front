import React, { useState } from "react";
import styles from "./ProductDetail.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getProductDetail,
  filterByQuery,
  getCartProduct,
  deleteCartProduct,
  addReviewToProduct,
  getUserDetail,
} from "../../Redux/Action/index.js";
import SearchBar from "../SearchBar/SearchBar";
import Carousel from "react-elastic-carousel";
import Cookies from "universal-cookie";
import stylesComponents from "./stylesComponents.css";
import { useAuth0 } from "@auth0/auth0-react";
import BuyProduct from "./MercadoLibre.jsx";

export default function ProductDetail() {
  //instalar style-component si no funciona
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const products = useSelector((state) => state.products);
  const productCart = useSelector((state) => state.productCart);
  const cookies = new Cookies();
  const [detail, setDetail] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      dispatch(getUserDetail(user.email));
    }
  }, [user]);

const userDetail = useSelector(state => state.userDetail)

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
    if(!isAuthenticated){
      return //puse este return para que no se rompa, porque tarda en traerse los datos aveces :D
    }
    e.preventDefault();
    setReview({
      ...review,
       email: userDetail.email,
      idProduct: productDetail.id,
      [e.target.name]: e.target.value,
    });
  };
  const addReview = () => {
    if (isAuthenticated && !isLoading) {
      if(productDetail.review && productDetail.review.length >= 2){
        return alert("nuestra base de datos no puede soportar mas de dos reviews por producto :(")
      }else{
        if(review.comment.length <= 5){
          return alert("ingresa un comentario mas largo")
        }
       dispatch(addReviewToProduct(review));
       setReview({
        email: "",
        idProduct: "",
        number: 0,
        comment: "",
       })
      }
    }else{
      
      return alert("debes estar registrado")
    }
    
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

  return (
    <div className={styles.container}>
      {/* <SearchBar /> */}
      {loaded ? (
        <div>
          <div className={styles.overallContainer}>
            <div className={styles.container_1}>
              <h1>
                <Link to="/">
                  <span>Inicio</span>
                </Link>
                <span> / </span>
                <Link to="">
                  <span>{productDetail.categoryName}</span>
                </Link>
                <span> / </span>
                <Link to="/">
                  <span></span>
                </Link>
                <span className={`${styles.span_3}`}>{productDetail.name}</span>
              </h1>
              <div>
                <img
                  src={productDetail.image}
                  alt="imagen"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className={styles.container_2}>
              {/* <img src="" alt="" />img de marca */}
              <h1>{productDetail.name}</h1>
              <h2>$ {productDetail.price}</h2>
              <p>
                3 Cuotas sin interés de{" "}
                {(productDetail.price / 3 + "").slice(0, 5)}
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
                  <button onClick={handleOnCart}>AGREGADO AL CARRITO</button>
                </div>
              ) : (
                <div className={`${styles.container_button}`}>
                  <button onClick={handleOnCart}>AGREGAR AL CARRITO</button>
                </div>
              )}

              <div>
                <div>
                  <div className={`${styles.container_img1}`}>
                    <img
                      src="https://www.svgrepo.com/show/20854/credit-card.svg"
                      width="27px"
                      alt=""
                    />
                    <p>
                      3 Cuotas sin interés <Link to="">ver más</Link>
                    </p>
                  </div>
                  <div className={`${styles.container_img1}`}>
                    <img
                      src="https://www.svgrepo.com/show/9771/box.svg"
                      width="27px"
                      alt=""
                    />
                    <p>
                      Cambios grátis en sucursales <Link to="">ver más</Link>
                    </p>
                  </div>
                  <div className={`${styles.container_img1}`}>
                    <img
                      src="https://www.svgrepo.com/show/275832/handbag.svg"
                      width="27px"
                      alt=""
                    />
                    <p>
                      Retire express en tiendas <Link to="">ver más</Link>
                    </p>
                  </div>
                  <div className={`${styles.container_img1}`}>
                    <img
                      src="https://www.svgrepo.com/show/6989/truck.svg"
                      width="27px"
                      alt=""
                    />
                    <p>
                      Envíos <Link to="">ver más</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
            <div className={styles.container_3}>
              <div>
                <h3>DESCRIPCIÓN</h3>
                <h5>{productDetail.name}</h5>
                <p className={`${styles.qualification}`}>
                  Calificacion: {productDetail.score}
                </p>
                <p className={`${styles.available}`}>
                  Disponible: {productDetail.stock}
                </p>
                <p className={`${styles.soldOut}`}>
                  Vendido: {productDetail.sold}
                </p>
              </div>
            </div>

            {/* ///////////////                    COMPRAR PRODUCTO PRUEBA XD /////////////////////////// */}
              <BuyProduct user={userDetail}/>
            {/* ///////////////// */}

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
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
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
        ></textarea>
        <button className={styles.commentsBtn} onClick={() => addReview()}>
          Comentar
        </button>
        <div className={styles.comments}>
         {
          
           productDetail.review && 
             productDetail.review.map(e => {
               return( 
                    <div className={styles.handleComment}>
                      <img  className={styles.imgUser} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgHA0ssBCQvOPwPj8afbl6XkiZ2NM_miC3g&usqp=CAU" alt="not found" />
                      <h1 className={styles.h1comment}>email: {e.email}   </h1>
                      <h1 className={styles.h1comment}>username:  {e.username}:</h1>
                      <h1 className={styles.h1comment}>{e.comment}</h1>
                    </div>
               )
               })
           
         }
         </div>
      </div>
    </div>
  );
}
