import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { Auth } from "../components";
import { connect } from "react-redux";

const Home = ({ onSignInSuccess, onSignOutSuccess, isSignedIn }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to="/detail">go to detail</Link>
      </div>
      {isSignedIn ? (
        <>
          <button onClick={onSignOutSuccess}>SignOut</button>
          <div>
            <Link to="/mypage">My page</Link>
          </div>
        </>
      ) : (
        <Popup trigger={<button>SignIn</button>} position="bottom center" modal>
          <Auth onSignInSuccess={onSignInSuccess} isSignedIn={isSignedIn} />
        </Popup>
      )}
    </div>
  );
};
export default connect((state) => 
 ( { isSignedIn: state.loginReducer.isLoggedIn }
),null)(Home);
