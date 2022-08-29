import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDetail } from "../../Redux/Action";
import Login from "../Login/Login.jsx";
import Logout from "../Logout/Logout.jsx";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      dispatch(getUserDetail(user.email));
    }
  }, [user]);

  const handleOnError = (e) => {
    e.target.src =
      "https://www.procainsa.com/wp-content/uploads/2017/02/Icono-Perfil-150x150.png";
  };
  if (isLoading || !userDetail) {
    return <div>Loading...</div>;
  } else if (!isAuthenticated) {
    return <Login />;
  } else {
    return (
      isAuthenticated && (

        <div className="d-flex justify-content-center">
          <div class={`d-flex flex-column  ${styles.container_Info}`}>
            <Link to="/">
              <button>Regresar</button>
            </Link>
            <h3 className="d-flex justify-content-center">Mi Perfil</h3> <br />
            <img
              className="d-flex justify-content-center"
              src={userDetail.img}
              onError={handleOnError}
              alt={user.name}
            />{" "}
            <br />
            <h2>{userDetail.name}</h2>
            <h6>{userDetail.username}</h6>
            <h6>Email: {userDetail.email}</h6>
            <Logout />
          </div>
         </div>
      )
    );
  }
}
