import { shallow } from "enzyme";
import TodoList from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../Fixtures/demoTodos";

describe("Pruebas en el componente <TodoList />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );
  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener 2 <TodoListItem />", () => {
    const TodoListItem = wrapper.find("Memo()").at(0);

    expect(wrapper.find("Memo()").length).toBe(demoTodos.length);
    expect(TodoListItem.prop("handleDelete")).toEqual(expect.any(Function));
    expect(TodoListItem.prop("handleToggle")).toEqual(expect.any(Function));
  });
});
