import React from "react";
import "./Author.css";
import Card from "../../Components/Card/Card";
import coverImg from "../../assets/cover.jpg";
import Footer from "../../Components/Footer/Footer";

function Author() {
  return (
    <>
      <div className="author">
        <div className="name B">
          <h1 className="author-name">Stephen King</h1>
        </div>
        <div className="card-box IB">
          <Card className={`book-cover`} image={coverImg} />
          <Card className={`description-card`} desc={'mmat'} />
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Author;
