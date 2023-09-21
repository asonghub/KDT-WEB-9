import { Component } from "react";

class MyComponent extends Component {
  state = {
    status: false,
  };
  //생성될때
  componentDidMount() {
    console.log("mount!");

    //생성될때 데이터값을 받아오게 만들어서 사용.
  }

  //업데이트 될때
  componentDidUpdate() {
    console.log("update!");
  }

  //제거될때
  componentWillUnmount() {
    console.log("unmount");
  }

  change = () => {
    this.setState({ state: !this.state.status });
  };
  render() {
    return (
      <>
        <div>My Component {this.props.number}</div>
        <button onClick={this.change}>PLUS</button>
        <div>{this.state.status && "자식컴포넌트"}</div>
      </>
    );
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };

  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>Plus</button>
        <button onClick={this.changeVisibleState}>ON/OFF</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;
