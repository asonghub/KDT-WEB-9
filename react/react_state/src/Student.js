import { Link, useParams, useSearchParams } from "react-router-dom";

export default function Student() {
  //searchParams는 쿼리스트링 값을 가져오는것
  //setSearchParams는 쿼리스트링 값을 할당하는것
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("id"));
  const { id } = useParams();
  setSearchParams({ name: "kdt3rd" });

  return (
    <div>
      <div>학생의 이름은 {id}입니다</div>
      <div>실제 이름은{searchParams.get("name")} </div>
    </div>
  );
}
