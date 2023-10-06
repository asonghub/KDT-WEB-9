import { useDispatch } from "react-redux";
import { ADD_CART } from "./store/cart";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "A상품",
      price: 1000,
    },
    {
      id: 2,
      name: "B상품",
      price: 2000,
    },
    {
      id: 3,
      name: "C상품",
      price: 3000,
    },
  ];

  const dispatch = useDispatch();

  const addProduct = (product) => {
    console.log("add product");
    const addproduct = { ...product, myid: Date.now() };
    dispatch({ type: ADD_CART, addproduct });
    // const inCart = cart.some((el) => el.id === product.id);
    // if (!inCart) {
    //   setCart([...cart, product]);
    // }
  };

  return (
    <div>
      <h2>상품 리스트</h2>
      {products.map((v) => {
        return (
          <div key={v.id}>
            <span>
              {v.name} : {v.price}원
            </span>
            <button onClick={() => addProduct(v)}>장바구니에 추가</button>
          </div>
        );
      })}
    </div>
  );
}
