import { Component } from "react";

class Counter extends Component {
  //생성자
  constructor(props) {
    //부모클래스인 Component의 생성자 호출
    super(props);

    this.state = {
      number: 0,
    };

    //바인딩
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  //일반형, 바인딩 필수
  handleIncrement() {
    //this.state.number++; //이렇게 직접적으로 바꾸면 안됨. 콘솔에서 증가는 되지만 재랜더링은 안됨.
    this.setState({ number: this.state.number + 1 });
    console.log(this);
  }

  //화살표 함수, 바인딩 불필요, 화살표 함수만 쓸거라면 생성자 없이 state={}로 state 설정만 해두면 됨.
  handleDecrement = () => {
    //setState는 비동기. 호출 직후에 상태가 바로 업데이트 되지 않는다.
    //리액트는 여러 setState 호출을 일괄 처리
    //2번의 setState가 1번의 결과를 기반으로 동작하지 않음.
    // this.setState({ number: this.state.number - 1 }); // 1번
    // this.setState({ number: this.state.number - 1 }); // 2번

    this.setState((prevState) => {
      return { number: prevState.number - 1 };
    });
    this.setState((prevState) => ({ number: prevState.number - 1 }));
  };

  render() {
    //const {number} = this.state
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleIncrement}>증가</button>
        <button onClick={this.handleDecrement}>감소</button>
      </div>
    );
  }
}

export default Counter;
