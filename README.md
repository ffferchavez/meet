# Meet App

Meet is a web application that allows users to discover and access information about upcoming events in their local area. The application provides a range of features to help users find and explore events that are relevant to their interests and location.

## Table of Contents
- [Features](#features)
- [User Stories](#user-stories)
- [Scenarios](#scenarios)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Filter Events By City**
2. **Show/Hide Event Details**
3. **Specify Number of Events**
4. **Use the App When Offline**
5. **Add an App Shortcut to the Home Screen**
6. **Display Charts Visualizing Event Details**

## User Stories

### Feature 1: Filter Events By City

As a user,
I should be able to search for events by city
So that I can find events that are relevant to my location.

### Feature 2: Show/Hide Event Details

As a user,
I should be able to expand and collapse event details
So that I can easily access the information I'm interested in.

### Feature 3: Specify Number of Events

As a user,
I should be able to choose the number of events to display
So that I can control the amount of information shown.

### Feature 4: Use the App When Offline

As a user,
I should be able to access cached event data when I'm offline
So that I can still explore upcoming events.

### Feature 5: Add an App Shortcut to the Home Screen

As a user,
I should be able to add a shortcut to the MeetUP app on my device's home screen
So that I can easily access the application.

### Feature 6: Display Charts Visualizing Event Details

As a user,
I should be able to view charts that visualize event details
So that I can better understand the distribution of upcoming events.

## Scenarios

### Feature 1: Filter Events By City

**Scenario 1:** When user hasn’t searched for a city, show upcoming events from all cities.
**Scenario 2:** User should see a list of suggestions when they search for a city.
**Scenario 3:** User can select a city from the suggested list.

### Feature 2: Show/Hide Event Details

**Scenario 1:** An event element is collapsed by default.
**Scenario 2:** User can expand an event to see details.
**Scenario 3:** User can collapse an event to hide details.

### Feature 3: Specify Number of Events

**Scenario 1:** When user hasn't specified a number, 32 events are shown by default.
**Scenario 2:** User can change the number of events displayed.

### Feature 4: Use the App When Offline

**Scenario 1:** Show cached data when there's no internet connection.
**Scenario 2:** Show error when user changes search settings (city, number of events).

### Feature 5: Add an App Shortcut to the Home Screen

**Scenario 1:** User can install the meet app as a shortcut on their device home screen.

### Feature 6: Display Charts Visualizing Event Details

**Scenario 1:** Show a chart with the number of upcoming events in each city.

## Installation

To get started with Meet, simply visit the application's website and begin exploring upcoming events in your area.

## Usage

You can use Meet to:
- Filter events by city
- Expand and collapse event details
- Specify the number of events to display
- Access the app when offline
- Add a shortcut to the app on your device's home screen
- View charts that visualize event details

## Serverless Functions in Meet

Meet uses serverless functions to enhance the efficiency and scalability of its backend processes. Serverless functions are employed to:
- **Fetch and Cache Event Data:** Functions periodically fetch the latest event data from external APIs, cache the results, and serve them to users, ensuring the app remains responsive and up-to-date even when offline.
- **Process User Interactions:** When users filter events by city or change the number of displayed events, serverless functions dynamically fetch and process the relevant data, providing a seamless user experience.
- **Generate Event Charts:** Serverless functions aggregate and process event data to generate visualizations, such as charts displaying the distribution of upcoming events, without overloading the client-side application.

This approach ensures that the application remains responsive, scalable, and cost-effective by leveraging cloud-based serverless technologies.

## Contributing

If you'd like to contribute to the development of Meet, please feel free to submit a pull request or open an issue on the project's [GitHub repository](https://github.com/ffferchavez/meet).

## License

This project is licensed under the [MIT License](LICENSE).
