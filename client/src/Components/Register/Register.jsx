import React from 'react';
import {useState , useEffect} from 'react';
import {Link , useNavigate} from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Register.module.css';


function validate (input){
  let errors ={}
  if(!input.name){
    errors.name ='Se requiere un nombre';

 }else if(!input.name.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)){
    errors.name = 'Solo se permiten letras y sin espacios al final!';

  if(!input.lastName){
      errors.lastName ='Se requiere un nombre';
  
 
  }
return errors;
}
}
   

export default function Register(){
 const dispatch = useDispatch()
 const history = useNavigate() 
 const [error , setError]= useState ({})
 const { loginWithRedirect } = useAuth0();

 const [input ,setInput]= useState ({  
  name: "",
  lastName:"",
  userName:"",
  email: "",
  password: "", 
  rpassword:"",
  image:""
 })

function handleChange(e){
   setInput({
    ...input,
    [e.target.name] : e.target.value
   })
  
   setError(validate({
    ...input,
    [e.target.name] : e.target.value
   }))
console.log(input)
 }



function handleSubmit (e){
    e.preventDefault()
 console.log(input)
 dispatch((input))   
 alert ('Verifique su casilla de correo')
 setInput({
    name: "",
    lastName:"",
    userName:"",
    email: "",
    password: "", 
    rpassword:"",
    image:""
 })
 history('/');
}


 return (

  <div class={`d-flex justify-content-center ${styles.container}`}>
    
     <div class={` ${styles.container_Info}`}>
     <div class="d-flex justify-content-center">
      <Link to='/'>< button class="row mb-3">Regresar</button></Link>
      </div>

    <form  onSubmit={(e) => handleSubmit(e)}>
    <h1 class="d-flex justify-content-center">REGISTRATE</h1>
 
    <div class="row mb-2"/>
    <label for="inputPassword" >Nombre</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  placeholder="nombre" name="name" value={input.name} onChange={(e)=>handleChange(e)}/>
     
    </div>

  <div class="row mb-2"/>
    <label for="inputPassword" >Apellido</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  placeholder="apellido" name="lastName" value={input.lastName} onChange={(e)=>handleChange(e)}/>
      
    </div>

    <div class="row mb-2"/>
    <label for="inputPassword" >Nombre de usuario</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  placeholder="ingrese un nombre de usuario" name="userName" value={input.userName} onChange={(e)=>handleChange(e)}/>
      
    </div>

    <div class="row mb-2"/>
    <label for="inputPassword" class="col-sm-2 col-form-label">E-mail</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  placeholder="email@example.com" name="email" value={input.email} onChange={(e)=>handleChange(e)}/>
    </div>

    <div class="row mb-2"/>
    <label for="inputPassword" class="col-sm-2 col-form-label">Contraseña</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="contraseña" name="password" value={input.password} onChange={(e)=>handleChange(e)}/>
    </div>

    <div class="row mb-2"/>
    <label for="inputPassword" >Repetir contraseña</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="repetir" name="rpassword" value={input.rpassword} onChange={(e)=>handleChange(e)}/>
    </div>
      
  <div class="row mb-4">
    <label for="exampleFormControlFile1">Imagen</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" name="image" value={input.image} onChange={(e)=>handleChange(e)}/>
  </div>
 
   <div className={`row mb-3 ${styles.container_button}`}>
   <button  onClick={() => loginWithRedirect()}>¿Ya estas Registrado?</button><br/>
   </div>

   <div class="row mb-5" >
{
 !input.name || !input.lastName || !input.email||
 !input.password|| !input.rpassword  ? 
      <button disabled type="submit">
          Registrate
       </button>
  : 
      <button  type="submit">
          Registrate
      </button>
  }
  </div>
    </form>
    </div>
  </div>
    )
  }

 

/*import React from 'react';
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
