import React, { useState } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  const [{ counter1, counter2 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  });

  return (
    <>
      <h1>CounterApp</h1>
      <p>Counter1 {counter1}</p>
      <p>Counter2 {counter2}</p>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => {
          setCounter((state) => ({ ...state, counter2: counter2 + 1 }));
        }}
      >
        +1
      </button>
    </>
  );
};

export default CounterApp;
