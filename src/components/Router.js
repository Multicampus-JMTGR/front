import React from "react";
import loadable from "@loadable/component";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";

const Home = loadable(() => import("../pages/Home"));
const Detail = loadable(() => import("../pages/Detail"));
const MyPage = loadable(() => import("../pages/MyPage"));
// const Login = loadable(() => import("../pages/Login"));

const Router = ({ isSignedIn, userObj }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
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
    isSignedIn: state.auth.isSignedIn,
    userObj: state.auth.userObj,
  };
};

export default connect(mapStateToProps)(Router);
