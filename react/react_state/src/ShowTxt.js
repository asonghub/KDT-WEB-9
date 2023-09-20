import { Component } from "react";

class ShowTxt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  txtBtn = () => {
    // const { btntxt, txt } = this.state
    // btntxt == "사라져라"
    //   ? this.setState({ btntxt: "보여라", txt: "" })
    //   : this.setState({ btntxt: "사라져라", txt: "안녕하세요" });
    this.setState(() => ({ visible: !this.state.visible }));
  };

  render() {
    return (
      <>
        <button onClick={this.txtBtn}>
          {this.state.visible ? "사라져라" : "보여라"}
        </button>
        <h1>{this.state.visible && "안녕하세요"}</h1>
      </>
    );
  }
}

export default ShowTxt;
