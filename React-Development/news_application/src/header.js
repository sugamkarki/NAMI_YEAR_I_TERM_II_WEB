import React from "react";

const Header = (props) => {
  let change = {
    printChanged: function (e) {
      // clgprops.typed
      // console.log(props.typed)
 
    },
  };
  return (
    <header>
      <h1 className="title">New Uzz</h1>
      <input type="text" className="inputField" onChange={change.printChanged}></input>
    </header>
  );
};
export default Header;
