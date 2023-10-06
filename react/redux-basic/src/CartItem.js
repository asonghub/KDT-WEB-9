import { useDispatch, useSelector } from "react-redux";
import { DELETE_CART } from "./store/cart";

export default function CartItem({ v }) {
  const cartitems = useSelector((state) => state);

  const dispatch = useDispatch();

  const removeCart = (myid) => {
    dispatch({ type: DELETE_CART, myid });
  };
  return (
    <div key={v.myid}>
      <span>
        {v.name} : {v.price}원
      </span>
      <button onClick={() => removeCart(v.myid)}>제거</button>
    </div>
  );
}
