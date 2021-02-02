import React, { useEffect, useReducer } from "react";
import useForm from "../../hooks/useForm";
import "./style.css";
import TodoList from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = (initialState) => {
  return JSON.parse(localStorage.getItem("todos")) || initialState;
};

const initialState = [];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    dispatch({
      type: "ADD",
      payload: {
        id: new Date().getTime(),
        description: description,
        done: false,
      },
    });

    reset();
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
          <h4>Agregar TODO</h4>
          <hr />

          <form className="d-grid gap-2" onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              className="form-control"
              name="description"
              onChange={handleInputChange}
              placeholder="aprender..."
              type="text"
              value={description}
            />

            <button className="btn btn-outline-primary mt-1" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
