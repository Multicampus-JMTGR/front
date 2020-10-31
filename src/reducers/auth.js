const auth = (state = { isSignedIn: false, userObj: null }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userObj: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userObj: action.payload };
    default:
      return state;
  }
};
export default auth;
