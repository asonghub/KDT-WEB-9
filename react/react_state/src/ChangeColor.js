import { Component } from "react";

class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "검정색 글씨",
      style: "black",
    };
  }

  changeRed = () => {
    this.setState({ txt: "빨간색 글씨", style: "red" });
  };
  changeBlue = () => {
    this.setState({ txt: "파란색 글씨", style: "blue" });
  };

  render() {
    return (
      <>
        <h1 style={{ color: this.state.style }}>{this.state.txt}</h1>
        <button onClick={this.changeRed}>빨간색</button>
        <button onClick={this.changeBlue}>파란색</button>
      </>
    );
  }
}

export default ChangeColor;
