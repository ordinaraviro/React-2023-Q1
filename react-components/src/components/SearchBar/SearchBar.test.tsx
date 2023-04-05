import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders without errors', () => {
    render(<SearchBar onSearch={() => {}} />);
  });

  it('sets the search term in localStorage when the search term changes', () => {
    const { getByRole } = render(<SearchBar onSearch={() => {}} />);
    const searchTerm = 'test';
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: searchTerm } });

    expect(localStorage.getItem('searchTerm')).toBe(searchTerm);
  });
});
