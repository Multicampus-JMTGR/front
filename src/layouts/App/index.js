import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "actions";
import loadable from "@loadable/component";
import { Switch, Route, Redirect } from "react-router";
import { connect } from "react-redux";
import { Header } from "components";
import "./App.css";

const Home = loadable(() => import("pages/Home"));
const Detail = loadable(() => import("pages/Detail"));
const MyPage = loadable(() => import("pages/MyPage"));
const SignUp = loadable(() => import("pages/SignUp"));
const CalendarPage = loadable(() => import("pages/CalendarPage"));
const deployUrl = "";

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
    <>
      <div className="app-container">
        <Header />
        <Switch>
          <>
            <Route exact path={`${deployUrl}/`} component={Home} />
            <Route exact path="/">
              <Redirect to={`${deployUrl}/`} />
            </Route>
            <Route path={`${deployUrl}/detail/:detail`} component={Detail} />
            <Route path={`${deployUrl}/calendar`} component={CalendarPage} />
            <Route path={`${deployUrl}/mypage`} component={MyPage} />
            <Route path={`${deployUrl}/signup`} component={SignUp} />
          </>
        </Switch>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userObj: state.auth.userObj,
  };
};

export default connect(mapStateToProps)(App);
