import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="event">
      <h2 className="event-title">{event.summary}</h2>
      <p className="event-start-time">
        {new Date(event.start.dateTime).toString()}
      </p>
      <p className="event-location">{event.location}</p>
      <button className="details-button" onClick={handleToggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && <p className="event-description">{event.description}</p>}
    </li>
  );
};

export default Event;
