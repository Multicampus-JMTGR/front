import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Profile } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { needSigningIn } from "../actions";

const MyPage = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    !isSignedIn && dispatch(needSigningIn());
  }, []);

  return <>{isSignedIn ? <Profile /> : <Redirect to="/" />}</>;
    // return <Profile />
};

export default MyPage;
