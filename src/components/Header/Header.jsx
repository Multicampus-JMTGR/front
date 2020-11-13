import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Auth } from "..";
import { signOut } from "actions";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { signIn, needSigningUp } from "actions";
import { PopUpLoading } from "components";
import axios from "axios";
import "./Header.css";

const deployUrl = "";

const Header = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  //   const needSignup = useSelector((state) => state.auth.needSignup);

  const userObj = useSelector((state) => state.auth.userObj);
  const [loading, setLoading] = useState(false);
  const [needSignUp, setNeedSignUp] = useState(false);
  useEffect(() => {
    if (needSignUp) return <Redirect to={`${deployUrl}/signup`} />;
  }, [needSignUp]);
  const onClickSignOut = () => {
    dispatch(signOut());
    localStorage.removeItem("userInfo");
    sessionStorage.clear();
  };

  const onSignInSuccess = async (res) => {
    setLoading(true);
    dispatch(signIn(res));
    localStorage.setItem("userInfo", JSON.stringify(res));
    try {
      const userData = await axios.get(`/api/user/${res.profileObj.email}`);
      setLoading(false);
      return userData;
    } catch (error) {
      dispatch(needSigningUp());
      setLoading(false);
      setNeedSignUp(true);
    }
  };

  if (loading) return <PopUpLoading isLoading={true} />;

  return (
    <>
      {needSignUp && <Redirect to={`${deployUrl}/signup`} />}
      <header className="header-container">
        <span className="app-title">
          <Link to={`${deployUrl}/`}>JMTGR </Link>
        </span>
        <Link to={`${deployUrl}/`}>Home</Link>
        <Link to={`${deployUrl}/calendar`}>Calendar</Link>
        {isSignedIn ? (
          <>
            <Link to={`${deployUrl}/mypage`}>My page</Link>
            <Avatar alt="User" src={userObj.profileObj.imageUrl} />
            <button className="sign-btn" onClick={onClickSignOut}>
              SignOut
            </button>
          </>
        ) : (
          <Auth onSignInSuccess={onSignInSuccess} />
        )}
      </header>
    </>
  );
};

export default Header;
