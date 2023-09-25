import { useRef, useState } from "react";

export default function BoardFunc() {
  const [inputWriter, setInpWriter] = useState("");
  const [inputTitle, setInpTitle] = useState("");
  const [comments, setComments] = useState([]);
  const [searchType, setSearchType] = useState("writer");
  const [searchInput, setSearchInput] = useState("");

  const writerRef = useRef();
  const titleRef = useRef();

  const addComment = () => {
    if (inputWriter.trim() == "") {
      writerRef.current.focus();
    } else if (inputTitle.trim() == "") {
      titleRef.current.focus();
    } else {
      let newComment = {
        writer: inputWriter,
        title: inputTitle,
      };
      setComments([...comments, newComment]);
      console.log(comments);
    }
  };

  const filtered = comments.filter((comments) => {
    if (searchType === "title") {
      return comments.title.includes(searchInput);
    } else if (searchType === "writer") {
      return comments.writer.includes(searchInput);
    } else {
      return true;
    }
  });
  return (
    <>
      <form>
        <label htmlFor="writer"> 작성자: </label>
        <input
          type="text"
          value={inputWriter}
          onChange={(e) => setInpWriter(e.target.value)}
          ref={writerRef}
        ></input>
        <label htmlFor="title"> 제목: </label>
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => setInpTitle(e.target.value)}
          ref={titleRef}
        ></input>
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <br />
      <form>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
      </form>
      <br></br>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
