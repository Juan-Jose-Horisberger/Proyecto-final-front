import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDetail } from "../../Redux/Action";
import Logout from "../Logout/Logout.jsx";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";

export default function Profile() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  /* navigate('/home') */

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
    return loginWithRedirect();
  } else if (userDetail.admin === true) {
    navigate("/Dashboard");
    window.location.reload();
  } else {
    return (
      isAuthenticated && (
        <div className={styles.container}>
          {/* <Logout /> */}
          <div className={styles.container_Info}>
            <p>
              <Link to="/">Inicio</Link>/Mi Perfil
            </p>
            <h3>Mi Perfil</h3>
            <div>
              <img
                src={userDetail.img}
                onError={handleOnError}
                // alt={user.name}
              />
            </div>
            <div>
              <h2>{userDetail.name}</h2>
            </div>
            <h6>Nombre de Usuario: {userDetail.username}</h6>
            <h6>Email: {user.email}</h6>
            <Link to="/Register">
              <img
                src="https://www.svgrepo.com/show/421823/user-people-man.svg"
                alt="img-icon"
                style={{ cursor: "pointer" }}
              />
              <h4>Mis Datos</h4>
              <h6>Gestiona tus datos personales</h6>
            </Link>

            <Logout />
          </div>
        </div>
      )
    );
  }
}
