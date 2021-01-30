import React, { useEffect } from "react";
import useForm from "../../hooks/useForm";
import "./effects.css";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(formValues);
  };

  useEffect(() => {
    console.log(`cambio el email`);
  }, [email]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="**********"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        enviar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
