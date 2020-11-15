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
import { Loading } from "components";
const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [checkedTodo, setCheckedTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const userObj = useSelector((state) => state.auth.userObj);
  const { data: fetchedTodoList, revalidate: revalidateTodo } = useSWR(
    `api/user/todolist/${1}/${userObj.profileObj.email}`,
    fetcher
  );
  useEffect(() => {
    if (fetchedTodoList) {
      setLoading(false);
      setTodoList(fetchedTodoList);
    } else {
      setLoading(true);
    }
  }, []);
  const onChange = (event) => {
    setError(false);
    const {
      target: { value },
    } = event;
    setTodoText(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      if (todoList.find((e) => e === todoText)) {
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
            setLoading(false);
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
    setLoading(true);

    const {
      target: { id, value },
    } = e;
    let cont = id.split("-")[1];
    console.log(value);
    let idx = todoList.indexOf(value),
      tempList = todoList.concat();
    tempList.splice(idx, 1);
    setTodoList(tempList);
    axios
      .delete(`/api/user/todolist?content=${cont}`)
      .then((res) => {
        setLoading(false);
        revalidateTodo();
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="todo-certificate-container">
      <span className="todo-title">Todo</span>
      {/* {console.log(fetchedTodoList)} */}
      {!loading ? (
        <div className="todo-certificate-inner-container">
          <ul>
            <FormGroup>
              {fetchedTodoList?.map((todo, index) => (
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
        </div>
      ) : (
        <Loading />
      )}
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
