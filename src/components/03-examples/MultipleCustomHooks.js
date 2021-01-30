import React from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";
import "./examples.css";

const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary mx-1" onClick={() => decrement()}>
        Quote anterior
      </button>
      <button className="btn btn-primary mx-1" onClick={() => increment()}>
        Siguiente quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
