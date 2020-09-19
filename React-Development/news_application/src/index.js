import ReactDOM from "react-dom";
import React, { Component } from "react";
import JSON from "./db.json";
import Header from "./header";
import "./header.css";
import Body from "./body";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      news: JSON,
    };
  }
  typedKeywords = (event) => {
    console.log(event.target.value);
    let matched = this.state.news.filter((e) => {
      let pp = e.title.indexOf(event.target.value);
      if(pp!==-1)
      {
        console.log(pp)
      }
      return pp;
    });
  };
  render() {
    return (
      <div>
        <Header keywords={this.typedKeywords} />
        <Body news={this.state.news} />
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
