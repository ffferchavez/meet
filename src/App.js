import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert } from "./components/Alert";

import "./App.css";

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlertText, setErrorAlertText] = useState("");

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  const handleNumberOfEventsChange = (numberOfEvents) => {
    if (isNaN(numberOfEvents)) {
      setErrorAlertText("Error: The input must be a number.");
    } else if (numberOfEvents < 0) {
      setErrorAlertText("Error: The number of events cannot be negative.");
    } else {
      setErrorAlertText("");
      setCurrentNOE(numberOfEvents);
    }
  };

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlertText ? <ErrorAlert text={errorAlertText} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        updateNumberOfEvents={handleNumberOfEventsChange}
        setErrorAlertText={setErrorAlertText}
      />
      <EventList events={events} />
    </div>
  );
};

export default App;
