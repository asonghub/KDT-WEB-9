import PropTypes from "prop-types";
//함수형 컴포넌트
//function 컴포넌트명 or const 컴포넌트명 = () => {}
function FunctionComponent(props) {
  //({myClass}}) 밑에는 {myClass}
  const myclassName = "kdt9.";

  return (
    <>
      <h1>반갑습니다 {myclassName}에 오신것을 환영합니다</h1>
      <p>여기는 함수형 컴포넌트</p>
      <h2>props {props.myClass}</h2>
      <h2>{props.children}</h2>
    </>
  );
}

FunctionComponent.defaultProps = {
  myClass: "kdt9",
};
FunctionComponent.propTypes = {
  myClass: PropTypes.string,
};

export default FunctionComponent;

// import styles from "./App.css";

// function Warm() {
//   return (
//     <>
//       <div className="container">
//         <div className="circle circle1">
//           <div className="eye1">
//             <div className="eye2"></div>
//           </div>
//         </div>
//         <div className="circle circle2"></div>
//         <div className="circle circle3"></div>
//         <div className="circle circle4"></div>
//         <div className="circle circle5"></div>
//         {/* <img src="./green.png" width="350" > */}
//       </div>
//     </>
//   );
// }

// export { FunctionComponent, Warm };
