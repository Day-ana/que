import React, { Component } from "react";
import { Link } from "@reach/router";

class Details extends Component {
  async componentDidMount() {
    let url;
    // if (this.state.location) {
    //   url = `https://www.eventbriteapi.com/v3/events/search/?q=queer&location.address=${
    //     this.state.location
    //   }=&token=P7LP3DVH7WLX2UKRBVSE`;
    // } else {
    url = `https://www.eventbriteapi.com/v3/events/${
      this.props.id
    }/?token=P7LP3DVH7WLX2UKRBVSE`;
    // }

    // state = {loading: true; showModal: false}

    const response = await fetch(url);
    const eventDetails = await response.json();
    // this.setState({ events: data.events });
    console.log(this.props);

    this.setState({
      name: eventDetails.name,
      description: eventDetails.description,
      start: eventDetails.start
    });
  }
  render() {
    // const { name, description, start } = this.state;
    // if (this.state.loading) {
    //   return <h1 className="loader">loading..... </h1>;
    // }

    console.log(this.state);
    return (
      <div className="container">
        <div className="item-header border-1">
          <Link to="/">Que</Link>
        </div>
        <div>
          {/* <h1>{name}</h1> */}
          {/* <h1>{this.state.description}</h1> */}
          {/* <h1>{this.state.start}</h1> */}
        </div>
        <div className="item-footer">&trade;</div>
      </div>
    );
  }
}

export default Details;
