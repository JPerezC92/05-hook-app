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
  const [state] = useReducer(todoReducer, initialState);
  console.log(state);
  return (
    <div>
      <h1>TodoApp</h1>
      <hr />
      <ul>
        <li>Hola</li>
        <li>Mundo</li>
        <li>Hola de nuevo</li>
      </ul>
    </div>
  );
};

export default TodoApp;
