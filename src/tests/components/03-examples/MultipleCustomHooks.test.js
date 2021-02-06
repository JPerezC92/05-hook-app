import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import useCounter from "../../../hooks/useCounter";
import useFetch from "../../../hooks/useFetch";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 100000,
      increment: () => {},
      decrement: () => {},
      reset: () => {},
    });
  });

  test("Debe de mostrarse correctamente ", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar la informacion", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Philip",
          quote: "hola a todos, esto es un test",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-3").text().trim()).toBe(
      "hola a todos, esto es un test"
    );

    expect(wrapper.find("footer").text().trim()).toBe("Philip");
  });
});
