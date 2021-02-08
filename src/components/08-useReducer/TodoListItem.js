import React from "react";
import PropTypes from "prop-types";

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

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  i: PropTypes.number.isRequired,
  handleToggle: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default TodoListItem;
