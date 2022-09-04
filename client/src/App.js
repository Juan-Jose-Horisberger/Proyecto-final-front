import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import ProductDetail from "./Components/ProductDetail/ProductDetail.jsx";
import ModifyProducts from "./Components/ModifyProducts/ModifyProducts.jsx";
import EditProduct from "./Components/ProductEdit/ProductEdit.jsx";
import FavoriteProduct from "./Components/FavoriteProduct/FavoriteProduct.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import FormProduct from "./Components/FormProduct/FormProduct.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Logout from "./Components/Logout/Logout";
import Dashboard from "./Components/DashboardAdmin/Dashboard/Dashboard.jsx";
import { io } from "socket.io-client";
import Checkout from "./Components/Checkout/Checkout.jsx";
import { posts } from "./infoUser.js";
import Offers from "./Components/Offers/Offers.jsx";
import About from "./Components/AboutUs/AboutUs";
import Faqs from "./Components/Faqs/Faqs.jsx";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions.jsx";
import Returns from "./Components/Returns/Returns.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
// import Navbar from './Components/NavbarPrueba/NavBar.jsx';
// import Card from './Components/CardPrueba/Card.jsx';
// import "./app.css";

function App() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    setSocket(io("http://localhost:5000")); //Inicializamos la conexion con el servidor socket.
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/FavoriteProduct" element={<FavoriteProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Register" element={<Register socket={socket} />} />
        <Route path="/CreateProduct" element={<FormProduct />} />
        <Route path="/EditProduct/:id" element={<EditProduct />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ModifyProducts" element={<ModifyProducts />} />
        <Route path="/Dashboard" element={<Dashboard socket={socket} />} />
        <Route path="/Checkout" element={<Checkout socket={socket} />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/Returns" element={<Returns />} />
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
