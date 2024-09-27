import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

describe('Header', () => {
  it('renders Home and About links', () => {
    render(
      <MemoryRouter>
        {' '}
        <Header />{' '}
      </MemoryRouter>
    );
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About us' });
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
  it('sets active class on active link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        {' '}
        <Header />{' '}
      </MemoryRouter>
    );
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About us' });
    expect(homeLink).toHaveClass('link-active');
    expect(aboutLink).not.toHaveClass('link-active');
  });
});
