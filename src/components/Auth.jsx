import React from "react";
import GoogleLogin from "react-google-login";
import GitHubLogin from "react-github-login";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { signIn, signOut } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  const onSignInSuccess = (res) => {
    dispatch(signIn(res.profileObj));
    localStorage.setItem("userInfo", JSON.stringify(res.profileObj));
  };

  const onClickSignOut = () => {
    dispatch(signOut());
    localStorage.removeItem("userInfo");
  };
  return (
    <>
      {isSignedIn ? (
        <>
          <button onClick={onClickSignOut}>SignOut</button>
          <div>
            <Link to="/mypage">My page</Link>
          </div>
        </>
      ) : (
        <Popup trigger={<button>SignIn</button>} position="bottom center" modal>
          <div
            style={{
              border: "solid",
              padding: "10vh",
              display: "flex",
              flexDirection: "column",
            }}
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
            <GitHubLogin
              clientId={process.env.REACT_APP_GITHUB_LOGIN_CLIENTID}
              onSuccess={onSignInSuccess}
              valid={true}
              onFailure={() => console.log("error")}
            />
          </div>
        </Popup>
      )}
    </>
  );
};

export default Auth;
