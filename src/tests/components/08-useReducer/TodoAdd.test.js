import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas en el componente <TodoAdd />", () => {
  const handleAdd = jest.fn();
  let wrapper = shallow(<TodoAdd handleAdd={handleAdd} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<TodoAdd handleAdd={handleAdd} />);
  });

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe enviarse el formulario", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAdd).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar a la funcion handleAdd", () => {
    const value = "Aprender Firebase";
    const input = wrapper.find("input");

    act(() => {
      input.simulate("change", {
        target: {
          value: value,
          name: "description",
        },
      });
    });

    const formSubmit = wrapper.find("form").prop("onSubmit");

    act(() => {
      formSubmit({ preventDefault() {} });
    });

    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAdd).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: value,
      done: false,
    });

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
