import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Author from "./Pages/Author/Author"
import Books from "./Pages/Books/Books";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
