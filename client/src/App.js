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

//import { io } from "socket.io-client";
import Checkout from './Components/Checkout/Checkout.jsx';


function App() {
  
  const { isAuthenticated } = useAuth0();
  const [socket, setSocket] = useState(null);
  useEffect(() =>{
    setSocket(io("http://localhost:3000"));
  },[]);

  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/FavoriteProduct" element={<FavoriteProduct />} />
        <Route path="/Cart" element={<Cart />} />
        {/*<Route path="/Login" element={<Login />} />*/}
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CreateProduct" element={<FormProduct />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Dashboard" element={<Dashboard socket={socket} />}/>
        <Route path="/Checkout" element={<Checkout socket={socket} />} />

      </Routes>
    </div>
  );
}

export default App;
