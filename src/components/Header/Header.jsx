import React from "react";
import { Link } from "react-router-dom";
import { Auth } from "..";
import { SearchForm } from "..";
import { Button } from "@material-ui/core";
import "../../css/App.css";
const deployUrl = "/front";
const Header = () => {
  return (
    <div className="home-background">
      <div className="header-container">
        <header>
          <Link to={`${deployUrl}/`}>
            <Button color="secondary">Home</Button>
          </Link>
          <Link to={`${deployUrl}/calendar`}>
            <Button color="secondary">Calendar</Button>
          </Link>
          <Link to={`${deployUrl}/detail`}>
            <Button color="secondary">Detail</Button>
          </Link>
          <Auth />
        </header>
      </div>
      <SearchForm />
    </div>
  );
};

export default Header;
