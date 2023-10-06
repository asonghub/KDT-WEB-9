import { createStore } from "redux";

//상수의 변수
//상수는 보통 환경변수 파일에 관리
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

//2. reducer만들기
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Date.now() };
      return [...state, newTodo];
    case DELETE_TODO:
      console.log("삭제", action.id);
      return state.filter((el) => el.id !== Number(action.id));
    default:
      return state;
  }
};

//1. 스토어 만들기
const todostore = createStore(reducer);

export default todostore;
