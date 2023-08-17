import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BookCard from "./Components/BookCard";

function App() {
  return (
    <div className="App">
      <div className="w-full p-8 text-green-500 bg-black text-2xl font-medium">
        THE TIMBO JIMBO BOOK POLL
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 container mx-auto gap-8 pt-12">
        <BookCard highlighted title="Title" votes={10} image="" />
        <BookCard highlighted title="Title" votes={10} image="" />
        <BookCard highlighted title="Title" votes={10} image="" />
        <BookCard highlighted title="Title" votes={10} image="" />
      </div>
    </div>
  );
}

export default App;
