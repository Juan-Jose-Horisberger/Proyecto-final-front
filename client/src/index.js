import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './Redux/Store/index';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
//import reportWebVitals from './reportWebVitals';


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