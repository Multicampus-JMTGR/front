import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { loginCheck, logOutClickEvent } from "../actions";

const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);
};

const Auth = () => {
 const dispatch = useDispatch();

  const onSignInSuccess = (res) => {
    dispatch(loginCheck(res.profileObj));
    localStorage.setItem("userInfo", JSON.stringify(res.profileObj));
  };
  return (
    <>
      <div style={{ border: "solid", padding: "10vh" }}>
        <h1>Sign In Page</h1>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_LOGIN_CLIENTID}
          onSuccess={onSignInSuccess}
          onFailure={responseGoogle}
        //   isSignedIn={true}
        //   autoLoad={true}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </>
  );
};
export default Auth;
