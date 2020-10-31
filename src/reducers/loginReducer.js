const loginReducer = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case "LOGINCHECK":
      return { ...state, isLoggedIn: true, userObj: action.payload };
    case "LOGOUTCHECK":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
export default loginReducer;
