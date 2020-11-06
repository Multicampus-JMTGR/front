import React from "react";
import data from "../../data/testData.json";
import "./Todo.css";
const testSet = data.testSet;

const Todo = () => {
  return (
    <div className="todo-certificate-container">
      <div className="todo-certificate-inner-container">
        <ul>
          {testSet.map(
            (ts) =>
              ts.isLike && <li className="todo-certificate-list">{ts.title}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
