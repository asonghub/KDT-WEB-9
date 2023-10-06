import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import loginSlice from "./login";
// const initCounter = {
//   counter: 10,
// };
// //createSlice(): 리듀서와 액션을 함께 생성하는 함수
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initCounter,
//   reducers: {
//     //함수지만 화살표함수나 function이런거 쓰면 안댐
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     calc(state, action) {
//       console.log(action.payload);
//       const { plus, minus } = action.payload;
//       state.counter = state.counter + plus + minus;
//     },
//   },
// });

// const initLogin = {
//   isLogin: false,
// };

// const loginSlice = createSlice({
//   name: "login",
//   initialState: initLogin,
//   reducer: {
//     login(state) {
//       state.isLogin = true;
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });

const store = configureStore({
  reducer: { count: counterSlice, login: loginSlice },
});

// export const counterAction = counterSlice.actions;
// export const loginAction = loginSlice.actions
export default store;
