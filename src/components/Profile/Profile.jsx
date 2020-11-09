import React from "react";
import "./Profile.css";

const Profile = ({ userObj, myData }) => {
  return (
    <>
      <div className="profile-card">
        <img
          className="big-avatar"
          src={userObj.profileObj.imageUrl}
          alt="img"
        />
        <div className="profile-card-info">
          <span className="profile-card-name">{userObj.profileObj.name}</span>
          <span className="profile-card-email">{userObj.profileObj.email}</span>
          <span>
            Big on :{" "}
            <span className="profile-card-favorite">{myData?.interest}</span>
            {/* {myData &&
              myData.interest.map((e, i) => (
                <>
                  <span className="profile-card-favorite">
                    {myData?.interest}
                  </span>
                  <span>myData.length !== i-1 ? 'and' : ''</span>
                </>
              ))} */}
          </span>
        </div>
      </div>
    </>
  );
};
export default Profile;
