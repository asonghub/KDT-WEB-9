import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Larva from "./Larva";
import Test from "./test";
import Test2 from "./test2";
import Food from "./Food";
import Book from "./Book";
import Event from "./Event";
import EventClass from "./EventClass";
import ShowMsg from "./Message";

function App() {
  return (
    <>
      {/* <ClassComponent />
      <FunctionComponent></FunctionComponent>
      <Larva></Larva>
      <Test></Test>
      <Test2></Test2> */}

      {/* <ClassComponent name="아송" age={20}></ClassComponent>
      <ClassComponent></ClassComponent> */}
      {/* 문자열일때만 쌍따옴표, 나머지는 중괄호 */}

      {/* <FunctionComponent myClass={"kdt9"}>코딩</FunctionComponent>

      <Food food={"토마토계란볶음"}></Food>
      <Food></Food> */}

      {/* <Book
        title={"고양이의 하루"}
        author={"고양이"}
        price={"13,500원"}
        type={"에세이"}
      ></Book> */}

      {/* <Event></Event> */}
      {/* <EventClass></EventClass> */}
      <ShowMsg message={"이벤트핸들링"}></ShowMsg>
    </>
  );
}

export default App;
