import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector((state) => state);

  //reduce: 배열의 모든 요소를 더할 때 사용, 하나의 결과를 반환
  //   const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  // const totalPrice = cart
  const totalItem = cart.length;
  return (
    <div>
      <h2>장바구니</h2>
      {cart.map((v) => (
        <CartItem key={v.id} v={v} />
      ))}
      <div>총 {totalItem}개 </div>
      {/* <div>총액 : {totalPrice}원</div> */}
    </div>
  );
}
