import React, { Component } from "react";
import "./assets/App.css";

export default class App extends Component {
  state = {
    counter: 0,
  };
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log(this.state.counter);
  }
  render() {
    return (
      <div>
        <TestProps args={this.state.counter} />
        <button
          onClick={() => {
            this.increment();
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}
export class TestProps extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.args}</h1>

        {/* <button
          onClick={() => {
            var apple = new App();
            apple.increment();
          }}
        >
          Increase TestProps
        </button> */}
      </div>
    );
  }
}
