import ReactDOM from "react-dom";
import React, { Component } from "react";
import JSON from "./db.json";
import Header from "./header";
import './header.css'
import Body from './body'

class Index extends Component {
  state={
    news:JSON,
  }
  render() {
    return (
      <div>
        <Header />
        <Body news={this.state.news}/>
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
