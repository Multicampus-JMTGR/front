import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/Profile.css";
const Profile = ({ userObj, history }) => {
  return (
    <>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <div
        style={{ backgroundColor: "skyblue", width: "100vw", height: "100vh" }}
      >
        <p>My Profile</p>
        <p>{userObj.profileObj.name}</p>
        <img src={userObj.profileObj.imageUrl} alt="img" />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { userObj: state.auth.userObj };
};
export default connect(mapStateToProps)(Profile);
