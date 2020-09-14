import React, { Component } from "react";
import ReactDOM from "react-dom";
//ANCHOR components
import Header from "./components/header.js";
import JSON from "./db.json";
import NewsList from "./components/news-list";

export default class Index extends Component {
  state={
    news:JSON
  }
  render() {
    return (
      <div>
        <div>
          <Header />
            <NewsList news={this.state.news} money="badar" dog="kukur"/>
          
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
