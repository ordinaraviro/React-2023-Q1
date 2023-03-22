import { render, screen } from '@testing-library/react';
import React from 'react';
import Gallery from './Gallery';

describe('Gallery component', () => {
  it('should render "Loading..." text when no data is available', () => {
    render(<Gallery searchText="" perPage={10} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render gallery items when data is available', async () => {
    render(<Gallery searchText="test" perPage={1} />);

    // Wait for the gallery items to be rendered
    const galleryItems = await screen.findAllByRole('img');
    expect(galleryItems).toHaveLength(1);

    // Verify that the gallery item contains the expected data
    expect(galleryItems[0]).toHaveAttribute(
      'src',
      'https://farm1.staticflickr.com/test-server/1_test-secret_n.jpg'
    );
    expect(galleryItems[0]).toHaveAttribute('alt', 'Test Photo');
    expect(screen.getByText('Test Photo')).toBeInTheDocument();
    expect(screen.getByText('by Test Owner')).toBeInTheDocument();
    expect(screen.getByText('Views: 10')).toBeInTheDocument();
  });
});
