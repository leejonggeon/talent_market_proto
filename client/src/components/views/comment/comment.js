import React from "react";
import "./App.css";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      newReply: "",
      replies: [
        {
          text: "",
        },
      ],
    };
  }

  textChange = (e) => {
    this.setState({
      newReply: e.target.value,
    });
  };

  add = () => {
    // Button 요소의 onClick 이벤트 핸들러
    let arr = this.state.replies;
    arr.push({
      text: this.state.newReply,
    });

    this.setState({
      replies: arr,
      newReply: "",
    });
  };
  pressEnter = (e) => {
    if (e.key === "Enter" && this.state.newReply) {
      this.add();
      e.target.value = "";
    }
  };

  render() {
    return (
      <div>
        <div className="App">
          <div>
            <ul className="textbox">
              {this.state.replies.map((el) => (
                <li>{el.text}</li>
              ))}
            </ul>
          </div>
        </div>
        <input
          type="text"
          placeholder="댓글달기..."
          onChange={this.textChange}
          onKeyPress={this.pressEnter}
          value={this.state.newReply}
        />
        <button onClick={this.add}>게시</button>
      </div>
    );
  }
}

export default Comment;
