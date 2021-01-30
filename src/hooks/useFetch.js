import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setState({ data, loading: false, error: null }));

    setState((prevState) => ({ ...prevState, loading: true }));
  }, [url]);

  return state;
};

export default useFetch;
