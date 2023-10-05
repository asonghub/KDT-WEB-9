//리덕스를 이용한 숫자 증가, 감소 코드
import { createStore } from "redux";

const input = document.querySelector("#ans");
const form = document.querySelector("form");
const ul = document.querySelector("#ansList");

//상수의 변수
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("first");

  store.dispatch({ type: ADD_TODO, text: input.value });
  input.value = "";
});

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
const store = createStore(reducer);

const removeTodo = (event) => {
  event.preventDefault();
  console.log(event.target);

  console.log(event.target.parentNode.id);
  store.dispatch({ type: DELETE_TODO, id: event.target.parentNode.id });
};
//3.subscribe
store.subscribe(() => {
  console.log(store.getState());
  const todos = store.getState();
  ul.innerHTML = "";
  todos.map((value) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "삭제";
    btn.addEventListener("click", removeTodo);
    li.id = value.id;
    li.innerText = value.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
});

/*내코드
const addTodo = document.querySelector("#addTodo");
const todo = document.querySelector("#todo");
const list = document.querySelector("#list");
const btn = document.querySelector("#btn");

const ADDTODO = "addtodo";
const DEL = "DEL";
let id = 0;

//리듀서
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADDTODO:
      let newTodo = { id: id++, todo: todo.value };
      console.log(state);
      return [...state, newTodo];
    // return list.append(`<li>${todo.value}</li>`);
    case DEL:
      return state.filter((v) => v.id !== action.id);
    default:
      return state;
  }
};

//store
const todoStore = createStore(todoReducer);

todoStore.subscribe(
  () => {
    list.innerHTML = "";
    console.log("get이 뭐야", todoStore.getState());
    todoStore.getState().map((v) => {
      const listItem = document.createElement("li");
      const delButton = document.createElement("button");
      delButton.textContent = "DEL";
      delButton.addEventListener("click", () => delTodo(v.id)); // delTodo 함수 호출
      listItem.innerHTML = `${v.todo} `;
      listItem.appendChild(delButton); // 버튼을 리스트 아이템에 추가
      list.appendChild(listItem);
    });
  }

  // innerHTML = `<li>${todoStore.getState()}</li>`;
  // list.append(`<li>${todoStore.getState()}</li>`);
);

addTodo.addEventListener("click", () => {
  todoStore.dispatch({ type: ADDTODO });
  todo.value = "";
});

function delTodo(id) {
  todoStore.dispatch({ type: DEL, id });
}
*/
//투두 실습

/*

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const num = document.querySelector("#num");

const ADD = "ADD";
const MINUS = "MINUS";

//리듀서
//현재값, 액션 두가지 값을 받음
const countReducer = (state = 0, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    case "HAHAHA":
      return "ABC";
    default:
      return state;
  }
};

//store는 데이터를 넣는 곳
//createStore: store 생성, 리듀서 함수 필수
const countStore = createStore(countReducer);
console.log(countStore);

//subscribe()는 데이터와 저장소가 변경될때마다 콜백함수를 실행
countStore.subscribe(() => {
  //getState()는 저장소에서 최신 상태의 값을 반환할때 쓰는 메소드
  num.textContent = countStore.getState();
});

add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});

// countStore.dispatch({ type: "ADD" });
// console.log(countStore.getState());

*/

//자바스크립트를 이용한 숫자증가, 감소 코드
/*
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const num = document.querySelector("#num");

let count = 0;

add.addEventListener("click", () => {
  count = count + 1;
  num.textContent = count;
});

minus.addEventListener("click", () => {
  count = count - 1;
  num.textContent = count;
});
*/
