import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../../actions";
import loadable from "@loadable/component";
import { Link } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import { connect } from "react-redux";
import { Auth, SearchForm } from "../../components";
import { Button } from "@material-ui/core";
import "../../css/App.css";

const Home = loadable(() => import("../../pages/Home"));
const Detail = loadable(() => import("../../pages/Detail"));
const MyPage = loadable(() => import("../../pages/MyPage"));
const Calendar = loadable(() => import("../../pages/CalendarPage"));
const deployUrl = "/front";

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
    <div className="app-container">
      <Switch>
        <Route exact path="/">
          <Redirect to={`${deployUrl}/`} />
        </Route>
        <Route exact path={`${deployUrl}/`}>
          <Home />
        </Route>
        <Route path={`${deployUrl}/detail/:detail`} component={Detail} />
        <Route path={`${deployUrl}/calendar`} component={Calendar} />
        <Route path={`${deployUrl}/mypage`} component={MyPage} />
      </Switch>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userObj: state.auth.userObj,
  };
};

export default connect(mapStateToProps)(App);
