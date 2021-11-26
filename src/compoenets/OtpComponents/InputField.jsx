import React from "react";
export default class InputField extends React.Component {
  render() {
    return (
      <input
        style={{ margin: 10 }}
        type="text"
        name={this.props.name}
        maxLength={this.props.length}
        onChange={this.props.handleChange}
      ></input>
    );
  }
}
