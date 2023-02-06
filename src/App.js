import React from "react";
import "./App.css";
import { vocabe } from "./vocabe";
function App() {
  const randomvocabulary = Math.floor(
    Math.random() * Math.floor(vocabe.length)
  );
  return (
    <div className="App">
      <div className="card">
        <h2 className="title">{vocabe[randomvocabulary].FIELD1}</h2>
       
        <p className="text">{vocabe[randomvocabulary].FIELD2}</p>
      </div>
      <div className="footer">built with 🤍 by Ahmed Salama</div>
    </div>
  );
}
export default App;
