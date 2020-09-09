import React, { Component } from "react";
import "./assets/App.css";

export default class App extends Component {
  state={
    counter:1,
  }
  render() {
    return (
      // <div>
        <TestProps args={this.state.counter}/>
      /* </div> */
    );
  }
}
export class TestProps extends Component {
  render() {
    return <h1>{this.props.args}</h1>;
  }
}
