import Counter from "./Counter";
import ChangeColor from "./ChangeColor";
import ShowTxt from "./ShowTxt";
import BoardA from "./BoardA";
import CounterFunc from "./CounterFunction";
import ToggleFunc from "./ToggleFunc";
import ColorFunc from "./ColorFunc";
import ShowFunc from "./ShowFunc";
import BoardFunc from "./BoardFunc";
import Todo from "./Todo";
import LifeCycleClass from "./LifeCycleClass";
import LifeCycleFunc from "./LifeCycleFunc";
import PostList from "./PostList";
import User from "./User";
import InputState from "./Input";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <ChangeColor /> */}
      {/* <ShowTxt /> */}
      {/* <BoardA /> */}
      {/* <CounterFunc></CounterFunc> */}
      {/* <ToggleFunc /> */}
      {/* <ColorFunc /> */}
      {/* <ShowFunc /> */}
      {/* <BoardFunc /> */}
      {/* <Todo /> */}
      {/* <LifeCycleClass /> */}
      {/* <LifeCycleFunc></LifeCycleFunc> */}
      {/* <PostList />
      <User />
      <InputState type="text" required={false} /> */}

      <Header />
      <Outlet />
    </>
  );
}

export default App;
