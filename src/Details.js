import React, { Component } from "react";
import { Link } from "@reach/router";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      description: [],
      start: null,
      isLoaded: false,
      error: null
    };
  }
  async componentDidMount() {
    fetch(
      `https://www.eventbriteapi.com/v3/events/${
        this.props.id
      }/?token=P7LP3DVH7WLX2UKRBVSE`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            name: result.name,
            description: result.description,
            start: result.start,
            isLoaded: true
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { error, isLoaded, name } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <div className="item-header border-1">
            <Link to="/">Que</Link>
          </div>
          <div className="item-main border-1">
            <div className="container-grid">
              <div className="container-grid">
                <h2>{this.state.name.text}</h2>
                <br />
                <p>{this.state.description.text}</p>
                <br />
                <p>{this.state.start.local}</p>
                {console.log(this.state.description)}
                {console.log(this.state.start)}
              </div>
            </div>
          </div>
        </div>
      );
    }
    // const { name, description, isLoaded, error } = this.state;
    // {
    //   console.log(name);
    //   console.log(error);
    // }
    // if (this.state.isLoaded) {
    //   return <h1 className="loader">loading..... </h1>;
    // } else {
    //   return (
    //     <div className="container">

    //       <div className="item-main">
    //         <h1>Event Page</h1>
    //       </div>
    //       <div />
    //       {/* <div className="item-footer">&trade;</div> */}
    //     </div>
    //   );
    // }

    // console.log(this.state);
    // console.log(this.props);
  }
}

export default Details;
