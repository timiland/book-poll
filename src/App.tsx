import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BookCard from "./Components/BookCard";

function App() {
  return (
    <div className="App">
      <BookCard highlighted title="Title" votes={10} image="" />
    </div>
  );
}

export default App;
