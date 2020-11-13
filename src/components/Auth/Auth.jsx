import React from "react";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import GoogleLogin from "react-google-login";
import { useSelector } from "react-redux";
import "reactjs-popup/dist/index.css";
import "./Auth.css";
// import GitHubLogin from "react-github-login";

const Auth = ({ onSignInSuccess }) => {
  const needSignIn = useSelector((state) => state.auth.needSignIn);

  return (
    <Popup
      open={needSignIn}
      trigger={<button className="sign-btn">Sign In</button>}
      position="center center"
      contentStyle={{
        borderRadius: ".3rem",
        width: "auto",
        padding: "1.3rem 3rem",
      }}
      modal
    >
      <div className="pop-up-app-title">JMTGR</div>
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
