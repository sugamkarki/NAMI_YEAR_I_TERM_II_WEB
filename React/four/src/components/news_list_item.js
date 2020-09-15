import { Component } from "react";
import React from "react";

const NewsItem = (props) => {
  //   console.log(props.item);
    const item = props.items.map((e) => {
      return e.id;
    });
  console.log(props.items);
  // console.log(props.items.title)
  return <div>{item}</div>;
};

// class NewsItem extends Component {
//     constructor(props)
//     {
//         super()
//         this.props=props;
//         // console.log(this.props.item)
//         this.item=this.props.items.map((e)=>
//         {
//             return e.id
//         })
//     }

//     render() {
//         return (
//             <div>
//               {this.item.bind(this)}
//             </div>
//         )
//     }
// }

export default NewsItem;
