import { useNavigate, useParams, useSearchParams } from "react-router-dom";
// import { users } from "./User";
import { Link } from "react-router-dom";

export default function StudentDetail() {
  //Route에 /user/:userId
  //const params = useParams()

  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const name = searchParams.get("name");
  //   console.log(userId);
  const navi = useNavigate();
  const onclick = () => {
    navi("/");
  };
  return (
    <div>
      <div>학생의 이름은 {id}입니다.</div>
      <div>{name && `실제 이름은 ${name} `}</div>
      <button onClick={onclick}>이전페이지</button>
    </div>
  );
}
