import { useState } from "react";

export default function ColorFunc() {
  const [txt, setTxt] = useState("검정색 글씨");
  const [style, setStyle] = useState("black");

  const changeRed = () => {
    setTxt("빨간색 글씨");
    setStyle("red");
  };

  const changeBlue = () => {
    setTxt("파란색 글씨");
    setStyle("blue");
  };

  return (
    <>
      <h1 style={{ color: style }}>{txt}</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </>
  );
}
