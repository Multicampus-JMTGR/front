import React from "react";
import { connect } from "react-redux";
import "./Profile.css";
const Profile = ({ userObj }) => {
  return (
    <>
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
