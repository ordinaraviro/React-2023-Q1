import React from 'react';
import { render } from '@testing-library/react';
import Page404 from './Page404';

describe('Page404', () => {
  it('should render the 404 message', () => {
    const { getByText } = render(<Page404 />);
    const messageElement = getByText('404');
    expect(messageElement).toBeInTheDocument();
  });
});
