import React, { useState, useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);
};

const Auth = ({ onSignInSuccess, isSignedIn }) => {
  return (
    <>
      {isSignedIn ? (
        <div style={{ border: "solid", padding: "10vh" }}>
          <h1>Sign In Page</h1>
          <GoogleLogin
            clientId="429317503516-n2vc5gga0noauela0l2rb26c9vun3e80.apps.googleusercontent.com"
            onSuccess={onSignInSuccess}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        <GoogleLogout
          clientId="429317503516-n2vc5gga0noauela0l2rb26c9vun3e80.apps.googleusercontent.com"
          onLogoutSuccess={() => console.log("success")} // sign out success func from App
          onFailure={() => console.log("fail")}
        />
      )}
    </>
  );
};
export default Auth;
