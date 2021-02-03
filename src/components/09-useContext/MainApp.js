import React from "react";
import AppRouter from "./AppRouter";
import UserContext from "./UserContext";

const MainApp = () => {
  const user = {
    id: 123145641,
    name: "Philip",
    email: "pj@gmail.com",
  };

  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
