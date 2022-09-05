import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, banUser } from "../../../Redux/Action";
import style from "./AllUsers.module.css";
import { FaUserCircle } from "react-icons/fa";

export default function AllUsers() {
  const AllUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  function Ban(id) {
    dispatch(banUser(id));
  }

  return (
    <div className={style.containerPrincipal}>
      <h2>Usuarios</h2>
      <div className={style.divData}>
        <p className={style.pFoto}>Foto</p>
        <p className={style.pResto}>Username</p>
        <p className={style.pResto}>Email</p>
        <p className={style.pResto}>Fecha Nacimiento</p>
      </div>
      {console.log(AllUsers)}
      {AllUsers.length &&
        AllUsers.map((e, i) => {
          return (
            <div key={i} className={style.containerUser}>
              <div className={style.divImg}>
                <Link to={`/UserDetail/${e.email}`}>
                  <img src={e.img ? e.img : <FaUserCircle />} alt="" />
                </Link>
              </div>
              <div className={style.divName}>
                <Link to={`/UserDetail/${e.email}`}>
                  <p>{e.username}</p>
                </Link>
              </div>
              <div className={style.divName}>
                <Link to={`/UserDetail/${e.email}`}>
                  <p>{e.email}</p>
                </Link>
              </div>
              <div className={style.divName}>
                <Link to={`/UserDetail/${e.email}`}>
                  <p>{e.age}</p>
                </Link>
              </div>

              <button
                onClick={() => {
                  Ban(e.id);
                }}
              >
                ban
              </button>
            </div>
          );
        })}
    </div>
  );
}
