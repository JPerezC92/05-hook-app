import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../Fixtures/demoTodos";

describe("Pruebas en el componente <TodoApp />", () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("TodoAdd").prop("handleAdd")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("handleAdd")(demoTodos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("TodoApp (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("Debe de eliminar un TODO", () => {
    wrapper.find("TodoAdd").prop("handleAdd")(demoTodos[0]);
    wrapper.find("TodoAdd").prop("handleAdd")(demoTodos[1]);
    wrapper.find("TodoList").prop("handleDelete")(demoTodos[1].id);

    expect(wrapper.find("h1").text().trim()).toBe("TodoApp (1)");
  });
});
