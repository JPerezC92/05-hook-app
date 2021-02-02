import React from "react";

const TodoListItem = React.memo(
  ({ id, description, done, i, handleToggle, handleDelete }) => {
    return (
      <li className="list-group-item">
        <p
          className={`${done && "complete"}`}
          onClick={() => {
            handleToggle(id);
          }}
        >
          {done ? "✔" : "❌"} {i + 1}. {description}
        </p>

        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Borrar
        </button>
      </li>
    );
  }
);

export default TodoListItem;
