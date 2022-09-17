import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  test('async', async () => {
    screen.debug();
    render(<Component />);
    screen.debug();

    const data = await screen.findByText('data is fetched');

    expect(data).toBeInTheDocument();
    screen.debug();
  });
});
