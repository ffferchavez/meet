import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 events are shown by default", ({
    given,
    then,
  }) => {
    given("the user opens the app", () => {});

    then(/^the user should see (\d+) events$/, (arg0) => {});
  });

  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    given("the user has opened the app", () => {});

    when(/^the user changes the number of events to (\d+)$/, (arg0) => {});

    then(/^the user should see (\d+) events$/, (arg0) => {});
  });
});
