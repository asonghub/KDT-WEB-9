import { useEffect, useRef, useState } from "react";

//로컬변수 - 랜더링되어도 값을 그대로 유지
export default function RefSampleFunc2() {
  const [time, setTime] = useState(0);
  const idRef = useRef(0);

  const handlePlus = () => {
    setTime(0);
    idRef.current++; //로컬 변수 값 변경
    console.log(idRef);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    //setInterval에 설정된 반복을 취소
    // return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Ref Sample</h1>
      <h2>{time}</h2>
      {/* useRef로 생성된 객체는 .current 프로퍼티를 가지고 있어 이를 통해 변수에 접근 가능 */}
      {/* useRef로 생성된 변수는 컴포넌트가 리랜더링되어도 그 값이 유지 */}
      {/* useRef의 값이 변경되어도 컴포넌트는 리랜더링되지 않음 */}
      <h2>{idRef.current}</h2>
      <button onClick={handlePlus}>Plus</button>
    </>
  );
}
