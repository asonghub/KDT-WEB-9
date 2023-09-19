import cat from "./cat.jpg";
function Book(props) {
  const { title, author, price, type } = props;
  const styles = {
    backgroundColor: "beige",
    width: "200px",
    padding: "20px",
  };

  return (
    <>
      <div className="bookContainer" style={styles}>
        <div
          className="book1"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "orange" }}>이번주 베스트셀러</h2>
          <img src={cat} width="100px"></img>

          <h4 className="bookDetail">{title}</h4>
        </div>
        <div className="bookInfo">
          <div className="bookDetail">저자: {author}</div>
          <div> 판매가: {price}</div>
          <div className="bookDetail">구분: {type}</div>
        </div>
      </div>
    </>
  );
}

export default Book;
