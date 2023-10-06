import { createStore } from "redux";

export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";

const reducer = (state = [], action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ADD_CART:
      console.log("add reducer");
      //   console.log(action.addproduct);
      //   const product = {...action.addproduct, cnt: 0}
      const inCart = state.findIndex((el) => el.id === action.addproduct.id);
      if (inCart == -1) {
        return [...state, { ...action.addproduct, cnt: 1 }];
      } else {
        return state[inCart].cnt++;
      }

    case DELETE_CART:
      console.log("delete reducer");
      return state.filter((el) => el.myid !== action.myid);
    default:
      return state;
  }
};

const cartStore = createStore(reducer);

export default cartStore;
