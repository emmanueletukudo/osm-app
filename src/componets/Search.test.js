import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Search from "./Search";


jest.mock('./../api/location');
test("should render search input and button", () => {
  const { getByTestId } = render(<Search />);
  const searchInput = getByTestId("search-input");
  const searchBtn = getByTestId("search-btn");
  expect(searchBtn.textContent).toBe("Search");
  expect(searchBtn.disabled).toBe(true);
  expect(searchInput.value).toBe("");
})

test("check if input change works", async () => {
  const { getByTestId } = render(<Search />);
  const searchInput = getByTestId("search-input");
  fireEvent.change(searchInput, {
    target: {
      value: "united"
    }
  });
  await waitFor(() => {
    expect(searchInput.value).toBe("united");
  })
})

test("renders search dropdwon", async () => {
  const { getByTestId, getAllByTestId } = render(<Search />);
  const searchInput = getByTestId("search-input");
  fireEvent.change(searchInput, {
    target: {
      value: "united"
    }
  });
  const searchBtn = getByTestId("search-btn");
  await waitFor(() => expect(searchInput.value).toBe("united"));
  fireEvent.click(searchBtn);
  await waitFor(() => {
    const placesUl = getAllByTestId("places-list");
    expect(placesUl.length).toBeGreaterThan(0);
  });
})
