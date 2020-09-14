import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import Profile from "./components/views/Profile/Profile";
import course_board from "./components/views/course_board/course_board";

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
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/course_board" component={course_board}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
//Auth 컴포넌트가 LandingPage 컴포넌트를 감싸고 있음.
//만약 adminuser만 허용하고 싶으면 세번째 인자로 true를 주면 됨.
