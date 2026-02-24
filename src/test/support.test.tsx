import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Support from '../pages/Support';

const renderSupportPage = () => {
  return render(
    <MemoryRouter>
      <Support />
    </MemoryRouter>,
  );
};

describe('Support page widgets', () => {
  it('filters FAQs by category and toggles back to all topics', () => {
    renderSupportPage();

    expect(screen.getByText('Showing 8 results.')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Billing' }));

    expect(screen.getByText('Showing 1 result.')).toBeInTheDocument();
    expect(screen.getByText('Do you offer refunds?')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Billing' }));

    expect(screen.getByText('Showing 8 results.')).toBeInTheDocument();
  });

  it('resets an open FAQ when active filters remove that item', () => {
    renderSupportPage();

    fireEvent.click(screen.getByRole('button', { name: 'What is AntarangAI?' }));
    expect(
      screen.getByText(
        /AI-powered platform designed specifically for Indian entrepreneurs/i,
      ),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Search for help...'), {
      target: { value: 'refund' },
    });

    expect(
      screen.queryByText(
        /AI-powered platform designed specifically for Indian entrepreneurs/i,
      ),
    ).not.toBeInTheDocument();
    expect(screen.getByText('Showing 1 result.')).toBeInTheDocument();
  });
});
