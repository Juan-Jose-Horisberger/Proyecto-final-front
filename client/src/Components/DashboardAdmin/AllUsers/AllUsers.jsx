import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import resetImage from "../../../Imagenes/reset.svg";
import {
  getUsers,
  banUser,
  getUserNameInDashboard,
} from "../../../Redux/Action";
import styles from "./AllUsers.module.css";
import { FaBan } from "react-icons/fa";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

export default function AllUsers() {
  const AllUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (AllUsers.length) {
      return;
    }
    dispatch(getUsers()).then(
      (res) => typeof res === "object" && setLoaded(true)
    );
  }, []);

  function handleBan(id) {
    dispatch(banUser(id)).then(
      (res) => res === undefined && dispatch(getUsers())
    );
  }

  function handleOnClick() {
    if (userName) {
      dispatch(getUserNameInDashboard(userName));
      setUserName("");
    }
  }

  return (
    <div className={styles.containerPrincipal}>
      <div className="col-12">
        <div
          className={`d-flex justify-content-between ${styles.container_searchbar}`}
        >
          <div className="ms-5 p-2 d-flex align-items-center">
            <h6 className="fs-1">GAED.JM</h6>
          </div>
          <div className={`${styles.container_InputSearch}`}>
            <div>
              <input
                type="search"
                className="form-control rounded pe-0 me-0"
                placeholder="Search user.."
                aria-label="Search"
                aria-describedby="search-addon"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{ color: "white" }}
              />
              <span
                className={`input-group-text`}
                style={{ cursor: "pointer" }}
                id="search-addon"
              >
                <i onClick={handleOnClick} className={`p-0`}>
                  <GiMagnifyingGlass size="27px" color="grey" />
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={`my-3 ${styles.container_Inicio}`}>
        <div className="pe-3">
          <Link to="/Dashboard">
            <span>Dashboard</span>
          </Link>
          <span> / </span>
          <span>Usuarios</span>
        </div>
        <div>
          <img
            onClick={() => window.location.reload(false)}
            src={resetImage}
            width="25px"
            alt=""
            style={{ cursor: "pointer" }}
          />
        </div>
        {console.log("hola")}
      </div>
      {/* {console.log(AllUsers)} */}
      {console.log(loaded)}
      {loaded ? (
        <>
          {AllUsers.length ? (
            AllUsers.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`container-fluid ${styles.containerUser}`}
                >
                  <div className={styles.divImg}>
                    <p className={styles.pFoto}>Foto</p>
                    <Link to={`/UserDetail/${e.email}`}>
                      {typeof e.img === "string" ? (
                        <img
                          src={
                            typeof e.img === "string"
                              ? e.img
                              : "https://cdn-icons-png.flaticon.com/128/4519/4519678.png"
                          }
                          className="img-fluid"
                        />
                      ) : (
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/4519/4519678.png"
                          className="img-fluid"
                        />
                      )}
                      {/* <FaUserCircle size="20px" /> */}
                    </Link>
                  </div>
                  <div className={styles.divName}>
                    <p className={styles.pResto}>Username</p>
                    <Link to={`/UserDetail/${e.email}`}>
                      <p>{e.username}</p>
                    </Link>
                  </div>
                  <div className={styles.divName}>
                    <p className={styles.pResto}>Email</p>
                    <Link to={`/UserDetail/${e.email}`}>
                      <p>{e.email}</p>
                    </Link>
                  </div>
                  <div className={styles.divName}>
                    <p className={styles.pResto}>Fecha Nacimiento</p>
                    <Link to={`/UserDetail/${e.email}`}>
                      <p>{e.age}</p>
                    </Link>
                  </div>

                  <div className={`${styles.container_Button}`}>
                    <button
                      onClick={() => handleBan(e.id)}
                      className={`${
                        e.ban === true ? styles.unBan : styles.ban
                      }`}
                    >
                      <div className="d-flex">
                        {e.ban === true ? (
                          <div className={`${styles.unbanSpan}`}>UNBAN</div>
                        ) : (
                          <div className={`${styles.banSpan}`}>BAN</div>
                        )}
                        {e.ban === true ? (
                          <div>
                            <BsFillHandThumbsUpFill size="20px" />
                          </div>
                        ) : (
                          <div>
                            <FaBan size="20px" />
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={`${styles.notResult}`}>
              <p role="status">NO HAY USUARIOS REGISTRADOS</p>
            </div>
          )}
        </>
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
