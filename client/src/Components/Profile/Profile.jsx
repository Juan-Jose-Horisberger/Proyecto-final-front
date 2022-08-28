import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link} from "react-router-dom"
import Logout from "../Logout/Logout";
import styles from './Profile.module.css';

export default function Profile(){
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div class={styles.container}> 
      <div class="d-flex justify-content-center">
      <Link to='/'>< button class="row mb-3">Regresar</button></Link>
      </div>
         <h2 class="d-flex justify-content-center">Mi Perfil</h2>
         <div class="d-flex justify-content-center">
          <img  src={user.picture} alt={user.name} /> 
        </div>

        <div class="d-flex justify-content-center">
          <h2>{user.name}</h2>
        </div>

        <div class="d-flex justify-content-center">
        <p>Email: {user.email}</p>
        </div>
        <Logout/>
      </div>
    )
  );
};