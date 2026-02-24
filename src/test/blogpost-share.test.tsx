import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlogPost from '../pages/BlogPost';

describe('Blog share controls', () => {
  it('shows a visible fallback error when clipboard copy fails', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      const writeText = vi.fn().mockRejectedValue(new Error('clipboard denied'));
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: { writeText },
      });

      render(
        <MemoryRouter initialEntries={['/blog/validate-startup-idea-india']}>
          <Routes>
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </MemoryRouter>,
      );

      fireEvent.click(screen.getByRole('button', { name: 'Share Article' }));
      fireEvent.click(screen.getByTitle('Copy Link'));

      await waitFor(() => {
        expect(
          screen.getByText('Copy failed. Please copy the URL from your browser address bar.'),
        ).toBeInTheDocument();
      });

      expect(writeText).toHaveBeenCalled();
    } finally {
      consoleErrorSpy.mockRestore();
    }
  });
});
