import axios from "axios";
import { useState, useEffect } from "react";

function MyComponent() {
  const [users, setUserlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //useEffect함수는 비동기함수를 직접적으로 지원하지 않음.
    //비동기 함수를 사용하려면 내부에 비동기함수를 정의하고 바로 호출

    async function getUser() {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserlist(data.data);
      setLoading(true); //데이터 가져왓을때 바꿔주는 실무 스킬~
    }

    getUser();

    return () => {
      console.log("연결 해제 완료");
    };
  }, []);

  useEffect(() => {
    console.log("유저정보업데이트", users.length);
  }, [users]);

  return (
    <>
      {loading ? (
        <ul>
          {users.map((value) => {
            return (
              <li key={value.id}>
                {value.name} - {value.email}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}

export default function User() {
  const [visible, setVisible] = useState(false);

  const changeVisibleState = () => {
    setVisible(() => !visible);
  };

  return (
    <>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent />}
    </>
  );
}
