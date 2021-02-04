import { act, renderHook } from "@testing-library/react-hooks";
import useCounter from "../../hooks/useCounter";

describe("Pruebas en el archivo useCounter", () => {
  test("Debe de retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("Debe msotrar el counter en 101", () => {
    const count = 101;
    const { result } = renderHook(() => useCounter(count));

    expect(result.current.counter).toBe(count);
  });

  test("Debe de aumentar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(101));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(102);
  });

  test("Debe de disminuir el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(99);
  });

  test("Debe de restablecer el counter en 100", () => {
    const { result } = renderHook(() => useCounter(101));
    const { decrement, reset } = result.current;

    act(() => {
      decrement();
      reset();
    });

    expect(result.current.counter).toBe(101);
  });
});
