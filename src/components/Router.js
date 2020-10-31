import React from "react";
import loadable from "@loadable/component";
import { Switch, Route } from "react-router";
import { connect } from 'react-redux';

const Home = loadable(() => import("../pages/Home"));
const Detail = loadable(() => import("../pages/Detail"));
const MyPage = loadable(() => import("../pages/MyPage"));
const Login = loadable(() => import("../pages/Login"));

//   "homepage": "https://multicampus-jmtgr.github.io/front"

const Router = ({ onSignInSuccess, onSignOutSuccess, isSignedIn, userObj }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home
          onSignOutSuccess={onSignOutSuccess}
        />
      </Route>
      <Route path="/detail" component={Detail} />
      {isSignedIn && (
        <Route path="/mypage">
          <MyPage userObj={userObj} />
        </Route>
      )}
    </Switch>
  );
};
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.loginReducer.isLoggedIn,
    userObj: state.loginReducer.userObj,
  };
};

export default connect(mapStateToProps)(Router);
