import React, { useState } from "react";

const NumberOfEvents = ({ updateNumberOfEvents }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);
    updateNumberOfEvents(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="number"
        className="number-of-events-input"
        value={numberOfEvents}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;
