import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Map from "./Map";

test('renders map', () => {
  const { container, getByTestId } = render(<Map />);
  const map = container.getElementsByClassName("leaflet-container")[0]
  expect(map).toBeInTheDocument();
});
