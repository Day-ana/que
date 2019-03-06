import React from "react";
import { Link } from "@reach/router";

class EventsDescription extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { events, id } = this.props;
    let defaultImg = "https://picsum.photos/200/200/?random";
    let imgUrl = events.logo;
    if (imgUrl !== null) {
      imgUrl = imgUrl.url;
    }
    console.log(events);

    return (
      <Link to={`/details/${id}`} className="event-profile">
        <a href={events.url} rel="noopener noreferrer" target="_blank">
          <img src={imgUrl} />
        </a>
        {/* <h4>{events.name.text}</h4> */}
        <h4>
          {events.start.local} |<br /> {events.start.timezone}
        </h4>
        <a href={events.url} rel="noopener noreferrer" target="_blank">
          {events.name.text}
        </a>
      </Link>
    );
  }
}

export default EventsDescription;
