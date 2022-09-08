import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout.jsx";
import styles from "./Ban.module.css";

export default function Ban() {
  return (
    <div className={`${styles.container_Ban}`}>
      <div>
        <div>
          <h5>esta baneado</h5>
          <h5>te puedes comunicar con nosotros utilizando este link</h5>
          <Link to="/Contact">
            <h5>Contacto</h5>
          </Link>
          <Logout />
        </div>
      </div>
    </div>
  );
}
