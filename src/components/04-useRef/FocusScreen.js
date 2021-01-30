import React, { useRef } from "react";
import "./useRef.css";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();

    console.log(inputRef);
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input
        className="form-control"
        placeholder="Su nombre"
        ref={inputRef}
        type="text"
      />

      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};

export default FocusScreen;
