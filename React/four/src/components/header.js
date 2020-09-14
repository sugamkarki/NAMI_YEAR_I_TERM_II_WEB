import React, { Component as Cc } from "react";
// import '../css/style.css'
import '../css/style.css'

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
        <div className="logo" onClick={()=>
        {
          // document.getElementsByClassName('logo').backgroundColor="black";
          console.log("object")
        }}>logo</div>
        <div>
          <input className="textInput" type="text"></input>
          {/* <button className="btn" name="clickme">Button</button> */}
        </div>
      </header>
    );
  }
}
export default Header;
