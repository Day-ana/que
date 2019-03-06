import React, { Component } from "react";
import { Link } from "@reach/router";

class Details extends Component {
  render() {
    return (
      <div className="container">
        <div className="item-header border-1">
          <Link to="/">Que</Link>
        </div>
        <div className="item-footer">&trade;</div>
      </div>
    );
  }
}

export default Details;
