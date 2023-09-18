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

  //map 함수
  const lists = ["k", "d", "t", "w", "e", "b"];

  //filter 함수
  const animals = ["dog", "cat", "rabbit"];
  const newAnimals = animals.filter((value) => {
    // return value.length > 3;
    return value.includes("a");
  });
  console.log(newAnimals);

  //단축평가
  //&&연산자
  //로그인 되었을때 뒤에 를 읽어주는 것으로 활용
  const result = true && "Hello"; //앞에가 참이면 뒤에꺼 출력
  console.log(result);

  //||연산자
  //보통 db 값에 넣어줄때 사용함
  const defaultValue = 1000;
  const price = 1500;
  const dbPrice = price || defaultValue;
  console.log(dbPrice);

  const users = [
    { id: 1, name: "john", age: 25, vip: true },
    { id: 2, name: "jane", age: 19, vip: false },
    { id: 3, name: "alice", age: 30, vip: true },
    { id: 4, name: "bob", age: 18, vip: false },
    { id: 5, name: "charlie", age: 35, vip: true },
  ];
  const vips = users.filter((value) => {
    return value.vip == true;
  });

  vips.map((value) => {
    console.log(value.name);
  });
  const style2 = true;
  const isLogin = true;

  return (
    <>
      {isLogin && (
        <>
          <div>실습 1번 </div>
          <div>
            이것은 div입니다.
            <h3>이것은 div안에 있는 h3태그입니다.</h3>
          </div>
          <div>
            {3 + 5 == 8 ? <div>정답입니다</div> : <div>오답입니다</div>}
          </div>
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

          {lists.map((value, index) => {
            return (
              <div key={index}>
                <p>Hello {value}</p>
              </div>
            );
          })}

          {vips.map((value) => (
            <div key={value.id}>- {value.name}</div>
          ))}
        </>
      )}
      {/* <h1 style={{ backgroundColor: "black", color: "white" }}>Hello React</h1>
      <div style={styles}>리액트 시작</div>
      <input />
      <div>{flag ? <h1>true입니다</h1> : <h1>false입니다</h1>}</div>
      <div>{txt}</div> */}
      {/* <div style={style2 ? { display: "show" } : { display: "none" }}> */}

      {/* </div> */}
    </>
  );
}

export default App;
