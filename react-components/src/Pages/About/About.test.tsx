import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('should render the About text', () => {
    const { getByText } = render(<About />);
    const messageElement = getByText(
      'This app allows you to search and view photos from the Flickr.'
    );
    expect(messageElement).toBeInTheDocument();
  });
});
