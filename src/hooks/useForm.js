import { useState } from "react";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    // console.log(target.value);
    setValues({ ...values, [target.name]: target.value });
  };

  return [values, handleInputChange];
};

export default useForm;
