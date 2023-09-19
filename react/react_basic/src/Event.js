export default Event = () => {
  //화살표함수의 this는 함수가 소속된 곳을 가르킴
  const handleClick = () => {
    alert("클릭했습니다");
  };

  const handleClick2 = (e, str) => {
    alert(str);
    console.log(e);
  };

  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <button onClick={(event) => handleClick2(event, "2번클릭")}>클릭2</button>
    </>
  );
};
