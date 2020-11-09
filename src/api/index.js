import React from "react";
import axios from "axios";

export const testAPI = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  // await axios
  //   .post(
  //     `${baseUrl}/login`,
  //     localStorage.getItem("userInfo"), // should change
  //     { withCredentials: true }
  //   )
  //   .then((response) => console.log(response));
  try {
    const res = await axios.get("category");
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const fetchUserDate = async (userEmail) => {
  try {
    const res = await axios.get(`user/Detail/${userEmail}`);
    return res;
  } catch (e) {
    console.log(e);
  }
};
