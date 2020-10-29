import React from "react";
import loadable from "@loadable/component";
import { Switch, Route } from "react-router";

const Home = loadable(() => import("../pages/Home"));
const Detail = loadable(() => import("../pages/Detail"));
const MyPage = loadable(() => import("../pages/MyPage"));
//   "homepage": "https://multicampus-jmtgr.github.io/front"

const Router = ({onSignInSuccess,isSignedIn}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home onSignInSuccess={onSignInSuccess} isSignedIn={isSignedIn}/>
      </Route>
      <Route path="/detail" component={Detail} />
      {isSignedIn && <Route path="/mypage" component={MyPage} />}
    </Switch>
  );
};

export default Router;
