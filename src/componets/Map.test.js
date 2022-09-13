import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Map from "./Map";
import Search from "./Search";

jest.mock("../api/location");
test('renders map', () => {
  const { container, getByTestId } = render(<Map />);
  const map = container.getElementsByClassName("leaflet-container")[0]
  expect(map).toBeInTheDocument();
});

test("renders mapmaker on place list click", async () => {
  const { getByTestId, getAllByTestId } = render(<Search />);
  const searchInput = getByTestId("search-input");
  fireEvent.change(searchInput, {
    target: {
      value: "united",
    }
  })
  await waitFor(() => expect(searchInput.value).toBe("united"));
  const searchBtn = getByTestId("search-btn");
  const { container } = render(<Map />)
  fireEvent.click(searchBtn)
  await waitFor(() => {
    const placesUl = getAllByTestId("places-list");
    const mapIcon = container.getElementsByClassName("leaflet-marker-icon")[0]
    waitFor(() => {
      fireEvent.click(item)
      const item = getByTestId("place-item-0");
      expect(mapIcon).toBeInTheDocument();
    })
    expect(placesUl.length).toBeGreaterThan(0);
  })
})
