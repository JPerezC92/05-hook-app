import React, { useReducer } from "react";
import "./style.css";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Aprender React",
    done: false,
  },
];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  // console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`nueva tarea`);

    const newTodo = {
      id: new Date().getTime(),
      description: "Aprender Angular",
      done: false,
    };

    const action = {
      type: "ADD",
      payload: newTodo,
    };

    dispatch(action);
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map(({ id, description, done }, i) => (
              <li className="list-group-item" key={id}>
                <p className="text-center">
                  {done ? "✔" : "❌"} {i + 1}. {description}
                </p>

                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <form className="d-grid gap-2" onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              className="form-control"
              name="description"
              placeholder="aprender..."
              type="text"
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
