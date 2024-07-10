import { useState } from "react";

const NumberOfEvents = ({ updateNumberOfEvents, setErrorAlertText }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);

    if (isNaN(value)) {
      setErrorAlertText("Error: The input must be a number.");
    } else if (value <= 0) {
      setErrorAlertText("Error: The number of events cannot be negative.");
    } else if (value > 100) {
      setErrorAlertText("Error: The number of events cannot exceed 100.");
    } else {
      setErrorAlertText("");
      updateNumberOfEvents(value);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
