import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login(){
  const { loginWithRedirect } = useAuth0();

  return (
  <button onClick={() => loginWithRedirect()}>Login</button>
  );
};


/*import React from 'react';
import styles from './Login.module.css';

export default function Login(){
    return(
        <div className={styles.container}>
            <h1>Hola estas en Login</h1>
        </div>
    )
}*/