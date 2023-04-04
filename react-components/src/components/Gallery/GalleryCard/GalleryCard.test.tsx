import React from 'react';
import { render } from '@testing-library/react';
import GalleryCard from './GalleryCard';

const mockPhoto = {
  id: '1',
  title: 'Mock photo',
  owner: 'Mock owner',
  secret: '123',
  server: '456',
  farm: 1,
  views: 100,
};

describe('GalleryCard', () => {
  it('should render the photo title and owner', () => {
    const { getByText } = render(<GalleryCard photo={mockPhoto} />);
    const titleElement = getByText(mockPhoto.title);
    const ownerElement = getByText(`by ${mockPhoto.owner}`);
    expect(titleElement).toBeInTheDocument();
    expect(ownerElement).toBeInTheDocument();
  });

  it('should render the photo views', () => {
    const { getByText } = render(<GalleryCard photo={mockPhoto} />);
    const viewsElement = getByText(`Views: ${mockPhoto.views}`);
    expect(viewsElement).toBeInTheDocument();
  });

  it('should render the photo image with correct src and alt', () => {
    const { getByRole } = render(<GalleryCard photo={mockPhoto} />);
    const imgElement = getByRole('img');
    expect(imgElement).toHaveAttribute(
      'src',
      `https://farm${mockPhoto.farm}.staticflickr.com/${mockPhoto.server}/${mockPhoto.id}_${mockPhoto.secret}_n.jpg`
    );
    expect(imgElement).toHaveAttribute('alt', mockPhoto.title);
  });
});
