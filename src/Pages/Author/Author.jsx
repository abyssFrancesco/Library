import React from "react";
import "./Author.css";
import Card from "../../Components/Card/Card";
import coverImg from "../../assets/cover.jpg";

function Author() {
  return (
    <>
      <div className="author">
        <div className="name">
        <h1 className="author-name IB"> Stephen King</h1>
        </div>
        <div className="card-box IB">
          <Card className={`book-cover`}  image={coverImg} />
          <Card className={`small`} />
        </div>
      </div>
    </>
  );
}

export default Author;
