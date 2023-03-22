import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('Header component', () => {
  it('should render without crashing', () => {
    const {
      /* TODO */
    } = render(<Header />);
    // TODO: Add assertions here
  });

  it('should render navigation links with the correct labels', () => {
    const {
      /* TODO */
    } = render(<Header />);
    // TODO: Get the navigation links and assert that their labels match the values in the navLinks array
  });

  it('should apply the "active" class to the active navigation link', () => {
    const {
      /* TODO */
    } = render(<Header />);
    // TODO: Simulate a navigation event and assert that the corresponding link has the "active" class
  });

  // TODO: Add more test cases here
});
