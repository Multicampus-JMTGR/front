import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const MyPage = ({ userObj }) => {
  return (
    <>
      <div>
        <h1>Mypage</h1>
        <h1>{userObj.name}</h1>
        <img src={userObj.imageUrl} alt="img" />
      </div>
      <Link to="/">go to home</Link>
    </>
  );
};
const mapStateToProps = (state) => {
  return { userObj: state.auth.userObj };
};
export default connect(mapStateToProps)(MyPage);
