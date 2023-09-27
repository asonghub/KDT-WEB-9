import styled from "styled-components";
import { useState } from "react";

const _Btn = styled.button`
  background-color: ${(props) => (props.click ? "red" : "blue")};
  color: ${(props) => (props.click ? "black" : "white")};
  cursor: pointer;

  &.clicked {
    background-color: red;
    color: black;
  }
`;

export default function StyledPrac() {
  const [click, setClick] = useState(false);
  const changColor = () => {
    setClick(!click);
  };

  return (
    <div>
      {/* <_Btn className={click ? "" : "clicked"} onClick={changColor}>
        클릭
      </_Btn> */}
      <_Btn onClick={changColor} click={click}>
        클릭
      </_Btn>
    </div>
  );
}
