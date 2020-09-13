import React, { Component as Cc } from "react";

const css={
    header:{
        backgroundColor:"aqua",

    },
    logo:{
        textAlign:"Center",
        fontSize:"40px"
    },
    button:{
        borderRadius:"30px"

    }

}
class Header extends Cc {
  render() {
    return (
      <header >
        <div className="logo">logo</div>
        <div>
          <input className="textInput" type="text"></input>
          {/* <button className="btn" name="clickme">Button</button> */}
        </div>
      </header>
    );
  }
}
export default Header;
