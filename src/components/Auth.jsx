import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router";

const responseGoogle = (response) => {
  console.log(response);
};

const Auth = () => {
  return (
    <>
      <GoogleLogin
        clientId="429317503516-n2vc5gga0noauela0l2rb26c9vun3e80.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"none"}
        scope={'fetch_basic_profile'}
      />
    </>
  );
};
export default Auth;
