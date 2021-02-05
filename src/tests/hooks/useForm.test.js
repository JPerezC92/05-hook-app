// import "@testing-library/react-hooks";
import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialState = {
    name: "Philip",
    email: "perez.c@gmail.com",
  };

  test("Debe mostrar valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialState));

    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialState);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe cambio el email", () => {
    const { result } = renderHook(() => useForm(initialState));

    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "email",
          value: "pcastro@gmail.com",
        },
      });
    });

    const [values] = result.current;

    expect(values).toEqual({
      ...initialState,
      email: "pcastro@gmail.com",
    });
  });

  test("Debe restablecer los valores al estado inicial", () => {
    const { result } = renderHook(() => useForm(initialState));

    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "email",
          value: "pcastro@gmail.com",
        },
      });

      reset();
    });
    const [values] = result.current;

    expect(values).toEqual(initialState);
  });
});
