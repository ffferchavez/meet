import { render, fireEvent } from "@testing-library/react";
import Event from "../components/Event";

const mockEvent = {
  summary: "Learn JavaScript",
  location: "London, UK",
  created: "2020-05-19T19:17:46.000Z",
  description:
    "Have you wondered how you can ask Google to show you the list...",
  start: { dateTime: "2020-05-19T16:00:00+02:00" },
  end: { dateTime: "2020-05-19T17:00:00+02:00" },
  eventType: "default",
};

describe("<Event /> component", () => {
  test("renders event's title", () => {
    const { queryByText } = render(<Event event={mockEvent} />);
    expect(queryByText(mockEvent.summary)).toBeInTheDocument();
  });

  test("renders event's start time", () => {
    const { queryByText } = render(<Event event={mockEvent} />);
    expect(
      queryByText(new Date(mockEvent.start.dateTime).toString())
    ).toBeInTheDocument();
  });

  test("renders event's location", () => {
    const { queryByText } = render(<Event event={mockEvent} />);
    expect(queryByText(mockEvent.location)).toBeInTheDocument();
  });

  test("renders event's show details button", () => {
    const { queryByText } = render(<Event event={mockEvent} />);
    expect(queryByText("Show Details")).toBeInTheDocument();
  });

  test("by default, event details should be hidden", () => {
    const { queryByText } = render(<Event event={mockEvent} />);
    expect(queryByText(mockEvent.description)).not.toBeInTheDocument();
  });

  test("shows details section when user clicks on show details button", async () => {
    const { queryByText, findByText } = render(<Event event={mockEvent} />);
    const button = queryByText("Show Details");
    fireEvent.click(button);
    expect(await findByText(mockEvent.description)).toBeInTheDocument();
  });

  test("hides details section when user clicks on hide details button", async () => {
    const { queryByText, findByText } = render(<Event event={mockEvent} />);
    fireEvent.click(queryByText("Show Details"));
    const button = await findByText("Hide Details");
    fireEvent.click(button);
    expect(queryByText(mockEvent.description)).not.toBeInTheDocument();
  });
});
