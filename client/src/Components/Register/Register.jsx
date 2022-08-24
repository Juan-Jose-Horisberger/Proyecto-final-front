import React, { useState, useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
//import Auth0 from "../Auth/Auth0";

export default function Register(props) {
  
  return (
    <div >
      <div >
        <form >
          <h1 >Registrate</h1>
          <div >
            <div >
              <label >Nombre </label>
              <input
                type="text"
                value={"name"}
               placeholder="nombre" >
            
               </input>
             
            </div>
            <div >
              <label>Apellido </label>
              <input
                type="text"
                value={"apellido"}
                placeholder="apellido">

                </input>
            
            </div>
            <div >
              <label >Nombre de Usuario </label>
              <input
                type="text"
                value={"username"}
                placeholder="nombre de usuario">
             </input>
            
            </div>
            <div >
              <label >Email: </label>
              <input
                type="text"
                value={"email"}
                placeholder="Email">
            </input>
             
            </div>
            <div >
              <label >Contraseña</label>
              <input
                type={"text"}
                value={"password"}
                placeholder="Password">
            </input>{" "}
            
            </div>
            <div >
              <label >Repetir contraseña</label>
              <input
                type={"password"}
                value={"password"}
                placeholder="Repetir contraseña">
                </input>{" "}
              
            </div>
          </div>
          <div >
            <NavLink to="/Login" >
             Ya estas Registrado?
            </NavLink>
          </div>
          
        </form>
      </div>
    </div>
  );
}

