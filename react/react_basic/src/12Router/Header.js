import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  //useNavigate(): Link 컴포넌트를 사용하지 않고 사용자를 어딘가로 이동시키는 기능
  const navi = useNavigate();
  const onClick = () => {
    navi("/redirect");
    // /redirect는 루트에 리다이렉트 (/붙으면 절대경로)
    // redirect는 상대경로
  };

  //Link: 유저가 직접 클릭
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <button onClick={onClick}>Redirect</button>
        </li>
      </ul>
    </div>
  );
}
