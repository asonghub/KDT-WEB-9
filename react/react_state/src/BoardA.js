import { Component } from "react";

class BoardA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputWriter: "", // 작성자
      inputTitle: "", //작성내용
      inputFilter: "",
      searchBy: "writer",
      comments: [],

      results: [],
    };
  }

  onChange = (event) => {
    this.setState(() => ({ inputWriter: event.target.value }));
  };

  addComment = () => {
    console.log(this.state.inputWriter); //리액트는 state를 사용할 때 document.getElement이런식으로 접근하지 않고 이렇게.
    const newComment = {
      writer: this.state.inputWriter,
      title: this.state.inputTitle,
    };
    this.setState(() => ({
      comments: [...this.state.comments, newComment],
      inputTitle: "",
      inputWriter: "",
    }));
  };

  searchByFilter = (event) => {
    this.setState({ searchBy: event.target.value });
  };

  searchInputFilter = (event) => {
    this.setState({ inputFilter: event.target.value });
  };

  searchComment() {
    const searchResult = this.state.comments.filter((value) => {
      console.log(value);
      console.log(value[this.state.searchBy]);
      const type = value[this.state.searchType];
      const include = type.includes(this.state.inputSearch);
      if (!include) {
        return false;
      }
      return true;
    });
    this.setState({ results: searchResult });
  }

  render() {
    const { inputFilter, searchBy, comments } = this.state;

    const filtered = comments.filter((comment) => {
      if (searchBy === "title") {
        return comment.title.includes(inputFilter);
      } else if (searchBy === "writer") {
        return comment.writer.includes(inputFilter);
      } else {
        return true;
      }
    });

    return (
      <>
        <form>
          <label htmlFor="writer">작성자: </label>
          <input
            id="writer"
            type="text"
            value={this.state.inputWriter}
            onChange={(e) => this.onChange(e)}
          />
          <label htmlFor="title">제목: </label>
          <input
            id="title"
            type="text"
            value={this.state.inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>
        <form>
          {/* onChange: input, textarea, select값이 변경될때마다 발생하는 이벤트 핸들러 */}
          <select
            name="selectOption"
            value={searchBy}
            onChange={(e) => this.searchByFilter(e)}
          >
            <option value="writer">작성자</option>
            <option value="title">제목</option>
          </select>
          <input
            className="search"
            type="text"
            value={inputFilter}
            onChange={(e) => this.searchInputFilter(e)}
            placeholder="검색어"
          ></input>
          <button>검색</button>
        </form>
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
}

export default BoardA;
