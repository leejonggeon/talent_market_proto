import React, { useState } from "react";
import "../../css/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";


function StatusBar(props) {
  const [Login_flag, setLogin_flag] = useState(true);
  //Login_flag 0 : 로그아웃 1 : 로그인
  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        setLogin_flag(false);
        props.history.push("/login");
      } else {
        alert("로그아웃 실패");
      }
    });
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-inverse navbar-fixed-top navbar-inverse-e66060 nav-bar-edit mgothic">
          <div className="container" id="nav_container">
            <div className="status-bar">
              <div className="status-bar__column">
                <div className="status-bar__title">
                  <i className="fas fa-cube"></i>
                  <span className="status-bar__name">
                    <Link className="link" to="/">
                      BLOCKPINK
                    </Link>
                  </span>
                </div>
              </div>
              <div className="status-bar__column">
                <div className="status-bar__button login">
                  <Link className="link" to="/login">
                    로그인
                  </Link>
                  {/* {Login_flag ? (
                    //로그인 되어 있으면
                    <a onClick={onClickHandler}>로그아웃</a>
                  ) : (
                    <Link className="link" to="/login">
                      로그인
                    </Link>
                  )} */}
                  {/* <a onClick={onClickHandler}>로그인</a> */}
                </div>
                <div className="status-bar__button signup">
                  <Link className="link" to="/register">
                    회원가입
                  </Link>
                </div>
                <div className="status-bar__button profile">
                  <a href="profile"> 나의 프로필</a>
                </div>
                <div className="status-bar__button course_board">
                  <a href="course_board"> 게시판</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default StatusBar;
