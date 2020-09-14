import React, { useState, useEffect } from "react";
import "../../css/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { auth } from "../../../_action/user_action";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
function StatusBar(props) {
  const dispatch = useDispatch();
  const [Login_flag, setLogin_flag] = useState(true);
  useEffect(() => {
    //백엔드에서 가져온 정보가 response에 들어 있음.
    dispatch(auth()).then((response) => {
      //console.log(response);

      //로그인 하지 않은 상태
      if (!response.payload.isAuth) {
        setLogin_flag(false);
      } else {
        //로그인한 상태
        setLogin_flag(true);
      }
    });
  }, []);

  //Login_flag 0 : 로그아웃 1 : 로그인
  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        //setLogin_flag(false);
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
                  {/* <Link className="link" to="/login">
                    로그인
                  </Link> */}
                  {Login_flag ? (
                    //로그인 되어 있으면
                    <a onClick={onClickHandler}>로그아웃</a>
                  ) : (
                    <Link className="link" to="/login">
                      로그인
                    </Link>
                  )}
                  {/* <a onClick={onClickHandler}>로그인</a> */}
                </div>
                <div className="status-bar__button signup">
                  <Link className="link" to="/register">
                    회원가입
                  </Link>
                </div>
                <div className="status-bar__button profile">
                  <a href="profile.html"> 나의 프로필</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default withRouter(StatusBar);
