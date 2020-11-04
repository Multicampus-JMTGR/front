import React from "react";
import axios from "axios";

export const test = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  await axios
    .post(
      `baseUrl/login`,
      localStorage.getItem("userInfo"), // should change
      { withCredentials: true }
    )
    .then((response) => console.log(response));
};
