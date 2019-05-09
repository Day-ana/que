import React from "react";

class SeachQuery extends React.Component {
  handleFormChange = event => {
    event.preventDefault();
    console.log("handleFormChange called ...");
    this.location = event.target.value;
  };

  handleFormClick = event => {
    console.log("handleFormClick called ...");
    event.preventDefault();
    console.log(this.location);
    this.props.onLocationChange(this.location);
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleFormClick}>
          {/* {console.log(this.state)} */}
          <input
            type="=text"
            value={this.value}
            onChange={this.handleFormChange}
            placeholder="Search..."
            className="border-1"
          />
          <input
            type="button"
            className="border-1"
            value="Search"
            onClick={this.handleFormClick}
            onSubmit={this.handleFormClick}
          />
        </form>
      </div>
    );
  }
}

export default SeachQuery;
