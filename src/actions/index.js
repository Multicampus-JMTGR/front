export const signIn = (userObj) => ({
  type: "SIGN_IN",
  payload: userObj,
});
export const needSigningIn = () => ({
  type: "NEED_SIGN_IN",
});
export const signOut = () => ({
  type: "SIGN_OUT",
});
export const needSigningUp = () => ({
  type: "NEED_SIGN_UP",
});
export const completeSigningUp = () => ({
  type: "COMPLETE_SIGN_UP",
});
