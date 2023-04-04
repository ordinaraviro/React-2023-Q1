import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('should render all nav links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const linkElements = screen.getAllByRole('link');
    expect(linkElements).toHaveLength(3);
    expect(linkElements[0]).toHaveAttribute('href', '/');
    expect(linkElements[0]).toHaveTextContent('Main');
    expect(linkElements[1]).toHaveAttribute('href', '/form');
    expect(linkElements[1]).toHaveTextContent('Form');
    expect(linkElements[2]).toHaveAttribute('href', '/about');
    expect(linkElements[2]).toHaveTextContent('About');
  });

  it('should add active class to the active nav link', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <Header />
      </MemoryRouter>
    );
    const activeLinkElement = screen.getByRole('link', { name: 'Form' });
    expect(activeLinkElement).toHaveClass('active');
  });
});
