import React from "react";
import "./Books.css";
import bookComp from "../../Components/Book-comp/bookComp";

function Books() {
  return (
    <>
      <div className="Books IB">
        <div className="book-box">
          <bookComp />
        </div>
      </div>
    </>
  );
}

export default Books;
