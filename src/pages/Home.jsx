import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { Auth } from '../components';
const Home = ({onSignInSuccess,isSignedIn}) => {


  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/detail">go to detail</Link>
      {isSignedIn ?
      <Popup trigger={<button>SignIn</button>} position='bottom center' modal>
        <Auth onSignInSuccess={onSignInSuccess} isSignedIn={isSignedIn}/>
      </Popup>:<Auth isSignedIn={isSignedIn}/>}
    </div>
  );
};
export default Home;
