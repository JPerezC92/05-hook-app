import React from "react";
import useCounter from "../../hooks/useCounter";
import "./CounterApp.css";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>CounterWithCustomHook: {state}</h1>
      <hr />

      <button className="btn btn-primary mx-1" onClick={() => increment(5)}>
        +1
      </button>

      <button className="btn btn-warning mx-1" onClick={reset}>
        Reset
      </button>

      <button className="btn btn-primary mx-1" onClick={() => decrement(2.5)}>
        -1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
