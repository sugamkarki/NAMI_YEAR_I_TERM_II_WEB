import React,{useState} from "react";
// import logo from './logo.svg';
import "./App.css";
import TodoList from "./TodoList";

function App() {
  // var useState = ["Todo 1", "Todo 2"];
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
  // const [todos, setTodos] = useState;

  return (
    <div>
      {/* <TodoList /> */}
      <TodoList todos={todos} />
      <input type="text"></input>
      <button class="btn">Add</button>
      <button class="btn">Clear</button>
      <p>0 left</p>
    </div>
  );
}

export default App;
