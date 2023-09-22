import { useState, useEffect } from "react";

function MyComponent({ number }) {
  //props 객체구조분해해서 {number}
  //const {number} = props  이렇게 써도됨
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("항상 실행됩니다");
  });
  useEffect(() => {
    console.log("컴포넌트가 생성될때 실행됩니다.");

    return () => {
      console.log("제거될때 실행됩니다.");
    };
  }, []); //빈배열 넣으면 생성될때만 실행. 이때 데이터 받아오면 됨

  useEffect(() => {
    console.log("state가 변경될때 실행됩니다");
  }, [text]);

  return (
    <>
      <div>My Component Func {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(() => number + 1);
  };

  const changeVisibleState = () => {
    setVisible(() => !visible);
  };

  return (
    <>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
