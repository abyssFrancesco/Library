import React from "react";
import "./Home.css";
import Card from "../../Components/Card/Card";
import searchIcon from "../../assets/search.png";

function Home() {
  console.log("Home");
  return (
    <>
      <div className="home B">
        <div className="title">{/*        <h1>The cool Library</h1> */}</div>
        <div className="form-container">
          <input type="text" />
          <button><img src={searchIcon} alt="" /></button>
        </div>
        <div className="card-container IB">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
