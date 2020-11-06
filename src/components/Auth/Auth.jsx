import React from "react";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import GoogleLogin from "react-google-login";
// import GitHubLogin from "react-github-login";
import "reactjs-popup/dist/index.css";
import { signIn } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const needSignIn = useSelector((state) => state.auth.needSignIn);

  const onSignInSuccess = (res) => {
    dispatch(signIn(res));
    localStorage.setItem("userInfo", JSON.stringify(res));
  };
  return (
    <Popup
      open={needSignIn}
      trigger={<button className="sign-btn">Sign In</button>}
      position="bottom center"
      contentStyle={{ borderRadius: ".3rem" }}
      modal
    >
      <h1>Sign In Page</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_LOGIN_CLIENTID}
        onSuccess={onSignInSuccess}
        onFailure={() => console.log("error")}
        //   isSignedIn={true}
        //   autoLoad={true}
        cookiePolicy={"single_host_origin"}
      />
      {/* <GitHubLogin
        clientId={process.env.REACT_APP_GITHUB_LOGIN_CLIENTID}
        onSuccess={onSignInSuccess}
        valid={true}
        onFailure={() => console.log("error")}
      /> */}
    </Popup>
  );
};
export default Auth;
