import React from "react";
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout.jsx";
import styles from "./Ban.module.css";

export default function Ban() {
  return (
    <div className={`${styles.container_Ban}`}>
      <div className={`${styles.containerOne}`}>
        <div className={`${styles.container_infoBan}`}>
          <h5>Estas baneado</h5>
          <p>
            <MdOutlineSentimentVeryDissatisfied size={"100px"} />
          </p>
          <h5>
            Te puedes comunicar con nosotros para saber el motivo de tu ban,
            mediante este link:
            <Link to="/Contact">
              <h5>Contacto</h5>
            </Link>
          </h5>

          <Logout />
        </div>
      </div>
    </div>
  );
}
