import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todolist, setList] = useState([]);
  const [id, setID] = useState(1);

  const addTodo = () => {
    if (todolist.length > 9) {
      alert("할일이 너무 많아요!");
    }
    if (todo !== "") {
      const newTodo = {
        todo: todo,
        finish: false,
        id: id,
      };
      setList([...todolist, newTodo]);
      setTodo("");
      setID(id + 1);
    }
  };

  const deleteTodo = () => {
    console.log(todolist);
    const filtered = todolist.filter((list) => list.finish === false);
    setList(filtered);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="할 일 입력"
        />
        <button type="button" onClick={addTodo}>
          추가
        </button>
      </form>
      <ul>
        {todolist.map((value) => {
          return (
            <li key={value.id}>
              <input
                type="checkbox"
                id={value.id}
                value={value.todo}
                onChange={(e) => (value.finish = !value.finish)}
              />
              <label htmlFor={value.id}>{value.todo}</label>
            </li>
          );
        })}
      </ul>
      <button onClick={deleteTodo}>완료된 할일 삭제</button>
    </>
  );
}
