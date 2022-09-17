import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Component from './Component';

// === Concept
// Create user action
// Compare expected results

describe('Component', () => {
  test('has class on click', () => {
    render(<Component />);

    expect(screen.getByRole('button', { class: 'btn' })).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { class: 'btn' }));

    expect(screen.getByRole('button', { class: 'btn' })).toHaveClass('active');
  });
});
