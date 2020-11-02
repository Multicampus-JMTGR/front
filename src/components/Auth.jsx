import React from "react";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import { signOut } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import LoginPopUp from "./LoginPopUp";

const Auth = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  const onClickSignOut = () => {
    dispatch(signOut());
    localStorage.removeItem("userInfo");
  };

  return (
    <>
      {isSignedIn ? (
        <>
          <Link to="/mypage">My page</Link>
          <button onClick={onClickSignOut}>SignOut</button>
        </>
      ) : (
        <LoginPopUp />
      )}
    </>
  );
};

export default Auth;
