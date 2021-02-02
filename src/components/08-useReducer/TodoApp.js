import React, { useEffect, useReducer } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { todoReducer } from "./todoReducer";
import "./style.css";

const init = (initialState) => {
  return JSON.parse(localStorage.getItem("todos")) || initialState;
};

const initialState = [];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const handleAdd = (newTodo) => {
    dispatch({
      type: "ADD",
      payload: newTodo,
    });
  };

  const handleDelete = (id) =>
    dispatch({
      type: "DELETE",
      payload: id,
    });

  const handleToggle = (id) => dispatch({ type: "TOGGLE", payload: id });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>

        <div className="col-5">
          <TodoAdd handleAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
