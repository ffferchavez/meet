import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, then }) => {
    given("the user opens the app", () => {});

    then("the event details should be hidden by default", () => {});
  });

  test("User can expand event details", ({ given, when, then }) => {
    given("the user has opened the app", () => {});

    when("the user clicks on an event", () => {});

    then("the event details should be displayed", () => {});
  });

  test("User can collapse event details", ({ given, and, when, then }) => {
    given("the user has opened the app", () => {});

    and("the event details are visible", () => {});

    when("the user clicks on the event again", () => {});

    then("the event details should be hidden", () => {});
  });
});
