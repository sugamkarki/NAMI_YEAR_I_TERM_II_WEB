import React from "react";
// import logo from './logo.svg';
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <TodoList />
      <input type="text"></input>
      <button class="btn">Add</button>
      <button class="btn">Clear</button>
      <p>0 left</p>
    </div>
  );
}

export default App;
