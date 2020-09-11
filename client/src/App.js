import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
//import "./components/views/LoginPage/login-signup.css";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)}></Route>
          <Route exact path="/login" component={Auth(LoginPage, false)}></Route>
          <Route
            exact
            path="/register"
            component={Auth(RegisterPage, false)}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
//Auth 컴포넌트가 LandingPage 컴포넌트를 감싸고 있음.
//만약 adminuser만 허용하고 싶으면 세번째 인자로 true를 주면 됨.
