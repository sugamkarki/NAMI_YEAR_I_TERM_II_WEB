import React from "react";

const Body = (props) => {
  let items = props.news.map((e) => {
    return (
      <div>
        <h1>{e.id}</h1>
       <h3> {e.title}</h3>
       <h4>{e.feed}</h4>
      </div>
    );
  });
  return <div>{items}</div>;
};
export default Body;
