import React, { Component as Cc } from "react";
// import '../css/style.css'
import "../css/style.css";

class Header extends Cc {
  constructor() {
    super();
    this.state = {
      keyword: "",
    };
  }

  eventHandler = (e) => {
    this.setState({ keyword: e.target.value });
  };
  render() {
    console.log(this.state.keyword);
    return (
      <header>
        <div className="logo">logo</div>
        <div>
          <input
            className="textInput"
            type="text"
            onChange={this.eventHandler}
          ></input>
        
        </div>
      </header>
    );
  }
}
export default Header;
