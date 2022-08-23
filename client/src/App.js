import React from 'react';
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
import { useAuth0 } from "@auth0/auth0-react";
import {LogoutButton} from './Components/Logout/Logout';


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
{isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <Login/>
        )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/FavoriteProduct" element={<FavoriteProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CreateProduct" element={<FormProduct />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
