import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/index";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || "https://proyecto-final-back-ymep.onrender.com";

ReactDOM.render(
  <>
    <Auth0Provider
      domain="dev-uf2dd5td.us.auth0.com"
      clientId="WPq9OSqZeazngvwi08b1OmFOkR902CxI"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
