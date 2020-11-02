import React from "react";
import { connect } from "react-redux";
const Profile = ({ userObj }) => {
  return (
    <div>
      <p>My Profile</p>
      <p>{userObj.profileObj.name}</p>
      <img src={userObj.profileObj.imageUrl} alt="img" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return { userObj: state.auth.userObj };
};
export default connect(mapStateToProps)(Profile);
