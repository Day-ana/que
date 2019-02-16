import React from "react";
import EventsDescription from "./EventsDescription";
import SearchQuery from "./SearchQuery";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: "",
      loading: true,
      events: [],
      location: ""
    };
  }

  async componentDidMount() {
    const url =
      "https://www.eventbriteapi.com/v3/events/search/?q=techno&location.address=SanFrancisco=&token=P7LP3DVH7WLX2UKRBVSE";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ events: data.events });
  }
  render() {
    return (
      <div className="container">
        <div className="item-header border-1">
          <SearchQuery />
        </div>
        <div className="item-menu border-1">Menu</div>
        <div className="item-main border-1">
          <div className="container-grid">
            {this.state.events.map(event => (
              <div key={event.id} id={event.id}>
                <EventsDescription
                  key={event.id}
                  events={event}
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
