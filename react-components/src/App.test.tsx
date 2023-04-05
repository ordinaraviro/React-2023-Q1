import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('renders the header', () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const header = getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders the main page when the URL is "/"', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const mainPage = getByText(/Main/i);
    expect(mainPage).toBeInTheDocument();
  });

  it('renders the form page when the URL is "/form"', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );

    const formPage = getByText(/Form/i);
    expect(formPage).toBeInTheDocument();
  });

  it('renders the about page when the URL is "/about"', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    const aboutPage = getByText(/About/i);
    expect(aboutPage).toBeInTheDocument();
  });

  it('renders the 404 page when the URL is unknown', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );

    const page404 = getByText(/404/i);
    expect(page404).toBeInTheDocument();
  });
});
