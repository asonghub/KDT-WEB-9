import logo from "./logo.svg";
import "./App.css";

function App() {
  const flag = true;
  let txt = "";

  if (flag) {
    txt = "true 입니다";
  } else {
    txt = "flase 입니다";
  }

  const styles = {
    backgroundColor: "red",
  };

  const name = "로이";
  const animal = "강아지";

  const title = "Hello World";

  return (
    <>
      {/* <h1 style={{ backgroundColor: "black", color: "white" }}>Hello React</h1>
      <div style={styles}>리액트 시작</div>
      <input />
      <div>{flag ? <h1>true입니다</h1> : <h1>false입니다</h1>}</div>
      <div>{txt}</div> */}

      <div>실습 1번 </div>
      <div>
        이것은 div입니다.
        <h3>이것은 div안에 있는 h3태그입니다.</h3>
      </div>
      <div>{3 + 5 == 8 ? <div>정답입니다</div> : <div>오답입니다</div>}</div>
      <br />
      <div>실습 2번</div>
      <h2>
        제 반려 동물의 이름은
        <span style={{ textDecoration: "underline" }}>{name}</span>입니다.
      </h2>
      <h2>
        <span style={{ textDecoration: "underline" }}>{name}</span>은{" "}
        <span style={{ textDecoration: "underline" }}>{animal}</span>입니다.
      </h2>
      <br />
      <div>실습 3번</div>
      <div className="test">{title}</div>
      <div className="test2">
        <div className="test3">
          아이디 : <input></input>
        </div>
        <div>
          비밀번호 : <input></input>
        </div>
      </div>
      <br />
      <div>실습 4번</div>
      <div className="rainbow">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
    </>
  );
}

export default App;
