import React from "react";
import { Link } from "react-router-dom";
import { Auth } from '../components';
const Home = () => {


  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/detail">go to detail</Link>
      <Auth />
    </div>
  );
};
export default Home;
