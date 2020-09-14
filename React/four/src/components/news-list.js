import React, { Component } from "react";

// const NewsList=(props)=>
// {
//     console.log(props)
//     return <div>Yoogoo</div>
// }
class NewsList extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  // item=
  render() {
    console.log(this.props.dog);
    let item = this.props.news.map((e) => {
      // console.log(e.id)
    //   return (<h3>{e.id}</h3>), (<div>{e.feed}</div>);
    return (
        <div>
            <h3>{e.id}</h3>
            <h5>{e.title}</h5>
            <h5>{e.feed}</h5>
        </div>
    )
    });
    return (
      // <div>{this.props.donkey[0].feed}</div>
      <div>{item}</div>
    );
  }
}

export default NewsList;
