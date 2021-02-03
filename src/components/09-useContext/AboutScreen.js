import React, { useContext } from "react";
import UserContext from "./UserContext";

const AboutScreen = () => {
  const { setUser } = useContext(UserContext);

  const handleLogout = () => setUser({});

  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />

      <button className="btn btn-warning" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AboutScreen;
