import React, { useState } from "react";
import "./Todo.css";
import { TextField, MenuItem } from "@material-ui/core";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [checkedTodo, setCheckedTodo] = useState("");

  const onChange = (event) => {
    setError(false);
    const {
      target: { value },
    } = event;
    setTodoText(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      if (todoList.find((e) => e === todoText)) {
        todoList.concat();
        setError(true);
        setErrorText(todoText);
      } else {
        let tempList = todoList.concat(todoText);
        setTodoList(tempList);
      }
      setTodoText("");
    }
  };
  const onChecked = (e) => {
    const {
      target: { value },
    } = e;
    let idx = todoList.indexOf(value),
      tempList = todoList.concat();
    tempList.splice(idx, 1);
    setTodoList(tempList);
  };
  return (
    <div className="todo-certificate-container">
      <span className="todo-title">Todo</span>
      <div className="todo-certificate-inner-container">
        <ul>
          <FormGroup>
            {todoList.map((todo, index) => (
              <li key={`todo-${index}`} className="todo-certificate-list">
                <FormControlLabel
                  className="todo-certificate-todo-text"
                  control={
                    <Checkbox
                      onChange={onChecked}
                      value={todo}
                      className="todo-checkbox"
                    />
                  }
                  label={<div>{todo}</div>}
                />
              </li>
            ))}
          </FormGroup>
        </ul>
      </div>
      {error && (
        <span
          className="todo-title"
          style={{ fontSize: "1rem", paddingLeft: "5vw" }}
        >
          {errorText}는 이미 있는 내용입니다!
        </span>
      )}
      <TextField
        label="Add todo"
        value={todoText}
        onChange={onChange}
        onKeyPress={onKeyPress}
        helperText="작성 후 엔터"
        style={{ width: "70%", margin: "2vh auto" }}
      />
    </div>
  );
};

export default Todo;
