import React from "react";

const Header = (props) => {
  // console.log(props.typed)
  return (
    <header>
      <h1 className="title">New Uzz</h1>
      <input type="text" className="inputField" onChange={props.keywords}></input>
    </header>
  );
};
export default Header;
