import React from "react";
import Mybio from "./components/MyBio/Mybio";
import "./App.css";

function App() {
  //remember to make a HOC to give the padding of 5px to every component
  return (
    <div className="app-container">
      <Mybio />
    </div>
  );
}

export default App;
