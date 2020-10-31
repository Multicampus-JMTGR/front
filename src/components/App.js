import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "./Router";
import { signIn, signOut } from "../actions";

const App = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const userObj = useSelector((state) => state.auth.userObj);

  useEffect(() => {
    const onUserChange = () => {
      let userInfo = localStorage.userInfo;
      userInfo
        ? dispatch(signIn(JSON.parse(userInfo)))
        : dispatch(signOut());
    };
    onUserChange();
  }, []);

  return (
    <AppRouter
      isSignedIn={isSignedIn}
      userObj={userObj}
    />
  );
};

export default App;
