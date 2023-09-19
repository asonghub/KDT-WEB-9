import { Component } from "react";

class Food extends Component {
  render() {
    return (
      <>
        <p>
          <span style={{ color: "red" }}>{this.props.food}</span>을 아시나요?
          상큼 고소 존맛탱
        </p>
      </>
    );
  }
}

Food.defaultProps = {
  food: "마라탕",
};

export default Food;
