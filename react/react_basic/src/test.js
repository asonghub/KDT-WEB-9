import { Component } from "react";

class Test extends Component {
  render() {
    const name = "마아송";
    const my_style = {
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: "12px",
    };
    return (
      <>
        <div style={my_style}>{name}</div>
      </>
    );
  }
}

export default Test;
