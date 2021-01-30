import React, { useState } from "react";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";
import "./useRef.css";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>RealExampleRef</h1>

      {show && <MultipleCustomHooks />}

      <button
        className="btn btn-primary mt-4"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};

export default RealExampleRef;
