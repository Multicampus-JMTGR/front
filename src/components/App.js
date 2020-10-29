import React, { useState, useEffect } from "react";
import AppRouter from './Router';
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const onSignInSuccess = (res) =>{
    console.log(res.profileObj)
    setIsSignedIn(prev=>!prev)
  }
  return (
    <AppRouter 
      onSignInSuccess={onSignInSuccess}
      isSignedIn={isSignedIn}
    />
  );
};

export default App;
