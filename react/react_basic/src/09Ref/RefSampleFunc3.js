import { useRef } from "react";

//웹사이트에서 사용자가 회원가입시 버튼을 실수로 두번 클릭하는 것을 방지
export default function RefSampleFunc3() {
  const lastTime = useRef(null);

  const handleSubmit = () => {
    const now = Date.now();

    //마지막 클릭 후 1초 이내 다시 클릭되면 무시
    if (lastTime.current && now - lastTime.current < 1000) {
      console.log("클릭시간이 짧습니다");
      return false;
    }

    lastTime.current = now;
    console.log("제출이 완료되었습니다");
  };

  return (
    <>
      <button onClick={handleSubmit}>제출</button>
    </>
  );
}
