import { useState } from "react";

export default function ShowFunc() {
  const [visible, setVisible] = useState(true);

  const txtBtn = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button onClick={txtBtn}>{visible ? "사라져라" : "보여라"}</button>
      <h1>{visible && "안녕하세요"}</h1>
    </>
  );
}
