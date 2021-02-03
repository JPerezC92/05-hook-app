import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import NavBar from "./NavBar";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Redirect to="./" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
