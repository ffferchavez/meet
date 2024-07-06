Feature: Show/Hide Event Details

Scenario: An event element is collapsed by default
  Given the user opens the app
  Then the event details should be hidden by default

Scenario: User can expand event details
  Given the user has opened the app
  When the user clicks on an event
  Then the event details should be displayed

Scenario: User can collapse event details
  Given the user has opened the app
  And the event details are visible
  When the user clicks on the event again
  Then the event details should be hidden
