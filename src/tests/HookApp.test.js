import { shallow } from "enzyme";
import HookApp from "../HookApp";

describe("Pruebas en <HookApp />", () => {
  test("Debe de compararse correctamente con la imagen", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
