import styled from "styled-components";
import { useState } from "react";

const _Btn = styled.button`
  background-color: blue;
  color: white;

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
      <_Btn className={click ? "" : "clicked"} onClick={changColor}>
        클릭
      </_Btn>
    </div>
  );
}
