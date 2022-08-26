import React from 'react';
import {useState , useEffect} from 'react';
import {Link , useNavigate} from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";


function validate (input){
  let errors ={}
  if(!input.nombre){
    errors.nombre ='Se requiere un nombre';

 }else if(!input.nombre.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)){
    errors.nombre = 'Solo se permiten letras y sin espacios al final!';

}else if(!input.apellido.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)){
  errors.apellido = 'Solo se permiten letras y sin espacios al final!';


  }
return errors;
}
   

export default function Register(){
 const dispatch = useDispatch()
 const history = useNavigate() 
 const [error , setError]= useState ({})
 const { loginWithRedirect } = useAuth0();

 const [input ,setInput]= useState ({  
  nombre: "",
  apellido:"",
  nombreUsuario:"",
  email: "",
  constraseña: "", 
 })

function handleChange(e){
   setInput({
    ...input,
    [e.target.nombre] : e.target.value
   })
   setError(validate({
    ...input,
    [e.target.nombre] : e.target.value
   }))
console.log(input)
 }



function handleSubmit (e){
    e.preventDefault()
 console.log(input)
 dispatch((input))   
 alert ('Usuario creado con Exito')
 setInput({
    nombre: "",
    apellido:"",
    nombreUsuario:"",
    email: "",
    constraseña: "", 
 })
 history('/Home');
}

 return (

  <div >
    
     <div >
     <div><Link to='/'><button >Regresar</button></Link></div>
    <form  onSubmit={(e) => handleSubmit(e)}>
    <h1>Registrate</h1>
  <div>
    <label >Nombre</label><br />
    <input
    type="text"
    value={input.nombre}
    name='nombre' 
    onChange={(e)=>handleChange(e)}
    />
    {error.nombre && ( <p> {error.nombre} </p> )}
 </div>
  
 <div>
    <label >Apellido</label> <br />
    <input
    type="text"
    value={input.name}
    name='nombre' 
    onChange={(e)=>handleChange(e)}
    />
    {error.apellido && ( <p > {error.apellido} </p> )}
 </div>
 <div>
    <label >E-mail</label> <br />
    <input
    type="text"
    value={input.email}
    name='email' 
    onChange={(e)=>handleChange(e)}
    />
    {error.email && ( <p > {error.email} </p> )}
 </div>
   
 
 <div>
    <label >Contraseña</label> <br />
    <input
    type="text"
    value={input.email}
    name='email' 
    onChange={(e)=>handleChange(e)}
    />
    {error.constraseña && ( <p > {error.contraseña} </p> )}
 </div>
 <div>
    <label >Repetir contraseña</label> <br />
    <input
    type="password"
    value={input.email}
    name='email' 
    onChange={(e)=>handleChange(e)}
    />
    {error.repetirContraseña && ( <p > {error.repetirContraseña} </p> )}
 </div>

   
   <button onClick={() => loginWithRedirect()}>Ya estas Registrado?</button><br/>
  
{
 !input.nombre || !input.apellido || !input.email||
 !input.constraseña|| !input.repetirContraseña  ? 
      <button  disabled type="submit">
          Crear
       </button>
  : 
      <button  type="submit">
          Crear
      </button>
  }

       
    
  
    </form>
    </div>
  </div>
    )
  }
  
  
  /*import React, { useState, useEffect } from "react";
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
                value=""
               placeholder="nombre" >
            
               </input>
             
            </div>
            <div >
              <label>Apellido </label>
              <input
                type="text"
                value=""
                placeholder="apellido">

                </input>
            
            </div>
            <div >
              <label >Nombre de Usuario </label>
              <input
                type="text"
                value=""
                placeholder="nombre de usuario">
             </input>
            
            </div>
            <div >
              <label >Email: </label>
              <input
                type="text"
                value=""
                placeholder="Email">
            </input>
             
            </div>
            <div >
              <label >Contraseña</label>
              <input
                type={"text"}
                value=""
                placeholder="Password">
            </input>
            
            </div>
            <div >
              <label >Repetir contraseña</label>
              <input
                type={"password"}
                value=""
                placeholder="Repetir contraseña">
                </input>
              
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
*/
