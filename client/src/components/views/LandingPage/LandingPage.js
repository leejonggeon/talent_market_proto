import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import StatusBar from "../StatusBar/StatusBar";
import "../../css/styles.css";
function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
  }, []);

  const onclickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 실패");
      }
    });
  };

  return (
    <div>
      <StatusBar />

      {/* <h2>시작페이지</h2>
      <button onClick={onclickHandler}>로그아웃</button> */}

      <div className="title__background">
        <div className="popular-box__cover background__cover"></div>
        <div className="index-title">
          <div className="small_title">155건의 거래, 80%의 만족도</div>
          <div className="big_title">프리랜서 마켓, 블록핑크</div>
        </div>
      </div>
      <div className="main__searchcontainer">
        <form action="#" method="get">
          <div>
            <input
              className="main__search"
              type="text"
              placeholder="웹사이트 개발"
            />
          </div>
          <div className="search-icon">
            <i className="fas fa-search lg"></i>
          </div>
        </form>
      </div>

      <main className="main-popular">
        <div className="main-title">
          <span>인기있는 수업</span>
          <div className="main-red">View All</div>
        </div>
        <div className="popular-boxes">
          <div className="popular-boxes__column">
            <div className="popular-box box1">
              <div className="popular-box__cover"></div>
              <div className="popular-box__name">Home Cooking</div>
            </div>
            <div className="popular-box box2">
              <div className="popular-box__cover"></div>
              <div className="popular-box__name">Pastry Recipes</div>
            </div>
            <div className="popular-box box5">
              <div className="popular-box__cover"></div>
              <div className="popular-box__name">집밥 요리</div>
            </div>
            <div className="popular-box box6">
              <div className="popular-box__cover"></div>
              <div className="popular-box__name">프로그래밍</div>
            </div>
          </div>
          <div className="popular-boxes__column">
            <div className="popular-box box3">
              <div className="popular-box__cover"></div>
              <div className="popular-box__name">For Babies</div>
            </div>
            <div className="popular-box box7">
              <div className="popular-box__cover"></div>
              <div className="popular-box__name">건축</div>
            </div>
            <div className="popular-box box8">
              <div className="popular-box__cover"></div>
              <div className="popular-box__name">스포츠</div>
            </div>
            <div className="popular-box box4">
              <div className="popular-box__cover"></div>
              <div className="popular-box__name">Smoothie Recipes</div>
            </div>
          </div>
        </div>
      </main>

      <script
        src="https://kit.fontawesome.com/6478f529f2.js"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default withRouter(LandingPage);
