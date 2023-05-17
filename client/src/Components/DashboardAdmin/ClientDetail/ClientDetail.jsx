import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getClientDetail, clearClientDetail } from "../../../Redux/Action";
import style from "./ClientDetail.module.css";

export default function ClientDetail() {
  const { email } = useParams();
  const dispatch = useDispatch();
  const clientDetail = useSelector((state) => state.clientDetail);

  useEffect(() => {
    dispatch(getClientDetail(email));
 
    return () => {
      dispatch(clearClientDetail());
    };
  }, [email]);

  return (
    <>
    {clientDetail.id ? (
      <>
      <div className={style.containerPrincipal}>
        <div className={style.containerInicio}>
        <div>
          <Link to="/Dashboard">
            <span>Dashboard</span>
          </Link>
          <span> / </span>
          <Link to="/AllUsers">
            <span>Usuarios</span>
          </Link>
          <span> / </span>
          <span>{clientDetail.username}</span>
        </div>
      </div>
      <div className={style.divUser}>
        <div className={style.divImg}>
          <img src={clientDetail.img} alt="" />
        </div>
        <div>
          <div>
          <p>Nombre: {clientDetail.name}</p> 
          </div>
          <div>
          <p>Apellido: {clientDetail.surname}</p>
          </div>
        </div>
        <div>
          <p>Username: {clientDetail.username}</p>
        </div>
        <div>
          <p>Email: {clientDetail.email}</p>
        </div>
      </div>
    </div>
      </>
    ) : (
      <div
        className={`d-flex justify-content-center flex-column ${style.container_loading}`}
      >
        <p>Cargando...</p>
        <div
          className={`spinner-border ${style.loading}`}
          style={{ width: "4rem", height: "4rem" }}
          role="status"
        >
          <span className="visually-hidden"></span>
        </div>
      </div>
        ) }
     </>
  );
}
