import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillBellFill, BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import Logout from "../../Logout/Logout.jsx";
import scrollreveal from "scrollreveal";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar.jsx";
import Campanita from "../../../Imagenes/campanita.svg";
import styles from "./Sidebar.module.css";
import style from "../../SearchBar/SearchBar.module.css";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(0);
  const [navbarState, setNavbarState] = useState(false);
  var cookies = new Cookies();
  var cukis = cookies.getAll();
  var notis = Object.entries(cukis);
  // const newCommentNotification = useSelector(
  //   (state) => state.newCommentNotification
  // );
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .links>ul>li:nth-of-type(7),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  const displayNotificationProducts = () => {
    {
      notis.map((e) => {
        return e[1].idProduct ? (
          <div
            key={e[1].idProduct}
            // className={`${styles.container_NotificationsRender}`}
          >
            {console.log(e[1].idProduct)}
            {console.log(e[1].email)}

            {/* <Link to={`/`}> */}
            <h5>Nuevo comentario</h5>
            <div>
              <p>{e[1].email}</p>
            </div>
            <div>
              <p>{e[1].number}</p>
              <p>{e[1].comment}</p>
            </div>
            {/* </Link> */}
          </div>
        ) : (
          true
        );
      });
    }
  };

  return (
    <>
      {console.log(notis)}
      <Section>
        <div className="top">
          <div
            className={`brand d-flex flex-column mb-3 ${styles.container_Title}`}
          >
            <span>GAED.JM</span>
            <span className="fs-5">Admin</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>

          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <Navbar />
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <a href="/">
                  <MdSpaceDashboard size="20px" />
                  <span>INICIO</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a href="/CreateProduct">
                  <RiDashboard2Fill size="20px" />
                  <span>AGREGAR PRODUCTO</span>
                </a>
              </li>{" "}
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <Link to="/AllUsers">
                  <div>
                    <div className={`d-flex`}>
                      <FaAddressCard size="20px" />
                      <h6 className="ps-3">USUARIOS</h6>
                    </div>
                  </div>
                </Link>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <div
                  className={`${style.container_notification} `}
                  // onClick={() => getDetailsOnClick()}
                >
                  <div
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                  >
                    <div className="d-flex">
                      <BsFillBellFill size="20px" />
                      <span
                        className="ps-3"
                        style={{ color: "white", cursor: "pointer" }}
                      >
                        NOTIFICACIONES
                      </span>
                    </div>
                    {/* {infoNotifications.counter > 0 && (
                      <div>{infoNotifications.counter}</div>
                    )} */}
                  </div>
                </div>
              </li>
              <div
                className={`offcanvas offcanvas-end ${style.container_showNotifications}`}
                id="offcanvasRight"
              >
                <div className="offcanvas-header">
                  <h4>Notificaciones</h4>
                  <button
                    // onClick={() => setNotificationsTo0()}
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    style={{ backgroundColor: "white" }}
                  ></button>
                </div>
                <div className={`offcanvas-body`}>
                  {notis ? (
                    notis.map((e) => {
                      return e[1].idProduct ? (
                        <div
                          key={e[1].idProduct}
                          className={`${styles.container_NotificationsRender}`}
                        >
                          <Link to={`/`}>
                            <h4>Nuevo comentario</h4>
                            <div>
                              <p>Email: {e[1].email}</p>
                            </div>
                            <div>
                              <p>Puntuacion: {e[1].number}</p>
                              <p>Comentario: {e[1].comment}</p>
                            </div>
                          </Link>
                        </div>
                      ) : (
                        true
                      );
                    })
                  ) : (
                    <p className="fs-4 text-center">No hay notificaciones</p>
                  )}
                </div>
              </div>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="#">
                  <BsFillChatTextFill size="20px" />
                  <span>MI PERFIL</span>
                </a>
              </li>
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => setCurrentLink(7)}
              >
                <a href="#">
                  <IoSettings size="20px" />
                  <span>SETTINGS</span>
                </a>
              </li>
              <div className="logout">
                <a href="#">
                  <span style={{ marginRight: "15px" }}>
                    <FiLogOut size="20px" />
                  </span>
                  <Logout />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <a href="#">
                <MdSpaceDashboard size="20px" />
                <span> Dashboard</span>
              </a>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <a href="/CreateProduct">
                <RiDashboard2Fill size="20px" />
                <span> AGREGAR PRODUCTO</span>
              </a>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <a href="/EditProduct">
                <FaAddressCard size="20px" />
                <span> EDITAR PRODUCTO</span>
              </a>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <a href="#">
                <GiTwirlCenter size="20px" />
                <span> NOTIFICACIONES</span>
              </a>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a href="#">
                <BsFillChatTextFill size="20px" />
                <span> FAQs</span>
              </a>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <a href="#">
                <IoSettings size="20px" />
                <span> Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  background-color: #212121;
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .top {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    width: 100%;
    margin-left: 3px;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0;
        padding-left: 0px;
        li {
          padding: 0.6rem 0;
          border-radius: 0.6rem;
          &:hover {
            background-color: #121212;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          a {
            color: black;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem;
    padding-left: 0px;
    border-radius: 0.6rem;
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;

        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        a {
          color: black;
        }
      }
    }
  }
`;
