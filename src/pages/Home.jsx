import React from "react";
import { useSelector } from "react-redux";
import { SearchForm } from "../components";


const Home = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  return (
    <div>
      {isSignedIn ? (
        <>
          <SearchForm />
          {/* <div>This will be homepage for login user</div> */}
        </>
      ) : (
        <SearchForm />
      )}
    </div>
  );
};

export default Home;
