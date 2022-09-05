import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./Components/Home/Home.jsx";
import ProductDetail from "./Components/ProductDetail/ProductDetail.jsx";
import ModifyProducts from "./Components/ModifyProducts/ModifyProducts.jsx";
import AdminDetail from "./Components/ModifyProducts/AdminDetail.jsx";
import EditProduct from "./Components/ProductEdit/ProductEdit.jsx";
import FavoriteProduct from "./Components/FavoriteProduct/FavoriteProduct.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import FormProduct from "./Components/FormProduct/FormProduct.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import AllUsers from "./Components/DashboardAdmin/AllUsers/AllUsers.jsx";
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
import UserDetail from "./Components/DashboardAdmin/UserDetail/UserDetail.jsx";
// import Navbar from './Components/NavbarPrueba/NavBar.jsx';
// import Card from './Components/CardPrueba/Card.jsx';
// import "./app.css";

function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [socket, setSocket] = useState(null);
  const userDetail = useSelector((state) => state.userDetail);

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
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Register" element={<Register socket={socket} />} />
        {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin == false ? (
          ""
        ) : (
          <Route path="/Dashboard" element={<Dashboard socket={socket} />} />
        )}

        {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin == false ? (
          ""
        ) : (
          <Route path="/CreateProduct" element={<FormProduct />} />
        )}

        {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin == false ? (
          ""
        ) : (
          <Route path="/EditProduct/:id" element={<EditProduct />} />
        )}

        {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin == false ? (
          ""
        ) : (
          <Route path="/AdminDetail/:id" element={<AdminDetail />} />
        )}

        {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin == false ? (
          ""
        ) : (
          <Route path="/ModifyProducts" element={<ModifyProducts />} />
        )}

        <Route path="/Checkout" element={<Checkout socket={socket} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/Returns" element={<Returns />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="/UserDetail/:email" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
