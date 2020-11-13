const auth = (
  state = {
    isSignedIn: false,
    userObj: null,
    needSignIn: false,
    needSingUp: false,
  },
  action
) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userObj: action.payload };
    case "SIGN_OUT":
      return {
        ...state,
        isSignedIn: false,
        needSignIn: false,
        userObj: action.payload,
      };
    case "NEED_SIGN_IN":
      return { ...state, needSignIn: true };
    case "NEED_SIGN_UP":
      return { ...state, needSignUp: true };
    case "COMPLETE_SIGN_UP":
      return { ...state, needSignUp: false };
    default:
      return state;
  }
};
export default auth;
