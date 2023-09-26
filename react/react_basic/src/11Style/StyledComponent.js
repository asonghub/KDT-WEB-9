import styled from "styled-components";

//기본사용방법
const _Boxone = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

//props를 이용하는 방법
const _Boxtwo = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

//상속받아서 이용하는 방법
const _Circle = styled(_Boxtwo)`
  border-radius: 50%;
`;

//기존 태그를 이름만 바꿔서 사용하는 방법 => as 키워드 사용
const _Btn = styled.button`
  background-color: pink;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
`;

//html태그에 옵션값을 넣는 방법
const _Input = styled.input.attrs({ required: true })`
  background-color: violet;
  color: white;
`;

//중첩
const _Boxthree = styled.div`
  width: 200px;
  height: 200px;
  background-color: beige;
  /* line-height: 200px; */
  text-align: center;
  //다른 컴포넌트를 불러와서 사용가능
  ${_Input} {
    background-color: blueviolet;
  }

  //pseudo
  p {
    color: brown;
    font-weight: bold;
    &:hover {
      font-size: 30px;
    }
  }
`;

export default function StyledComponent() {
  return (
    <div>
      <_Boxone as="header"></_Boxone>
      <_Boxtwo color={"red"} />
      <_Boxtwo color={"orange"} />
      <_Circle color={"green"} />
      <_Btn onClick={() => alert("hey")}>styled Button</_Btn>
      <_Btn as="a" href="https://www.naver.com">
        a태그
      </_Btn>
      <_Input />
      <_Input />
      {/* 원래 태그가 가지고 있는 속성 그대로 사용 가능 */}
      <_Input type="password" />
      <_Boxthree>
        <p>hello styled</p>
        <_Input />
      </_Boxthree>
    </div>
  );
}
