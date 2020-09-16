import { Component } from "react";
import React from "react";

const NewsItem = (props) => {
  // console.log(props.items.id);
  // console.log(props.items.title)
  return (
    <div>
      <h3>{props.items.id}  {props.items.title}</h3>
      <div>{props.items.feed}</div>
    </div>
  );
};

export default NewsItem;
