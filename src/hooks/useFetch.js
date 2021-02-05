import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted.current) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch(() =>
        setState({
          data: null,
          loading: false,
          error: "No se pudo cargar la informacion",
        })
      );

    setState((prevState) => ({ ...prevState, loading: true }));
  }, [url]);

  return state;
};

export default useFetch;
