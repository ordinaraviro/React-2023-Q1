import { render } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  it('should render without crashing', () => {
    const onSearch = jest.fn();
    const {
      /* TODO */
    } = render(<SearchBar onSearch={onSearch} />);
    // TODO: Add assertions here
  });

  it('should update the search term on input change', () => {
    const onSearch = jest.fn();
    const {
      /* TODO */
    } = render(<SearchBar onSearch={onSearch} />);
    // TODO: Simulate an input change event and add assertions here
  });

  it('should call the onSearch prop with the search term on button click', () => {
    const onSearch = jest.fn();
    const {
      /* TODO */
    } = render(<SearchBar onSearch={onSearch} />);
    // TODO: Simulate a button click event and add assertions here
  });

  // TODO: Add more test cases here
});
