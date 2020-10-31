import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Redirect } from "react-router";
import AppRouter from "./Router";
import { loginCheck, logOutClickEvent } from "../actions";

const App = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.loginReducer.isLoggedIn);
  const userObj = useSelector((state) => state.loginReducer.userObj);
  // const [isSignedIn, setIsSignedIn] = useState(false);
  // const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    const onUserChange = () => {
      let userInfo = localStorage.userInfo;
      userInfo
        ? dispatch(loginCheck(JSON.parse(userInfo)))
        : dispatch(logOutClickEvent());
    };
    onUserChange();
  }, []);

  const onSignOutSuccess = (res) => {
    dispatch(logOutClickEvent());
    localStorage.removeItem("userInfo");
  };
  return (
    <AppRouter
      onSignOutSuccess={onSignOutSuccess}
      isSignedIn={isSignedIn}
      userObj={userObj}
    />
  );
};

export default App;
