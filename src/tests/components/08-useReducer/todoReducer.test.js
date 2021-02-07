import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos, newTodo } from "../../Fixtures/demoTodos";

describe("Pruebas en el archivo todoReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("Debe de agregar un TODO", () => {
    const state = todoReducer(demoTodos, { type: "ADD", payload: newTodo });
    expect(state).toEqual([...demoTodos, newTodo]);
    expect(state.length).toBe(3);
  });

  test("Debe de borrar un TODO", () => {
    const state = todoReducer(demoTodos, { type: "DELETE", payload: 2 });

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });

  test("Debe de cambiar un TODO", () => {
    const state = todoReducer(demoTodos, { type: "TOGGLE", payload: 1 });
    expect(state[1]).toEqual(demoTodos[1]);
    expect(state[0].done).toBe(true);
  });
});
