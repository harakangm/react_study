import React, { Component } from "react";
// import "./VaildateSample.css";

class VaildateSample extends Component {
  state = {
    password: "",
    Cliked: false,
    Validated: false,
  };

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleButtonClick = () => {
    this.setState({
      Cliked: true,
      Validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          //ref를 지정 하는 법
          ref={(ref) => {
            this.input = ref;
          }}
          type="password"
          value={this.state.value}
          onChange={this.handleChange}
          ClassName={
            this.state.Cliked
              ? this.state.Validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default VaildateSample;
