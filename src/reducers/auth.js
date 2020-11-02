const auth = (
  state = { isSignedIn: false, userObj: null, needSignIn: false },
  action
) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userObj: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, needSignIn: false, userObj: action.payload };
    case "NEED_SIGN_IN":
      return { ...state, needSignIn: true };
    default:
      return state;
  }
};
export default auth;
