import React, { useState, useEffect } from "react";
import axios from "axios";
import { completeSigningUp } from "actions";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { TextField, MenuItem } from "@material-ui/core";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import "layouts/App/App.css";
const SignUp = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [done, setDone] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const { data: catData } = useSWR(`/api/category`, fetcher);

  useEffect(() => {
    if (phoneNumber !== "" && selectedCategory !== "") setInvalidInput(false);
  }, [phoneNumber, selectedCategory]);
  const onCategoryChanged = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCategory(value);
  };

  const onPhoneNumber = (event) => {
    const {
      target: { value },
    } = event;
    setPhoneNumber(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (selectedCategory === "" || phoneNumber === "") setInvalidInput(true);
    else {
      axios
        .post(`/api/user`, {
          email: userInfo.profileObj.email,
          interest: selectedCategory,
          name: userInfo.profileObj.name,
          phone_number: phoneNumber,
        })
        .then((res) => {
          dispatch(completeSigningUp());
          setDone(true);
          console.log(res);
        })
        .catch((e) => {
          setDone(true);
          console.log(e);
        });
    }
  };

  if (done) {
    alert("Done!");
    return <Redirect to="/" />;
  }
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
        className="signup-inner-container"
      >
        <div>
          <TextField
            id="standard-select-currency"
            select
            label="관심 분야"
            value={selectedCategory}
            onChange={onCategoryChanged}
            helperText="관심 분야 선택"
            style={{ width: "20vw", margin: "3vw" }}
          >
            {catData?.map((option, index) => (
              <MenuItem key={`option-${index}`} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="형식 : 010-****-****"
            value={phoneNumber}
            onChange={onPhoneNumber}
            style={{ width: "20vw", margin: "3vw" }}
          />
        </div>
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
      {invalidInput && (
        <span style={{ color: "red" }}>INVALID INPUT! 다시 입력하세요</span>
      )}
    </div>
  );
};
export default SignUp;
