import React, { Component } from "react";

export default class InputValues extends Component {
  constructor(pros) {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    };
  }
  changed(e) {
    if (e.target.id === "firstName") {
      this.setState({ firstName: e.target.value });
    }
    if (e.target.id === "lastName") {
      this.setState({ lastName: e.target.value });
    }
    if (e.target.id === "phone") {
      this.setState({ phone: e.target.value });
    }

    if (e.target.id === "email") {
      this.setState({ email: e.target.value });
    }
    if (e.target.id === "message") {
      this.setState({ message: e.target.value });
    }
  }
  clicked() {
    console.log(this.state);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          className="form-control"
          onChange={this.changed.bind(this)}
        ></input>
        <br></br>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          onChange={this.changed.bind(this)}
        ></input>
        <br></br>
        <input
          type="text"
          id="phone"
          placeholder="Phone"
          onChange={this.changed.bind(this)}
        ></input>
        <br></br>
        <input
          type="text"
          id="email"
          placeholder="Email"
          onChange={this.changed.bind(this)}
        ></input>
        <br></br>
        <input
          type="text"
          id="message"
          placeholder="Message"
          onChange={this.changed.bind(this)}
        ></input>
        <br></br>
       
        <input
          type="button"
          id="submit"
          placeholder="submit"
          value="submit"
          onClick={this.clicked.bind(this)}
        ></input>
        <br></br>
      </form>
    );
  }
}
