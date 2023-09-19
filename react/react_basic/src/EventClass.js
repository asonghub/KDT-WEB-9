import { Component } from "react";

class EventClass extends Component {
  //생성자: 클래스가 만들어질때 생성
  constructor(props) {
    //super는 부모의 값을 사용하기 위하여 넣은 키워드
    super(props); //component를 상속받아서 쓴다는뜻

    //this 바인딩
    //일반형 함수일때만 사용
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert("클래스형 컴포넌트");
  }
  //일반함수에서는 바인딩해줘야함.

  handleClick2 = () => {
    alert("클래스형 컴포넌트 2번");
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>클릭Class</button>
        <button onClick={this.handleClick2}>클릭Class2</button>
      </>
    );
  }
}

export default EventClass;
