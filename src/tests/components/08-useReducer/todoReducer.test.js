import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos, newTodo } from "../../Fixtures/demoTodos";

describe("Pruebas en el archivo todoReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("Debe de agregar un todo", () => {
    const state = todoReducer(demoTodos, { type: "ADD", payload: newTodo });
    expect(state).toEqual([...demoTodos, newTodo]);
    expect(state.length).toBe(3);
  });
});
