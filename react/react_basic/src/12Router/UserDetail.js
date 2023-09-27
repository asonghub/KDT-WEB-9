import { Outlet, useParams } from "react-router";
import { users } from "./User";
import { Link } from "react-router-dom";

export default function UserDetail() {
  //Route에 /user/:userId
  //const params = useParams()
  const { userId } = useParams();
  console.log(userId);
  return (
    <div>
      <div>
        사용자 {userId}은 {users[Number(userId) - 1].name} 입니다.
      </div>
      <Link to="comment">comment</Link>
      <Outlet context={{ comment: users[Number(userId) - 1].comment }} />
    </div>
  );
}
