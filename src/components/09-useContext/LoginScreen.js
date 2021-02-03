import React, { useContext } from "react";
import UserContext from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const handleLogin = () =>
    setUser({
      id: 54654765,
      name: "Philip",
      email: "jpereaz@gmail.com",
    });

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
