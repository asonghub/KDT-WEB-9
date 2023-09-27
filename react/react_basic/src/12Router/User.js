import { Link, useSearchParams } from "react-router-dom";
export const users = [
  {
    id: 1,
    name: "홍길동",
    comment: [
      {
        text: "안녕하세요",
      },
    ],
  },
  {
    id: 2,
    name: "이몽룡",
    comment: [
      {
        text: "반갑습니다",
      },
      {
        text: "어서오세요",
      },
    ],
  },
  {
    id: 3,
    name: "임꺽정",
    comment: [
      {
        text: "감사해요",
      },
    ],
  },
];

export default function User() {
  //searchParams는 쿼리스트링 값을 가져오는것
  //setSearchParams는 쿼리스트링 값을 할당하는것
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  setTimeout(() => {
    setSearchParams({ mode: "Light" });
  }, 5000);

  return (
    <div>
      <ul>
        {users.map((v) => {
          return (
            <li key={v.id}>
              <Link to={`/user/${v.id}`}>{v.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
