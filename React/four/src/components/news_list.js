import React, { Component } from "react";
import NewsListItem from "./news_list_item";

const NewsList = (props) => {
  // console.log(props.news)
  const item = props.news.map((e) => {
  // console.log(e.title)

    return <NewsListItem key={e.id} items={e}/>;
  });
  return <div>{props.children}{item}</div>;
};

// class NewsList extends Component {
//   constructor(props) {
//     super();
//     this.props = props;
//     // this.item
//   }
//    item = this.props.news.map((e) => {
//         return <NewsListItem item={e}/>;
//       });

//   render() {
//     return <div></div>;
//   }
// }

export default NewsList;
