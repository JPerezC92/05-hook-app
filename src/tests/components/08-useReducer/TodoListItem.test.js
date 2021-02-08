import { shallow } from "enzyme";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../Fixtures/demoTodos";

describe("Pruebas en el componente <TodoListItem />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      {...demoTodos[0]}
      i={0}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(handleToggle).not.toHaveBeenCalled();
    expect(handleDelete).not.toHaveBeenCalled();
  });

  test("Debe de llamar a la funcion handleDelete", () => {
    const button = wrapper.find("button");
    button.simulate("click");

    expect(handleToggle).not.toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  test("Debe de llamar a la funcion handleToggle", () => {
    const parrafo = wrapper.find("p");
    parrafo.simulate("click");

    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  test("Debe de mostrar el texto correctamente", () => {
    const parrafo = wrapper.find("p");

    expect(parrafo.text().trim()).toBe(`❌ 1. ${demoTodos[0].description}`);
  });

  test("Debe de tener la clase complete si el done=true", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoListItem {...todo} i={0} />);
    const parrafo = wrapper.find("p");

    expect(parrafo.hasClass("complete")).toBe(true);
    expect(parrafo.text()).toBe("✔ 1. Aprender React");
  });
});
