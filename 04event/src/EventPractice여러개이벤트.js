import React, { Component } from "react";
// class에서는 state state  값은 계속 바뀔수 있음
class EventPractice extends Component {
  state = {
    message: "",
    username: "",
  };

  //여러개의 이벤트를 실행할때 이렇게 이용한다 [객체데이터불러오는방식] ex) name.name = name[name]
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    alert(this.state.message + ":" + this.state.username);
    this.setState({ message: "", username: "" });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
