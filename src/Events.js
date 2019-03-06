import React from "react";
import EventsDescription from "./EventsDescription";
import SearchQuery from "./SearchQuery";
import { Link } from "@reach/router";
const TOKEN = process.env.API_TOKEN;
console.log(TOKEN);

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: "",
      loading: true,
      events: [],
      location: "San Francisco"
    };
  }

  async componentDidMount() {
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=queer&location.address=${
      this.state.location
    }=&token=P7LP3DVH7WLX2UKRBVSE`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ events: data.events });
  }
  render() {
    return (
      <div className="container">
        <div className="item-header border-1">
          <Link to="/">Que</Link>
        </div>

        <div className="item-menu border-1">
          <p>Home</p>
          <p>Events</p>
          <p>Travel</p>
          {/* <p>Locations</p>
          <p>Sponsor</p>
          <p>About</p> */}
        </div>
        <div className="item-search  ">
          <SearchQuery />
        </div>
        <div className="item-main border-1">
          <div className="container-grid">
            {this.state.events.map(event => (
              <div key={event.id} id={event.id}>
                <EventsDescription
                  key={event.id}
                  events={event}
                  id={event.id}
                  className="container-grid"
                />
              </div>
            ))}
          </div>
        </div>
        {/* <div className="item-sidebar">SIDE</div> */}
        <div className="item-footer">&trade;</div>
      </div>
    );
  }
}
export default Events;
