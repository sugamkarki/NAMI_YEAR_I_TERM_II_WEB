import React, { Component } from "react";
// interface arry:[
//   {
//     name:String,

//   }
// ]
// var arr = [
//   {
//     name: "sugam",
//     age: 19,
//     home: "Jhapa",
//   },
//   {
//     name: "sumnima",
//     age: 14,
//     home: "Jhapa",
//   },
// ];
const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
class App extends Component {
  render() {
    return (
      <div className="App">
        {list.map(function (item) {
          return (
            <div>
              <span>
                <a href={item.url}>{item.points}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
