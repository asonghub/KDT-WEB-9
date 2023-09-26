import { Component } from "react"; //1번 방법
import React from "react"; //2번 방법
import PropTypes from "prop-types";

//class형 컴포넌트 (컴포넌트는 대문자로 만들기)
//class 컴포넌트명 extends Component{} //1번 방법
//class ClassComponent extends React.Component {} //2번방법

class ClassComponent extends Component {
  //클래스형 컴포넌트에서는 render 함수 필수!
  //class에서는 funtion render() 이렇게 안씀
  render() {
    const name = "홍길동";
    const { age } = this.props; //props의 객체 구조분해 할당

    return (
      <>
        <h1>Hello {name}</h1>
        <h2>안녕하세요 {this.props.name}</h2>
        <h2>나이는 {age}살 입니다</h2>
        <p>여기는 클래스형 컴포넌트</p>
      </>
    );
  }
}

// ClassComponent.defaultProps = {
//   name: "임꺽정",
//   age: 13,
// };

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default ClassComponent;
