import React, { useCallback, useEffect, useState } from "react";
import ShowIncrement from "./ShowIncrement";

import "./useMemo.css";

const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => setCounter(counter + 1);

  const increment = useCallback(
    (num) => {
      setCounter((prevState) => prevState + num);
    },
    [setCounter]
  );

  useEffect(() => {
    // effect
  }, [increment]);

  return (
    <div>
      <h1>CallBackHook Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallBackHook;
