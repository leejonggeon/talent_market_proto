import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_action/user_action";
import { withRouter } from "react-router-dom";
import "../../css/styles.css";
import { Link } from "react-router-dom";
import StatusBar from "../StatusBar/StatusBar";
function LoginPage(props) {
  const dispatch = useDispatch();

  //state 만들기
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //아래 함수를 선언해주지 않으면 이메일, 패스워드를 입력할 수 없음..
  //state에서 불러와서 똑같이 입력하는 방식.
  //그런데 onChange 속성이 무엇이길래..?
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPassWordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    //서버에 보낼 값을 state에 가지고 있는 상태.

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        //로그인이 성공을 하면
        
        props.history.push("/");
        //루트 page (landing page)로 보낸다.
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div>
      <StatusBar />

      <header className="welcome-header">
        <h1 className="welcome-header__title">
          블록핑크에 오신 걸 환영합니다.
        </h1>
        <p className="welcome-header__text">
          블록핑크 계정이 있으시다면, 이메일 계정을 이용해 로그인 해주세요.
        </p>
      </header>
      <form
        className="login-signup_form"
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>

        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPassWordHandler} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
