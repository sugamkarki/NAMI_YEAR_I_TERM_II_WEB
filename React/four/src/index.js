import React from "react";
import ReactDOM from "react-dom";
//ANCHOR components
import Header from './components/header.js'


const App = () => {
  return <Header/>
  // return <h1 className="myHeading">Hello world</h1>
};
ReactDOM.render(<App />, document.getElementById("root"));
 