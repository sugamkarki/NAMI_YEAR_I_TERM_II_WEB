import React, { Component } from "react";
import NewsListItem from "./news_list_item";

// const NewsList = (props) => {
//   // console.log(props.news)
//   const item = props.news.map((e) => {
//     return <NewsListItem item={e}/>;
//   });
//   return <div>{item}</div>;
// };

class NewsList extends Component {
  constructor(props) {
    super();
    this.props = props;
    // this.item
  }
   item = this.props.news.map((e) => {
    return <NewsListItem item={e}/>;
  });

  render() {
    return {item};
  }
}

export default NewsList;
