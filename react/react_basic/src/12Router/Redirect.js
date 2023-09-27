import { useNavigate } from "react-router";
import { useEffect } from "react";
export default function Redirect() {
  const navi = useNavigate();
  useEffect(() => {
    navi("/user");
  }, []);

  return <div>Redirect</div>;
}
