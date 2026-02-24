import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../pages/Contact';

describe('Contact form delivery mode', () => {
  it('shows email-draft fallback UX when API endpoint is not configured', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: 'Create Email Draft' })).toBeInTheDocument();
    expect(
      screen.getByText(
        /No API endpoint configured\. We will open your email client with a pre-filled draft\./i,
      ),
    ).toBeInTheDocument();
  });
});
