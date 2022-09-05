import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetail } from "../../../Redux/Action";
import style from "./UserDetail.module.css";

export default function UserDetail() {
  const { email } = useParams();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(getUserDetail(email));
  }, []);

  return (
    <div className={style.containerPrincipal}>
      <div className={style.divUser}>
        <div>
          <img src={userDetail.img} alt="" />
        </div>
        <div className={style.divNameSurname}>
          <p>Nombre: {userDetail.name}</p>
          <p>Apellido: {userDetail.surname}</p>
        </div>
        <div>
          <p>Username: {userDetail.username}</p>
        </div>
        <div>
          <p>Email: {userDetail.email}</p>
        </div>
      </div>
    </div>
  );
}
