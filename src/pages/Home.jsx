import React from "react";
import { Link } from "react-router-dom";
import { Auth } from "../components";
import { SearchForm } from "../components";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <p>
          <Link to="/detail">go to detail</Link>
        </p>
        <p>
          <Link to="/calendar">go to calendar</Link>
        </p>
      </div>
      <Auth />
      <SearchForm />
    </div>
  );
};

export default Home;
