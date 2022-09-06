import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout.jsx";

export default function Ban() {
  return (
    <div>
      <h1>esta baneado</h1>
      <h1>te puedes comunicar con nosotros utilizando este link</h1>
      <Link to="/Contact">
        <h1>Contacto</h1>
      </Link>
      <Logout />
    </div>
  );
}
