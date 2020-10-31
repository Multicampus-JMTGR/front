export const signIn = (userObj) => ({
  type: "SIGN_IN",
  payload: userObj,
});
export const signOut = () => ({
  type: "SIGN_OUT"
});
