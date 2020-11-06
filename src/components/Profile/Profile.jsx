import React from "react";
import { connect } from "react-redux";
import "./Profile.css";
const Profile = ({ userObj }) => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-card">
          <img
            className="big-avatar"
            src={userObj.profileObj.imageUrl}
            alt="img"
          />
          <div className="profile-card-info">
            <span className="profile-card-name">{userObj.profileObj.name}</span>
            <span className="profile-card-email">
              {userObj.profileObj.email}
            </span>
            <span>
              Big on :{" "}
              <span className="profile-card-favorite">
                {"something, and something"}{" "}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { userObj: state.auth.userObj };
};
export default connect(mapStateToProps)(Profile);
