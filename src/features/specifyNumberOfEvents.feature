Feature: Specify Number of Events

Scenario: When user hasn't specified a number, 32 events are shown by default
  Given the user opens the app
  Then the user should see 32 events

Scenario: User can change the number of events displayed
  Given the user has opened the app
  When the user changes the number of events to 5
  Then the user should see 5 events
