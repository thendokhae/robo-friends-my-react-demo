import React, { Component } from "react";

class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          overflowY: "scroll",
          border: "1px solid black",
          height: "600px"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
