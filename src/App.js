import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";
import CityEventsChart from "./components/CityEventsChart";
import EventGenresChart from "./components/EventGenresChart";

import "./App.css";

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlertText, setErrorAlertText] = useState("");
  const [warningAlertText, setWarningAlertText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      console.log("All Events:", allEvents);
      const filteredEvents =
        currentCity === "See all cities"
          ? allEvents
          : allEvents.filter((event) => event.location === currentCity);
      console.log("Filtered Events:", filteredEvents);
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
    };

    if (navigator.onLine) {
      setWarningAlertText("");
    } else {
      setWarningAlertText(
        "You are currently offline. The displayed events may not be up to date."
      );
    }

    fetchData();
  }, [currentCity, currentNOE]);

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
        {warningAlertText ? <WarningAlert text={warningAlertText} /> : null}
      </div>
      <h1>UPCOMING EVENTS</h1>
      <h3>
        Find Interesting Exhibitions, Conferences, Webinars To Attend Globally
      </h3>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        updateNumberOfEvents={handleNumberOfEventsChange}
        setErrorAlertText={setErrorAlertText}
      />
      <div className="charts-container">
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </div>
  );
};

export default App;
