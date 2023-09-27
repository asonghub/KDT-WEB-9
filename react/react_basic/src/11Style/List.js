import styled from "styled-components";
import { useState } from "react";

const _Btn = styled.button`
  background-color: skyblue;
  border-radius: 4px;
  padding: 5px 7px;
  border: 0px solid;
  margin: 3px;
`;

const _Input = styled.input`
  padding: 5px;
  margin: 3px;
`;

const _Todo = styled.div`
  height: 20px;
  border-bottom: 1px solid grey;
  width: 200px;
`;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  overflow-y: scroll;
  background-color: beige;
`;

export default function List() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addList = () => {
    if (todo !== "") {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };
  return (
    <div>
      <form>
        <_Input
          placeholder="할일"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></_Input>
        <_Btn type="button" onClick={addList}>
          Add
        </_Btn>
      </form>
      <_Container>
        {todoList.map((v, index) => {
          return <_Todo key={index}>{v}</_Todo>;
        })}
      </_Container>
    </div>
  );
}
