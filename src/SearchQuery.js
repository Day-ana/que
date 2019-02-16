import React from "react";

class SeachQuery extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      location: ""
    };
  }
  render() {
    return (
      <div className="search">
        <input type="=text" placeholder="Search..." className="border-1" />
      </div>
    );
  }
}

export default SeachQuery;
