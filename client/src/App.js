import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ProductDetail from './Components/ProductDetail/ProductDetail.jsx';
import FavoriteProduct from './Components/FavoriteProduct/FavoriteProduct.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import FormProduct from './Components/FormProduct/FormProduct.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Logout from './Components/Logout/Logout';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import { io } from "socket.io-client";
import Checkout from './Components/Checkout/Checkout.jsx';
import { posts } from "./infoUser.js";
import Navbar from './Components/NavbarPrueba/NavBar.jsx';
import Card from './Components/CardPrueba/Card.jsx';
import "./app.css";

function App() {
  // const { isAuthenticated } = useAuth0();
  const [username, setUsername] = useState("");
  const [usernameid, setUsernameId] = useState(0);
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    setSocket(io("http://localhost:5000")) //Inicializamos la conexion con el servidor socket.
  }, []);

  useEffect(() => {
    socket?.emit("newUser", user, usernameid);
  }, [user]);

  return (
    <div className="App">
      {user ? (
        <>
          <Navbar socket={socket} />
          {posts.map((post) => ( //Este posts estaria bueno que sea una variable que tome los datos del estado global reducer, donde al momento de que el usuario se registre en la pagina, dicho estado tendra un valor nuevo el cual se le enviara a card.
            <Card key={post.id} post={post} socket={socket} user={user} />
          ))}
          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <h2>Lama App</h2>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input type="number" min="1" max="5" placeholder='id' onChange={(e) => setUsernameId(e.target.value)} />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}

      {/* <Routes>
        <Route path="/" element={<Home socket={socket} />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/FavoriteProduct" element={<FavoriteProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CreateProduct" element={<FormProduct />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard socket={socket} />}/>
        <Route path="/Checkout" element={<Checkout socket={socket} />} />
      </Routes> */}
    </div>
  );
}

export default App;
