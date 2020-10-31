import React from "react";
import { Link } from "react-router-dom";
import { Auth } from "../components";
import { BigCalendar } from '../components';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to="/detail">go to detail</Link>
      </div>
      <Auth />
      <BigCalendar/>
    </div>
  );
};

export default Home;
