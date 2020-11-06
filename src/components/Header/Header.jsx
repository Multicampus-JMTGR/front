import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Auth } from "..";
import { signOut } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import "./Header.css";

const deployUrl = "/front";

const Header = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const userObj = useSelector((state) => state.auth.userObj);
  const onClickSignOut = () => {
    dispatch(signOut());
    localStorage.removeItem("userInfo");
  };

  return (
    <header className="header-container">
      <span className="app-title">
        <Link to="/">JMTGR </Link>
      </span>
      <Link to={`${deployUrl}/`}>Home</Link>
      <Link to={`${deployUrl}/calendar`}>Calendar</Link>
      <Link to={`${deployUrl}/detail`}>Detail</Link>
      {isSignedIn ? (
        <>
          <Link to={`${deployUrl}/mypage`}>My page</Link>
          <Avatar alt="User" src={userObj.profileObj.imageUrl} />
          <button className="sign-btn" onClick={onClickSignOut}>
            SignOut
          </button>
        </>
      ) : (
        <Auth />
      )}
    </header>
  );
};

export default Header;
