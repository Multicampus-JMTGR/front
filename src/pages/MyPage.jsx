import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {
  Profile,
  SmallCalendar,
  FavoriteCertificate,
  Todo,
  Loading,
} from "components";
import { useSelector, useDispatch } from "react-redux";
import { needSigningIn } from "actions";
import "layouts/App/App.css";
import useSWR from "swr";
import fetcher from "utils/fetcher";
const MyPage = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const userObj = useSelector((state) => state.auth.userObj);
  const { data: myData } = useSWR(
    userObj && `/api/user/${userObj.profileObj.email}`,
    fetcher
  );
  const { data: myLikeData, revalidate: revalidateLikes } = useSWR(
    userObj && `/api/user/likes/${userObj.profileObj.email}`,
    fetcher
  );
  useEffect(() => {
    if (!isSignedIn) {
      dispatch(needSigningIn());
      <Redirect to="/" />;
    }
    // console.log(myData);
  }, []);

  return (
    <>
      {isSignedIn ? (
        myData ? (
          <div className="mypage-container">
            <div className="mypage-container-upper">
              <Profile userObj={userObj} myData={myData} />
              <SmallCalendar myData={myData} myLikeData={myLikeData} />
            </div>
            <div className="mypage-container-downer">
              <FavoriteCertificate
                myData={myData}
                myLikeData={myLikeData}
                revalidateLikes={revalidateLikes}
              />
              <Todo />
            </div>
          </div>
        ) : (
          <Loading />
        )
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default MyPage;
