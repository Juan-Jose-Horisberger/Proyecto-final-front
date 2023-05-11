import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClientDetail, clearClientDetail } from "../../../Redux/Action";
import style from "./UserDetail.module.css";

export default function UserDetail() {
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
      <div className={style.divUser}>
        <div>
          <img src={clientDetail.img} alt="" />
        </div>
        <div className={style.divNameSurname}>
          <p>Nombre: {clientDetail.name}</p>
          <p>Apellido: {clientDetail.surname}</p>
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
    ) : (<h1>CARGANDO</h1>) }
     </>
  );
}
