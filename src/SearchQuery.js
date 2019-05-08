import React from "react";

class SeachQuery extends React.Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     location: ""
    //   };
    // this.handleFormChange = this.handleFormChange(this);
  }

  handleFormChange = event => {
    event.preventDefault();
    // console.log(event.target.value);
    console.log("handleFormChange called ...");
    // this.setState = {
    //   location: event.target.value
    // };

    this.props.onLocationChange(event.target.value);
  };

  handleFormClick = event => {
    event.preventDefault();
    console.log("handleFormClick called ...");
    // this.props.onLocationChange("miami");
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleFormSubmit}>
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
          />
        </form>
      </div>
    );
  }
}

export default SeachQuery;
