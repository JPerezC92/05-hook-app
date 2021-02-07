import { shallow } from "enzyme";
import RealExampleRef from "../../../components/04-useRef/RealExampleRef";

describe("Pruebas en el componente <RealExampleRef />", () => {
  const wrapper = shallow(<RealExampleRef />);

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("Debe de mostrar el elemento <MultipleCustomHooks />", () => {
    wrapper.find("button").at(0).simulate("click");

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
