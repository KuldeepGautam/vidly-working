import React, { Component } from "react";

class Like extends Component {
  state = { isLiked: false };
  render() {
    return (
      <span>
        <i
          className={this.state.isLiked ? "fas fa-heart" : "far fa-heart"}
          onClick={() => {
            this.setState({ isLiked: !this.state.isLiked });
          }}
        />
      </span>
    );
  }
}

export default Like;
