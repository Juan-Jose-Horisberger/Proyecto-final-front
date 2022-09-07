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
// import Login from "./Components/Login/Login.jsx";
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
import Ban from "./Components/Ban/Ban.jsx";
// import Navbar from './Components/NavbarPrueba/NavBar.jsx';
// import Card from './Components/CardPrueba/Card.jsx';
// import "./app.css";

function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [socket, setSocket] = useState(null);
  const [boolean, setBoolean] = useState(false);
  const [booleanSearchBar, setBooleanSearchBar] = useState(false);
  const userDetail = useSelector((state) => state.userDetail);
  // useEffect(() => {
  //   setSocket(io("http://localhost:5000")); //Inicializamos la conexion con el servidor socket.
  // }, []);

  return (
    <div className="App">
      <Routes>
        {isLoading || !userDetail ? (
          <Route
            path="/"
            element={
              <Home
                socket={socket}
                boolean={boolean}
                booleanSearchBar={booleanSearchBar}
              />
            }
          />
        ) : !isAuthenticated ? (
          <Route
            path="/"
            element={
              <Home
                socket={socket}
                boolean={boolean}
                booleanSearchBar={booleanSearchBar}
              />
            }
          />
        ) : userDetail.ban === true ? (
          <Route path="/" element={<Ban />} />
        ) : (
          <Route
            path="/"
            element={
              <Home
                socket={socket}
                boolean={boolean}
                booleanSearchBar={booleanSearchBar}
              />
            }
          />
        )}
        {isLoading || !userDetail ? (
          <Route path="/Profile" element={<Profile />} />
        ) : !isAuthenticated ? (
          <Route path="/Profile" element={<Profile />} />
        ) : userDetail.ban === true ? (
          <Route path="/Profile" element={<Ban />} />
        ) : (
          <Route path="/Profile" element={<Profile />} />
        )}
        {isLoading || !userDetail ? (
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        ) : !isAuthenticated ? (
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        ) : userDetail.ban === true ? (
          <Route path="/ProductDetail/:id" element={<Ban />} />
        ) : (
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        )}
        {isLoading || !userDetail ? (
          ""
        ) : userDetail.ban === true ? (
          <Route path="/Checkout" element={<Ban />} />
        ) : (
          <Route path="/Checkout" element={<Checkout socket={socket} />} />
        )}

        {/* no funciona bien la autenticacion del /FavoriteProduc */}
        {isLoading || !userDetail ? (
          <Route path="/FavoriteProduct" element={<FavoriteProduct />} />
        ) : !isAuthenticated ? (
          <Route path="/FavoriteProduct" element={<FavoriteProduct />} />
        ) : userDetail.ban === true ? (
          <Route path="/FavoriteProduct" element={<Ban />} />
        ) : (
          <Route path="/FavoriteProduct" element={<FavoriteProduct />} />
        )}
        {/* no funciona bien la autenticacion del /cart */}
        {isLoading || !userDetail ? (
          ""
        ) : userDetail.ban === true ? (
          <Route path="/Cart" element={<Ban />} />
        ) : (
          <Route path="/Cart" element={<Cart />} />
        )}

        {/* {isLoading || !userDetail ? (
          <Route path="/Login" element={<Login />} />
        ) : !isAuthenticated ? (
          <Route path="/Login" element={<Login />} />
        ) : userDetail.ban === true ? (
          <Route path="/Login" element={<Ban />} />
        ) : (
          <Route path="/Login" element={<Login />} />
        )} */}
        {/* no funciona bien la autenticacion del /Register */}
        {isLoading || !userDetail ? (
          ""
        ) : userDetail.ban === true ? (
          <Route path="/Register" element={<Ban />} />
        ) : (
          <Route path="/Register" element={<Register socket={socket} />} />
        )}
        {/* no funciona bien la autenticacion del /Offers */}
        {isLoading || !userDetail ? (
          ""
        ) : userDetail.ban === true ? (
          <Route path="/Offers" element={<Ban />} />
        ) : (
          <Route path="/Offers" element={<Offers />} />
        )}
        {/* no funciona bien la autenticacion del /About */}
        {isLoading || !userDetail ? (
          <Route path="/About" element={<About />} />
        ) : !isAuthenticated ? (
          <Route path="/About" element={<About />} />
        ) : userDetail.ban === true ? (
          <Route path="/About" element={<Ban />} />
        ) : (
          <Route path="/About" element={<About />} />
        )}
        {/* no funciona bien la autenticacion del /Faqs */}
        {isLoading || !userDetail ? (
          ""
        ) : userDetail.ban === true ? (
          <Route path="/Faqs" element={<Ban />} />
        ) : (
          <Route path="/Faqs" element={<Faqs />} />
        )}
        {isLoading || !userDetail ? (
          ""
        ) : userDetail.ban === true ? (
          <Route path="/TermsAndConditions" element={<Ban />} />
        ) : (
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        )}
        {isLoading || !userDetail ? (
          <Route path="/Returns" element={<Returns />} />
        ) : !isAuthenticated ? (
          <Route path="/Returns" element={<Returns />} />
        ) : userDetail.ban === true ? (
          <Route path="/Returns" element={<Ban />} />
        ) : (
          <Route path="/Returns" element={<Returns />} />
        )}
        {isLoading || !userDetail ? (
          <Route
            path="/LandingPage"
            element={
              <LandingPage
                setBoolean={setBoolean}
                setBooleanSearchBar={setBooleanSearchBar}
              />
            }
          />
        ) : !isAuthenticated ? (
          <Route
            path="/LandingPage"
            element={
              <LandingPage
                setBoolean={setBoolean}
                setBooleanSearchBar={setBooleanSearchBar}
              />
            }
          />
        ) : userDetail.ban === true ? (
          <Route path="/LandingPage" element={<Ban />} />
        ) : (
          <Route
            path="/LandingPage"
            element={
              <LandingPage
                setBoolean={setBoolean}
                setBooleanSearchBar={setBooleanSearchBar}
              />
            }
          />
        )}
        {isLoading || !userDetail ? (
          <Route path="/LandingPage" element={<LandingPage />} />
        ) : !isAuthenticated ? (
          <Route path="/LandingPage" element={<LandingPage />} />
        ) : userDetail.ban === true ? (
          <Route path="/LandingPage" element={<Ban />} />
        ) : (
          <Route path="/LandingPage" element={<LandingPage />} />
        )}

        <Route path="/Logout" element={<Logout />} />
        <Route path="/Contact" element={<Contact />} />

        {/* admin */}
        {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin === false ? (
          ""
        ) : (
          <Route path="/Dashboard" element={<Dashboard socket={socket} />} />
        )}

        {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin === false ? (
          ""
        ) : (
          <Route path="/CreateProduct" element={<FormProduct />} />
        )}

        {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin === false ? (
          ""
        ) : (
          <Route path="/EditProduct/:id" element={<EditProduct />} />
        )}

        {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin === false ? (
          ""
        ) : (
          <Route path="/AdminDetail/:id" element={<AdminDetail />} />
        )}

        {/* {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin === false ? (
          ""
        ) : (
          <Route path="/ModifyProducts" element={<ModifyProducts />} />
        )} */}
        {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin === false ? (
          ""
        ) : (
          <Route path="/AllUsers" element={<AllUsers />} />
        )}
        {isLoading || !userDetail ? (
          ""
        ) : !isAuthenticated ? (
          ""
        ) : userDetail.admin === false ? (
          ""
        ) : (
          <Route path="/UserDetail/:email" element={<UserDetail />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
