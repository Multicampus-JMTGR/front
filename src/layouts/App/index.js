import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../../actions";
import loadable from "@loadable/component";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";

const Home = loadable(() => import("../../pages/Home"));
const Detail = loadable(() => import("../../pages/Detail"));
const MyPage = loadable(() => import("../../pages/MyPage"));
const Calendar = loadable(() => import("../../pages/CalendarPage"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const onUserChange = () => {
      let userInfo = localStorage.userInfo;
      userInfo ? dispatch(signIn(JSON.parse(userInfo))) : dispatch(signOut());
    };
    onUserChange();
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/detail/:detail" component={Detail} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/mypage" component={MyPage} />
    </Switch>
  );
};
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userObj: state.auth.userObj,
  };
};

export default connect(mapStateToProps)(App);
