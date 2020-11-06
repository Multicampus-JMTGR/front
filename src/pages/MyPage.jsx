import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {
  Profile,
  SmallCalendar,
  FavoriteCertificate,
  Todo,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { needSigningIn } from "../actions";
import "../layouts/App/App.css";
const MyPage = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    !isSignedIn && dispatch(needSigningIn());
  }, []);

  return (
    <>
      {isSignedIn ? (
        <div className="mypage-container">
          <div className="mypage-container-upper">
            <Profile />
            <SmallCalendar />
          </div>
          <div className="mypage-container-downer">
            <FavoriteCertificate />
            <Todo />
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
  // return <Profile />
};

export default MyPage;
