import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Profile } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { needSigningIn } from "../actions";

const MyPage = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    !isSignedIn && dispatch(needSigningIn());
  }, []);
  
  return (
    <>
      {!isSignedIn ? (
        <Redirect to="/" />
      ) : (
        <>
          <h1>Mypage</h1>
          <Link to="/">go to home</Link>
          <Profile />
        </>
      )}
    </>
  );
};

export default MyPage;
