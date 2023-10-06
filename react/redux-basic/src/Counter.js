import { UseSelector, useDispatch, useSelector } from "react-redux";
import { counterAction } from "./store/counter";
export default function Counter() {
  const counter = useSelector((state) => state.count.counter);
  console.log(counter);

  const dispatch = useDispatch();

  const add = () => {
    dispatch(counterAction.increment());
  };
  const minus = () => {
    dispatch(counterAction.decrement());
  };

  const calc = () => {
    //하나만 보낼수 있고 여러개 하려면 객체로 보내면 됨
    const text = "asong";
    dispatch(counterAction.calc({ plus: 5, minus: -3 }));
  };
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={add}>ADD</button>
      <button onClick={minus}>MINUS</button>
      <button onClick={calc}>calc</button>
    </div>
  );
}
