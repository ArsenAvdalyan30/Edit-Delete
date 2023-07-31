import React, { Component } from "react";

class Button extends Component {
  componentDidMount() {
    console.log("Button didMount");
  }

  render() {
    return (
      <button disabled={this.props.disabled} onClick={this.props.onClick}>
        {" "}
        {this.props.children}{" "}
      </button>
    );
  }
}

export default Button;




