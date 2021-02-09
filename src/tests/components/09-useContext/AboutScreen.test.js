import { mount } from "enzyme";
import AboutScreen from "../../../components/09-useContext/AboutScreen";
import UserContext from "../../../components/09-useContext/UserContext";

describe("Pruebas en el componente <AboutScreen />", () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <AboutScreen />
    </UserContext.Provider>
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamarse setUser con el argumento esperado", () => {
    wrapper.find("button").simulate("click");

    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith({});
  });
});
