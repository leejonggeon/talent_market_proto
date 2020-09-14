import React, { Component, useEffect } from "react";
import "../../css/styles.css";
import { withRouter } from "react-router-dom";
import StatusBar from "../StatusBar/StatusBar";

function course_board(props) {
  return (
    <div>
      <StatusBar />
      <main className="container container_body mgothic">
        <div className="col-lg-9 col-xs-12 mobile-padding table-padding">
          <div className="post_element header">
            <a href="course_board.html"> 게시판</a>
          </div>
          <div className="container small_container">
            <table className="table table-nomargin">
              <thead>
                <tr>
                  <th style={{ minWidth: "40px" }}>번호</th>
                  <th style={{ width: "60%", paddingLeft: "12px !important" }}>
                    제목
                  </th>
                  <th style={{ minWidth: "80px", textAlign: "center" }}>
                    이름
                  </th>
                  <th style={{ minWidth: "80px", textAlign: "center" }}>
                    추천
                  </th>
                  <th style={{ width: "15%", textAlign: "center" }}>날짜</th>
                  <th style={{ minWidth: "45px", textAlign: "center" }}>
                    조회
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  onmouseover="this.style.backgroundColor='#F3F6F4'"
                  onmouseout="this.style.backgroundColor=''"
                  style={{}}
                >
                  <td className="mobile-hide" style={{ fontSize: "11px" }}>
                    <center>1</center>
                  </td>
                  <td className="title title-align">
                    <a
                      classname="course_board a"
                      href
                      style={{ maxWidth: "350px" }}
                    >
                      <span className="course_board">
                        {" "}
                        나만의 악세사리 만들기(2개) 레진공예{" "}
                      </span>
                    </a>
                    <div
                      className="desktop-hide"
                      style={{
                        color: "gray",
                        fontSize: "10px",
                        marginTop: "5px",
                        opacity: "0.9",
                      }}
                    >
                      가격 15,000 l 강남, 신사 l 조회 12
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>윤정은</td>
                  <td style={{ textAlign: "center" }}>3</td>
                  <td style={{ textAlign: "center" }}>49분 전</td>
                  <td style={{ textAlign: "center" }}>12</td>
                </tr>
                <tr
                  onmouseover="this.style.backgroundColor='#F3F6F4'"
                  onmouseout="this.style.backgroundColor=''"
                  style={{}}
                >
                  <td className="mobile-hide" style={{ fontSize: "11px" }}>
                    <center>2</center>
                  </td>
                  <td className="title title-align">
                    <a
                      classname="course_board a"
                      href
                      style={{ maxWidth: "350px" }}
                    >
                      <span className="bolder" style={{ fontWeight: "bold" }}>
                        [원데이/음성검사] 더 이상 잘못된 발성은 그만! [6]
                      </span>
                    </a>
                    <div
                      className="desktop-hide"
                      style={{
                        color: "gray",
                        fontSize: "10px",
                        marginTop: "5px",
                        opacity: "0.9",
                      }}
                    >
                      가격 40,000 l 추천 11 l 조회 317
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>김재호</td>
                  <td style={{ textAlign: "center" }}>11</td>
                  <td style={{ textAlign: "center" }}>13:54</td>
                  <td style={{ textAlign: "center" }}>317</td>
                </tr>
                <tr
                  onmouseover="this.style.backgroundColor='#F3F6F4'"
                  onmouseout="this.style.backgroundColor=''"
                  style={{}}
                >
                  <td className="mobile-hide" style={{ fontSize: "11px" }}>
                    <center>3</center>
                  </td>
                  <td className="title title-align">
                    <a
                      classname="course_board a"
                      href
                      style={{ maxWidth: "350px" }}
                    >
                      <span className>
                        {" "}
                        대기업 실무자가 알려주는 신입/인턴도 칼퇴하는 방법! [6]
                      </span>
                    </a>
                    <div
                      className="desktop-hide"
                      style={{
                        color: "gray",
                        fontSize: "10px",
                        marginTop: "5px",
                        opacity: "0.9",
                      }}
                    >
                      가격 20,000 l온라인 l 조회 62
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>June Choi</td>
                  <td style={{ textAlign: "center" }}>0</td>
                  <td style={{ textAlign: "center" }}>13:50</td>
                  <td style={{ textAlign: "center" }}>62</td>
                </tr>
                <tr
                  onmouseover="this.style.backgroundColor='#F3F6F4'"
                  onmouseout="this.style.backgroundColor=''"
                >
                  <td className="mobile-hide" style={{ fontSize: "11px" }}>
                    <center>4</center>
                  </td>
                  <td className="title title-align">
                    <a
                      classname="course_board a"
                      href
                      style={{ maxWidth: "350px" }}
                    >
                      <span className>
                        {" "}
                        운영비 0원으로 월 100만원 추가 수입 [7]{" "}
                      </span>
                    </a>
                    <div
                      className="desktop-hide"
                      style={{
                        color: "gray",
                        fontSize: "10px",
                        marginTop: "5px",
                        opacity: "0.9",
                      }}
                    >
                      가격 l0,000 추천 5 l 조회 363
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>Prinsbin</td>
                  <td style={{ textAlign: "center" }}>5</td>
                  <td style={{ textAlign: "center" }}>13:16</td>
                  <td style={{ textAlign: "center" }}>363</td>
                </tr>
                <tr
                  onmouseover="this.style.backgroundColor='#F3F6F4'"
                  onmouseout="this.style.backgroundColor=''"
                >
                  <td className="mobile-hide" style={{ fontSize: "11px" }}>
                    <center>5</center>
                  </td>
                  <td className="title title-align">
                    <a
                      classname="course_board a"
                      href
                      style={{ maxWidth: "350px" }}
                    >
                      <span className="bolder" style={{ fontWeight: "bold" }}>
                        '쉬운'방법으로 있.어.보.이.는 '고퀄' 영상 만들기 [5]
                      </span>
                    </a>
                    <div
                      className="desktop-hide"
                      style={{
                        color: "gray",
                        fontSize: "10px",
                        marginTop: "5px",
                        opacity: "0.9",
                      }}
                    >
                      가격 19,900 l 엠마 l 조회 719
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>임규선</td>
                  <td style={{ textAlign: "center" }}>23</td>
                  <td style={{ textAlign: "center" }}>12:00</td>
                  <td style={{ textAlign: "center" }}>719</td>
                </tr>
                <tr
                  onmouseover="this.style.backgroundColor='#F3F6F4'"
                  onmouseout="this.style.backgroundColor=''"
                >
                  <td className="mobile-hide" style={{ fontSize: "11px" }}>
                    <center>6</center>
                  </td>
                  <td className="title title-align">
                    <a
                      classname="course_board a"
                      href
                      style={{ maxWidth: "350px" }}
                    >
                      <span className>
                        [원데이 메이크업]뭘 바르냐가 아니라, '어떻게' 바르냐의
                        차이 [4]
                      </span>
                    </a>
                    <div
                      className="desktop-hide"
                      style={{
                        color: "gray",
                        fontSize: "10px",
                        marginTop: "5px",
                        opacity: "0.9",
                      }}
                    >
                      가격 35,000 l 신촌, 홍대 l 조회 280
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>문예람</td>
                  <td style={{ textAlign: "center" }}>9</td>
                  <td style={{ textAlign: "center" }}>11:59</td>
                  <td style={{ textAlign: "center" }}>280</td>
                </tr>
                <tr
                  onmouseover="this.style.backgroundColor='#F3F6F4'"
                  onmouseout="this.style.backgroundColor=''"
                >
                  <td className="mobile-hide" style={{ fontSize: "11px" }}>
                    <center>7</center>
                  </td>
                  <td className="title title-align">
                    <a
                      classname="course_board a"
                      href
                      style={{ maxWidth: "350px" }}
                    >
                      <span className>
                        {" "}
                        [이벤트/Live] 매출이 폭발하는 라이브 커머스 입문하기 [4]{" "}
                      </span>
                    </a>
                    <div
                      className="desktop-hide"
                      style={{
                        color: "gray",
                        fontSize: "10px",
                        marginTop: "5px",
                        opacity: "0.9",
                      }}
                    >
                      가격 17,500 | 강남 l 조회 54
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>김대현(김소년)</td>
                  <td style={{ textAlign: "center" }}>0</td>
                  <td style={{ textAlign: "center" }}>11:54</td>
                  <td style={{ textAlign: "center" }}>54</td>
                </tr>
                <tr
                  onmouseover="this.style.backgroundColor='#F3F6F4'"
                  onmouseout="this.style.backgroundColor=''"
                >
                  <td className="mobile-hide" style={{ fontSize: "11px" }}>
                    <center>8</center>
                  </td>
                  <td className="title title-align">
                    <a
                      classname="course_board a"
                      href
                      style={{ maxWidth: "350px" }}
                    >
                      <span className>
                        [원데이/투잡] 빠르게 시작하는 '렌탈스튜디오' 월 300만원
                        수익 [4]
                      </span>
                    </a>
                    <div
                      className="desktop-hide"
                      style={{
                        color: "gray",
                        fontSize: "10px",
                        marginTop: "5px",
                        opacity: "0.9",
                      }}
                    >
                      가격 15,000 | 온라인 l 조회 54
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>김민수</td>
                  <td style={{ textAlign: "center" }}>0</td>
                  <td style={{ textAlign: "center" }}>11:54</td>
                  <td style={{ textAlign: "center" }}>54</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <form
          className="container"
          method="get"
          action="/board/5/1"
          acceptCharset="UTF-8"
          style={{ paddingLeft: "10px" }}
        >
          <div className="col-lg-8" style={{ padding: "5px 0px" }}>
            <select name="field" className="form-control">
              <option value="title">제목</option>
              <option value="content">내용</option>
              <option value="all">제목+내용</option>
            </select>
            <input
              type="text"
              name="q"
              className="form-control"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-4" style={{ padding: "5px 0px" }}>
            <button
              type="submit"
              className="btn btn-default"
              style={{ width: "100%" }}
            >
              <i className="fa fa-search" />
              검색
            </button>
          </div>
          <a
            className="btn btn-red write"
            href="content.html"
            style={{ left: "50%" }}
          >
            <i className="glyphicon glyphicon-pencil" />
            글쓰기
          </a>
        </form>
      </main>
    </div>
  );
}

export default withRouter(course_board);
