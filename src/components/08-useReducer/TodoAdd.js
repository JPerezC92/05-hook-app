import React from "react";
import useForm from "../../hooks/useForm";
import PropTypes from "prop-types";

const TodoAdd = ({ handleAdd }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }

    handleAdd({
      id: new Date().getTime(),
      description: description,
      done: false,
    });
    reset();
  };

  return (
    <>
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
    </>
  );
};

TodoAdd.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default TodoAdd;
