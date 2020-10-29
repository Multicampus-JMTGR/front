import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="zzid.us.auth0.com"
      clientId="LBh6mP5DW9Gn5K6s5ZUBFgiLytTcAhE4"
      redirectUri={window.location.origin}
      audience="https://zzid.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
