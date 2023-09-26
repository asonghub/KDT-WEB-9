import { Component } from "react";
import cat from "./cat.jpg";

class Test2 extends Component {
  render() {
    const style = {
      color: "orange",
      fontSize: "40px",
      marginTop: "20",
    };

    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
        </div>
        <div style={style}>
          <img src={cat} height="300px"></img>
        </div>
      </>
    );
  }
}

export default Test2;
