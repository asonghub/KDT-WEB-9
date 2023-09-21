import { useState } from "react";

export default function ToggleFunc() {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  return (
    <div>
      <button onClick={handleToggle}>토글</button>
      <p>{status && "보여라"}</p>
      {/* 참이면 뒤에거 보임 */}
    </div>
  );
}
