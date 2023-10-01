import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const fakeDB = [
  { id: 1, title: "할일1", done: false },
  { id: 2, title: "할일2", done: false },
  { id: 3, title: "할일3", done: false },
  { id: 4, title: "할일4", done: false },
];

const _Memo = styled.div`
  width: 500px;
  height: 50px;
  line-height: 50px;
  background-color: #e2c2b9;
  text-align: center;
  margin-bottom: 10px;
`;
const _Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _TodoDiv = styled.div`
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _Input = styled.input`
  border: 0;
  border-bottom: 2px solid #e2c2b9;
  width: 300px;
  padding: 5px 5px;
  margin: 5px;
  &:focus {
    border-bottom: 0px;
    background-color: #e2c2b9;
    opacity: 50%;
    outline: 0;
  }
`;

const _AddBtn = styled.div`
  display: inline;
  padding: 3px 15px;
  border-radius: 5px;
  margin: 5px;
  background-color: #e2c2b9;
  color: white;
  cursor: pointer;
`;

const _LeftItems = styled.span`
  align-self: center;
  margin-top: 10px;
  color: grey;
  font-size: 12px;
`;

const _CheckBox = styled.div`
  display: inline;
  width: 15px;
  height: 15px;
  margin: 5px;
  font-size: small;
  font-weight: 500;
  color: #d3e4cd;
  cursor: pointer;
  &:hover {
    font-weight: 800;
    color: #99a799;
  }
`;

const _todoItem = styled.input`
  margin: 5px;
  width: 230px;
  border: 0;
  border-radius: 5px;
  padding: 8px 8px;
  line-height: normal;
  background-color: #f2ddc190;
  cursor: pointer;
  /* border-bottom: 1px solid #d3e4cd; */
  &:hover {
    font-weight: 700;
  }
  &:focus {
    background-color: #f2ddc1;
    outline: 0;
  }
`;
const _DoneItem = styled(_todoItem)`
  background-color: #99a79970;
`;

const _Delete = styled(_AddBtn)`
  font-size: 10px;
  height: 25px;
  padding: 7px;
  line-height: 25px;
`;

const _Colums = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
function TodoItem({ todo, getList }) {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  console.log(todo.title);

  //수정모드
  const editTodo = (e) => {
    setEditing(true);
    setEditedTitle(e.target.value);
  };

  //수정사항 저장
  const saveTodo = async (id, title, done) => {
    await axios({
      method: "PATCH",
      url: `/todo/${id}`,
      data: { done, title },
    });
    getList();
    setEditing(false);
  };

  return (
    <span>
      <_todoItem
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        readOnly={!editing}
        onKeyDown={(e) =>
          e.key === "Enter" && !e.nativeEvent.isComposing
            ? saveTodo(todo.id, editedTitle, todo.done)
            : null
        }
        onFocus={(e) => editTodo(e)}
        onBlur={() => setEditing(false)}
      />
    </span>
  );
}

export default function Todo() {
  const callApi = async () => {
    axios.get("/todo").then((res) => console.log(res.data));
  };

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const titleRef = useRef();

  //컴포넌트 생성될때 db에서 todo리스트 가져오기
  useEffect(() => {
    console.log("생성");
    //   setTodoList(fakeDB);
    getList();
  }, []);

  //axios로 db 가져오기
  async function getList() {
    callApi();
    const todo = await axios.get("/todo");
    setTodoList(todo.data);
  }

  //투두 리스트 추가하기 함수
  const addList = async () => {
    if (todo.trim() == "") {
      titleRef.current.focus();
    } else {
      console.log("추가");
      let post = await postList();
      setTodo("");
      console.log("db추가성공", post);
    }

    //axios post 로 db 추가 + 새 리스트 불러오기
    async function postList() {
      await axios.post("/todo", { title: todo });
      getList();
    }
  };

  //완료처리함수
  const CheckboxChange = async (e, id, done) => {
    await toggleTodo(id, e.target.value, done);
  };

  // 투두 수정 함수
  const toggleTodo = async (id, title, done) => {
    await axios({
      method: "PATCH",
      url: `/todo/${id}`,
      data: { done: !done, title },
    });
    getList();
  };

  //삭제함수
  const deleteTodo = async (id) => {
    const todoID = id;

    const deleteAxios = async (id) => {
      const destroy = await axios({
        method: "delete",
        url: `/todo/${id}`,
        // params: { todoId: id },
      });
      console.log(destroy);
    };

    await deleteAxios(todoID);
    const filtered = todoList.filter((v) => v.id !== id);
    setTodoList(filtered);
  };

  return (
    <_Container>
      <_Memo> TODO LIST </_Memo>
      {/* 할일 입력 폼 */}
      <div>
        <_Input
          placeholder="추석에 할 일"
          ref={titleRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && !e.nativeEvent.isComposing ? addList() : null
          }
        ></_Input>
        <_AddBtn onClick={addList}>+</_AddBtn>
      </div>
      {/* 할일 리스트 불러오기 */}
      <_TodoDiv>
        <_Colums>
          <_LeftItems>
            할일이 {todoList.filter((v) => v.done === false).length}개 남았어요!
            💪
          </_LeftItems>

          <div style={{ height: "75vh", overflow: "scroll" }}>
            {todoList
              .filter((v) => v.done === false)
              .map((v) => {
                return (
                  <div key={v.id}>
                    {/* 완료여부 체크박스 */}
                    <_CheckBox
                      // type="checkbox"
                      // checked={v.done}
                      value={v.title}
                      onClick={(e) => CheckboxChange(e, v.id, v.done)}
                    >
                      ✔
                    </_CheckBox>
                    {/* 할일 내용*/}
                    <TodoItem key={v.id} todo={v} getList={getList} />
                    <_Delete onClick={() => deleteTodo(v.id)}>🗑️</_Delete>
                  </div>
                );
              })}
          </div>
        </_Colums>
        {/* 완료된 할일 리스트 */}
        <_Colums>
          <_LeftItems>
            {todoList.filter((v) => v.done === true).length}개를 완료했어요! 👍
          </_LeftItems>
          <div style={{ height: "75vh", overflow: "scroll" }}>
            {todoList
              .filter((v) => v.done === true)
              .map((v, index) => {
                return (
                  <div key={v.id}>
                    {/* 완료여부 체크박스 */}
                    <_CheckBox
                      // type="checkbox"
                      // checked={v.done}
                      value={v.title}
                      onClick={(e) => CheckboxChange(e, v.id, v.done)}
                    >
                      {" "}
                      -{" "}
                    </_CheckBox>
                    {/* 할일 내용*/}
                    <_DoneItem value={v.title} htmlFor="v.title" />
                    <_Delete onClick={() => deleteTodo(v.id)}>🗑️</_Delete>
                  </div>
                );
              })}
          </div>
        </_Colums>
      </_TodoDiv>
    </_Container>
  );
}
