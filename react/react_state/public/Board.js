// import { Component } from "react";

// class Board extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       comment: [],
//     };
//     this.writeBoard = this.writeBoard.bind(this);
//   }

//   writeBoard() {
//     let name = document.querySelector(".name").value;
//     let title = document.querySelector(".title").value;
//     let newComent = { name, title };
//     this.setState((prev) => ({
//       comment: [...prev.comment, newComent],
//     }));
//   }

//   mySearch = (e) => {};

//   render() {
//     return (
//       <>
//         <div>
//           작성자: <input className="name" placeholder="작성자"></input>
//           제목: <input className="title" placeholder="제목"></input>
//           <button onClick={this.writeBoard}>작성</button>
//         </div>
//         <br></br>
//         <div>
//           <select name="selectOption">
//             <option value="name">작성자</option>
//             <option value="title">제목</option>
//           </select>
//           <input className="search" placeholder="검색어"></input>
//           <button>검색</button>
//         </div>
//         <br></br>
//         <table width="200px">
//           <thead>
//             <tr>
//               <th>번호</th>
//               <th>제목</th>
//               <th>작성자</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.comment.map((val, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{val.title}</td>
//                   <td>{val.name}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }

// // export default Board;
