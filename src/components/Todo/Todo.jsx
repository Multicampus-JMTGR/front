import React, { useState } from "react";
import "./Todo.css";
import { TextField, MenuItem } from "@material-ui/core";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTodoText(value);
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("submit :", todoText);
    }
  };
  return (
    <div className="todo-certificate-container">
      <span>Todo</span>

      <div className="todo-certificate-inner-container">
        <ul></ul>
      </div>
      <TextField
        label="Add todo"
        value={todoText}
        onChange={onChange}
        onKeyPress={onKeyPress}
        helperText="할 일 추가"
        style={{ width: "70%", margin: "2vh auto" }}
      />
    </div>
  );
};

export default Todo;
