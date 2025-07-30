import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../Components/Card/Card";
import searchIcon from "../../assets/search.png";
import bookImg from "../../assets/book.png";
import authorImg from "../../assets/author.png";

function Home() {
    //prendiamo il valore del campo input (nome del libro) e passiamolo nell'api
    const [searchTerm, setSearchTerm] = useState("");

    //stato per salvare i libri
    const [books, setBooks] = useState([]);


  //api data
  /*const apiKey = "AIzaSyA7bvM2XwePw6cfQlJQiKYgk7QIQ0i1ETM"; */
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
  //fetching api
      async function fetchBooks() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        
        setBooks(data.items || []);
        console.log(data.items);
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <>
      <div className="home ">
        <div className="title">{/*        <h1>The cool Library</h1> */}</div>
        <div className="form-container">
            {/* Prendiamo il valore nel campo di testo e lo passiamo alla variabile che grazie alla funzione
            cambierà stato della variabile*/}
          <input type="text" placeholder="Type in The Book's Name..📕" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
          {/* Quando clicchi il tasto fai partire il fetching */}
          <button onClick={fetchBooks}>
            <img src={searchIcon} alt="" />
          </button>
        </div>
        <div className="card-container">
            {/* passa un prop per mettere lo stile */}
          <Card className="small" title={"Books"} to="/books" image={bookImg}/>
          <Card className="large" title={"Author"} to="/author" image={authorImg}/>
        </div>
      </div>
    </>
  );
}

export default Home;
