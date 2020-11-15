import React, { useState, useEffect } from "react";
import "./Todo.css";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import fetcher from "utils/fetcher";
import useSWR from "swr";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [init, setInit] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const userObj = useSelector((state) => state.auth.userObj);
  const { data: fetchedTodoList, revalidate: revalidateTodo } = useSWR(
    `api/user/todolist/${userObj.profileObj.email}`,
    fetcher
  );

  useEffect(() => {
    // if (init) {
    if (fetchedTodoList) {
      setLoading(false);
      setTodoList(fetchedTodoList);
    } else {
      setLoading(true);
    }
    // setInit(false);
    // }
  }, [fetchedTodoList]);

  const onChange = (event) => {
    setError(false);
    const {
      target: { value },
    } = event;
    setTodoText(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      if (todoList.find((e) => e.contents === todoText) || todoText === "") {
        todoList.concat();
        setError(true);
        setErrorText(todoText);
      } else {
        let tempList = todoList.concat({ contents: todoText });
        setTodoList(tempList);
        axios
          .post("/api/user/todolist", {
            contents: todoText,
            cert_id: 1,
            email: userObj.profileObj.email,
          })
          .then((res) => {
            revalidateTodo();
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      }
      setTodoText("");
    }
  };

  const onChecked = (e) => {
    const {
      target: { id, value },
    } = e;
    let cont = id.split("-")[1];
    console.log(cont);
    // console.log(value);
    let idx = -1;
    todoList.forEach((e, i) => {
      if (e.contents === value) {
        idx = i;
      }
    });
    if (idx !== -1) {
      let tempList = todoList.concat();
      //   console.log(idx);
      tempList.splice(idx, 1);
      setTodoList(tempList);
      axios
        .delete(`/api/user/todolist?content=${cont}`)
        .then((res) => {
          revalidateTodo();
          //   setInit(true);
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="todo-certificate-container">
      <span className="todo-title">Todo</span>
      <div className="todo-certificate-inner-container">
        {!loading ? (
          <ul>
            <FormGroup>
              {todoList?.map((todo, index) => (
                <li key={`todo-${index}`} className="todo-certificate-list">
                  <FormControlLabel
                    className="todo-certificate-todo-text"
                    control={
                      <Checkbox
                        onChange={onChecked}
                        id={`checkbox-${todo.content}`}
                        value={todo.contents}
                        className="todo-checkbox"
                        checked={false}
                      />
                    }
                    label={<div>{todo.contents}</div>}
                  />
                </li>
              ))}
            </FormGroup>
          </ul>
        ) : (
          <CircularProgress color="secondary" style={{ marginLeft: "2vw" }} />
        )}
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
