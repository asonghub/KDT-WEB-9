import { Component } from "react";

class ShowMsg extends Component {
  showMessage = (msg) => {
    alert(msg);
  };

  render() {
    return (
      <>
        <button onClick={() => this.showMessage(this.props.message)}>
          클릭해
        </button>
      </>
    );
  }
}

export default ShowMsg;
