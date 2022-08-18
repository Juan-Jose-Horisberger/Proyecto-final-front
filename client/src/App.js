import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ProductDetail from './Components/ProductDetail/ProductDetail.jsx';
import FavoriteProduct from './Components/FavoriteProduct/FavoriteProduct.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import FormProduct from './Components/FormProduct/FormProduct.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/FavoriteProduct" element={<FavoriteProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CreateProduct" element={<FormProduct />} />
      </Routes>
    </div>
  );
}

export default App;
