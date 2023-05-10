
import React from "react";
import styles from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Cookies from "universal-cookie";
import {
  getProductByName,
  clearNotifications,
  getDetailNotification,
  getUserDetail,
} from "../../Redux/Action";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "../../Imagenes/cart.svg";
import Campanita from "../../Imagenes/campanita.svg";
import FavoritesIcon from "../../Imagenes/favorites.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import Logout from "../Logout/Logout.jsx";
// import { HiMagnifyingGlassPlus } from "react-icons/hi2";

export default function SearchBar({ socket, setBooleanSearchBar }) {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [errorsExist, setErrorsExist] = useState(false);
  var cookies = new Cookies();
  const counterNoti = cookies.get("counterNoti");
  const noti = cookies.get("noti");
  const infoProductDefailt = useSelector(
    (state) => state.productsNotifications
  );
  const [getDetails, setGetDetails] = useState(false);
  const [getName, setGetName] = useState("");
  var infoNotifications = useSelector((state) => state.newNotification);
  const userDetail = useSelector((state) => state.userDetail);
  const history = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      dispatch(getUserDetail(user.email));
    }
  }, [user]);

  function handleOnClick() {
    productName
      ? dispatch(getProductByName(productName)).then((res) =>
          res.payload.length ? history("/") : history("/")
        )
      : setErrorsExist(true);
    setProductName("");
    if (typeof setBooleanSearchBar === "function") {
      setBooleanSearchBar(true);
    }
  }

  function setNotificationsTo0() {
    cookies.set("counterNoti", 0);
  }

	function getDetailsOnClick() {
		if (getName.length) {
			dispatch(getDetailNotification(getName));
		}
	}

	const displayNotification = ({ senderName, type }, i) => {
		if (type === 1) {
			//compra
			return (
				<div key={i} className={`${styles.notifications}`}>
					<span>{`Muchas gracias ${senderName} por haber realizado una compra`}</span>
				</div>
			);
		}
	};


  const displayNotificationProducts = (noti) => {
    if (!getName) {
      setGetName(noti.name);
    }
    // setGetDetails(true);
    console.log(infoProductDefailt.length);
    return (
      <div key={noti.id} className={`${styles.container_NotificationsRender}`}>
        {/* {infoProductDefailt.length && ( */}
        <Link to={`/`}>
          <h5>Nuevo producto</h5>
          <div>
            <img src={noti.image} alt="img" className="img-fluid" />
          </div>
          <div>
            <p>{noti.name}</p>
            <p>$ {noti.price}</p>
          </div>
        </Link>
        {/* )} */}
      </div>
    );
  };


	// function bringInformation() {
	//    dispatch(getProductByName(getName))
	// }

	function validateErrors(e) {
		e.preventDefault();
		setErrorsExist(false);
	}


  return (
    <div className={`${styles.container} container-fluid p-0 m-0`}>
      {/* {console.log(purchaseNotifications)} */}
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-light bg-light ${styles.container_NavBar}`}
          // style={{ border: "1px solid red" }}
        >
          <div className="container-fluid d-flex flex-wrap">
            <Link to="/LandingPage" className="navbar-brand d-flex col-2 me-0">
              <h1 className="mb-0">GAED.JM</h1>
            </Link>
            <button
              className={`navbar-toggler`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler">
                <img
                  src="https://www.svgrepo.com/show/419541/menu-list-line.svg"
                  width="40px"
                  alt="image"
                />
              </span>
            </button>

            <div
              // style={{ border: "1px solid red" }}
              className={`col-10 collapse navbar-collapse row`}
              id="navbarSupportedContent"
            >
              <ul className="d-flex justify-content-around flex-wrap m-0 p-0">
                {/* <h1></h1> navbar-nav col-12 col-lg-8 d-flex justify-content-sm-start justify-content-around */}

                <div
                  className={`d-flex justify-content-around align-items-center ${styles.container_Info_Navbar}`}
                >
                  <Link
                    to="/Offers"
                    className="nav-item mx-3  mx-lg-2"
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      className={`nav-link mb-0 text-start text-sm-center`}
                      style={{ color: "white" }}
                    >
                      Ofertas
                    </p>
                  </Link>
                  <Link
                    to="/About"
                    className="nav-item mx-3 mx-lg-2"
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      className={`nav-link mb-0 text-start text-sm-center`}
                      style={{ color: "white" }}
                      aria-current="page"
                    >
                      Quienés somos
                    </p>
                  </Link>
                  <Link
                    to="/Contact"
                    className="nav-item mx-3 mx-lg-2"
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      className={`nav-link mb-0 text-start text-sm-center`}
                      style={{ color: "white" }}
                      aria-current="page"
                    >
                      Contacto
                    </p>
                  </Link>
                </div>


								<div
									className={`input-group rounded d-flex align-items-center ${styles.container_Searchbar}`}
									style={{ width: '250px' }}
								>
									<input
										type="search"
										className="form-control rounded pe-0 me-0"
										placeholder="Search"
										aria-label="Search"
										aria-describedby="search-addon"
										value={productName}
										onChange={(e) => setProductName(e.target.value)}
										style={{ color: 'white' }}
									/>


                  <span
                    className={`input-group-text border-0 ${styles.button_Search}`}
                    id="search-addon"
                  >
                    <i onClick={handleOnClick} className={`p-0`}>
                      <GiMagnifyingGlass size="27px" color="grey" />
                    </i>
                  </span>
                </div>


								<div
									className={`d-flex justify-content-center align-items-center flex-nowrap ${styles.container_favAndCart}`}
								>
									<div className="col">
										<Link to="/Cart">
											<img
												src={CartIcon}
												alt="img-icon"
												style={{ width: '30px' }}
											/>
										</Link>
									</div>

									<div className={`col`}>
										<Link to="/FavoriteProduct">
											<img
												src={FavoritesIcon}
												alt="img-icon"
												style={{ width: '27px' }}
											/>
										</Link>
									</div>


                  <div className="col">
                    {isLoading ? (
                      <img
                        src="https://www.svgrepo.com/show/421823/user-people-man.svg"
                        alt="img-icon"
                        style={{  width: "30px" }}
                      />
                    ) : !isAuthenticated ? (
                      <img
                        onClick={() => loginWithRedirect()}
                        src="https://www.svgrepo.com/show/421823/user-people-man.svg"
                        alt="img-icon"
                        style={{ cursor: "pointer", width: "30px" }}
                      />
                    ) : userDetail.admin ? (
                      <Link to={"/Dashboard"}>
                        <img
                          src={user.picture}
                          alt={user.name}
                          referrerPolicy="no-referrer"
                          style={{ width: "30px" }}
                          className={styles.imgProfile}
                        />
                      </Link>
                    ) : (
                      <div>
                        <div className={`${styles.container_notification} `}>
                          <div
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                          >
                            <img
                              src={user.picture}
                              style={{ width: "30px", marginRight: "17px" }}
                              alt=""
                              className={styles.imgProfile}
                            />
                          </div>
                        </div>
                        <div
                          className={`offcanvas offcanvas-end ${styles.container_showProfileUser}`}
                          id="offcanvasRight"
                        >
                          <div className="offcanvas-header">
                            <h4>Mi Perfil</h4>
                            <button
                              type="button"
                              className={`${styles.btnCloseCanvas} btn-close`}
                              data-bs-dismiss="offcanvas"
                            ></button>
                          </div>
                          <div className={`offcanvas-body`}>
                            <img
                              src={user.picture}
                              style={{ width: "40%" }}
                              alt=""
                              className={styles.imgProfileUser}
                            />
                            <h5>UserName</h5>
                            <p>{user.nickname}</p>
                            <h5>Email</h5>
                            <p>{user.email}</p>
                            {console.log(user)}
                            <Link to="/Register">
                              <h4>Mis Datos</h4>
                              <h6>Gestiona tus datos personales</h6>
                            </Link>

                            <div className={styles.btnLogoutUserProfile}>
                              <Logout />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/*  */}
                  {/* OFF CANVAS DE LA CAMPANITA*/}
                  {/*  */}

                  <div
                    className={`${styles.container_notification} `}
                    onClick={() => setNotificationsTo0()}
                  >
                    {/* <Link to="">
                                 <img src="https://www.svgrepo.com/show/281772/alarm-bell.svg" style={{ width: "27px" }} alt="" />
                                 <div>{countNotifications}</div>
                              </Link> */}


                    <div
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight1"
                    >
                      <img src={Campanita} style={{ width: "24px" }} alt="" />
                      {isAuthenticated && !isLoading ? (
                        counterNoti ? (
                          <div>{counterNoti}</div>
                        ) : (
                          <div>0</div>
                        )
                      ) : (
                        true
                      )}
                    </div>
                  </div>
                  <div
                    className={`offcanvas offcanvas-end ${styles.container_showNotifications}`}
                    id="offcanvasRight1"
                  >
                    <div className="offcanvas-header">
                      <h5>Notificaciones</h5>
                      <button
                        // onClick={() => setNotificationsTo0()}
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        style={{ backgroundColor: "white" }}
                      ></button>
                    </div>
                    <div className={`offcanvas-body`}>
                      {noti ? (
                        displayNotificationProducts(noti)
                      ) : (
                        <p className="fs-4 text-center">
                          No hay notificaciones
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className={`
            alert alert-danger alert-dismissible fade show d-flex 
            ${styles.container_Alert} 
            ${errorsExist ? styles.open : styles.container_Alert}`}
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div className={`${styles.alertMsj}`}>
            Por favor complete el campo correspondiente
          </div>
          <button
            type="button"
            className="btn-close"
            onClick={(e) => validateErrors(e)}
          ></button>
        </div>
      </div>
    </div>
  );
}
