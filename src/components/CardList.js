import React, { Component } from "react";
import Card from "./Card";
class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const cardComponent = this.props.robots.map((user, i) => {
      return (
        <Card
          key={this.props.robots[i].id}
          id={this.props.robots[i].id}
          name={this.props.robots[i].name}
          email={this.props.robots[i].email}
        />
      );
    });
    return <div>{cardComponent}</div>;
  }
}

export default CardList;
