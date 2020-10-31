
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Popup from "reactjs-popup";
import { Auth } from "../components";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const Home = ({ onSignInSuccess, onSignOutSuccess, isSignedIn }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isSignedIn);

  useEffect(() => {
    setIsLoggedIn(isSignedIn);
    console.log("log : ", isLoggedIn);
    console.log("signed : ", isSignedIn);
  }, [isLoggedIn]);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to="/detail">go to detail</Link>
      </div>
      {!isSignedIn ? (
        <>
          <Link to="/login">Sign page</Link>
        </>
      ) : (
        <>
          {" "}
          <button onClick={onSignOutSuccess}>SignOut</button>
          <div>
            <Link to="/mypage">My page</Link>
          </div>
        </>
      )}
      {/* {!isLoggedIn ? (
        <Popup trigger={<button>SignIn</button>} position="bottom center" modal>
          <Auth onSignInSuccess={onSignInSuccess} isSignedIn={isSignedIn} />
        </Popup>
      ) : (
        <>
          <button onClick={onSignOutSuccess}>SignOut</button>
          <div>
            <Link to="/mypage">My page</Link>
          </div>
        </>
      )} */}
    </div>
  );
};
export default Home;
