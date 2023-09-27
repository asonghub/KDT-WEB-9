import { useOutletContext } from "react-router-dom";
export default function Comment() {
  const ctx = useOutletContext();
  console.log(ctx.comment);
  return (
    <div>
      {ctx.comment.map((v, idx) => {
        return <div key={idx}>{v.text}</div>;
      })}
    </div>
  );
}
