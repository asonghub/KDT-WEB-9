import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const _Btn = styled.button`
  background-color: skyblue;
  border-radius: 4px;
  padding: 5px 7px;
  border: 0px solid;
  margin: 3px;
`;

const _Todo = styled.div`
  height: 20px;
  border-bottom: 1px solid grey;
  width: 200px;
`;

const fakeDB = [
  { id: 1, title: "할일1", done: false },
  { id: 2, title: "할일2", done: false },
  { id: 3, title: "할일3", done: false },
  { id: 4, title: "할일4", done: false },
];

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completed, setCompleted] = useState([]);

  //컴포넌트 생성될때 db에서 todo리스트 가져오기
  useEffect(() => {
    console.log("생성");
    setTodoList(fakeDB);

    //axios로 db 가져오기
    async function getList() {
      const todo = await axios.get("/todo");
      setTodoList(todo.data);
    }
    getList();
  }, []);

  //투두 리스트 추가하기 함수
  const addList = () => {
    setTodoList([
      ...todoList,
      { id: todoList.length + 1, title: todo, done: false },
    ]);
    console.log(todoList);

    //axios post 로 db 추가
    async function postList() {
      const post = await axios.post("/todo", { title: todo });
      setTodoList([...todoList, todo]);
      setTodo("");
    }
    postList();
  };

  //완료처리하기
  const CheckboxChange = (id) => {
    const updateList = todoList.map((v) =>
      v.id === id ? (v.done = !v.done) : v
    );
    const filtered = updateList.filter((list) => list.done === false);
    setTodoList(filtered);
    finishTodo(id);
  };

  const finishTodo = async (id) => {
    const done = await axios({
      method: "PATCH",
      url: "/todo",
      params: { todoId: id },
      //   data: filtered,
    });
  };

  const deleteTodo = (id) => {
    const todoID = id;
    const deleteAxios = async (id) => {
      const destroy = await axios({
        method: "delete",
        url: "/todo",
        params: { todoId: id },
      });
      console.log(destroy);
    };

    deleteAxios(todoID);
    const filtered = todoList.filter((v) => v.id !== id);
    setTodoList(filtered);
  };

  return (
    <div>
      {/* 할일 입력 폼 */}
      <form>
        <input
          placeholder="추석에 할 일"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button type="button" onClick={addList}>
          Add
        </button>
      </form>

      {/* 할일 리스트 불러오기 */}
      <div>
        {todoList.map((v, index) => {
          return (
            <div key={v.id}>
              {/* 할일 내용*/}
              <label htmlFor="v.title">{v.title}</label>
              {/* 완료여부 체크박스 */}
              <input
                type="checkbox"
                value={v.title}
                onChange={() => CheckboxChange(v.id)}
              />
              <button type="button" onClick={() => deleteTodo(v.id)}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
      {/* 완료된 할일 리스트 */}
    </div>
  );
}
