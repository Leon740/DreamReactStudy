import { render, screen } from '@testing-library/react';
import Child from './Child';

// === Concept
// Get element, compare it
// get = markup which exists already
// query = markup which appears after logic or actions
// find = markup which appears after async actions

describe('List', () => {
  describe('props', () => {
    test('+', () => {
      const listData = ['React', 'Redux', 'TypeScript'];
      render(<Child list={listData} />);

      // draw all DOM to console
      // screen.debug();

      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Redux')).toBeInTheDocument();
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      // expect(screen.getByText('Next')).toBeInTheDocument();

      expect(screen.getByRole('list')).toBeInTheDocument();

      expect(screen.queryByRole('list')).not.toBeNull();
    });

    test('-', () => {
      render(<Child />);

      expect(screen.queryByText('React')).not.toBeInTheDocument();
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
      expect(screen.queryByRole('list')).toBeNull();
    });
  });
});
