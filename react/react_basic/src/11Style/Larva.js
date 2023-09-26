import "./Larva.scss";
import { Component } from "react";

class Larva extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="circle circle1">
            <div className="eye1">
              <div className="eye2"></div>
            </div>
          </div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5"></div>
          <img src="./green.png" width="350" />
        </div>
      </>
    );
  }
}

export default Larva;
