import { useState, useCallback } from "react";

function ChildComponent({ onClick }) {
  //   console.log("Child Component");
  return (
    <>
      <button onClick={onClick}>PLUS</button>
    </>
  );
}

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  //useCallback 미사용
  const plusCount = () => {
    console.log("plusCount:", count);
    setCount(() => count + 1);
  };

  //useCallback 사용
  //반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸줘서 함수를 메모이제이션
  //다시눌러도 처음에 생성한 값 그대로 저장됨. 다시 랜더링 하지 않음. 빈배열을 사용함.
  const plusCountCallback = useCallback(() => {
    console.log("plusCountCallback", count);
    setCount(() => count + 1);
  }, []);

  const onChange = (e) => {
    setInputValue(e.target.value);
    plusCountCallback();
  };

  return (
    <>
      <input value={inputValue} onChange={(e) => onChange(e)} />
      <ChildComponent onClick={plusCountCallback} />
      {/* onClick props를 보낸것!  */}
      <p>{count}</p>
    </>
  );
}
