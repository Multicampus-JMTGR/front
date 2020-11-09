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
import useSWR from "swr";
import fetcher from "../utils/fetcher";

const MyPage = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const userObj = useSelector((state) => state.auth.userObj);
  const { data: myData } = useSWR(
    `user/Detail/${userObj.profileObj.email}`,
    fetcher
  );
  const dispatch = useDispatch();

  useEffect(() => {
    !isSignedIn && dispatch(needSigningIn());
  }, []);

  return (
    <>
      {isSignedIn ? (
        <div className="mypage-container">
          <div className="mypage-container-upper">
            <Profile userObj={userObj} myData={myData} />
            <SmallCalendar />
          </div>
          <div className="mypage-container-downer">
            <FavoriteCertificate myData={myData} />
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
