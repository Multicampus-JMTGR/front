import React from "react";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import { signOut } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import LoginPopUp from "./LoginPopUp";
import { Button } from "@material-ui/core";
import "../../css/Auth.css";

const deployUrl = "/front";

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
          <Link to={`${deployUrl}/mypage`}>
            <Button color="secondary">My page</Button>
          </Link>
          <Button
            onClick={onClickSignOut}
            variant="contained"
            color="secondary"
          >
            SignOut
          </Button>
        </>
      ) : (
        <LoginPopUp />
      )}
    </>
  );
};

export default Auth;
