import { render, screen } from '@testing-library/react';
import CarDisplay from './CarDisplay';

describe('CarDisplay', () => {
  describe('props', () => {
    test('+', () => {
      const props = {
        car: 'Toyota Supra',
      };

      render(<CarDisplay {...props} />);

      expect(screen.getByText(props.car)).toBeInTheDocument();
    });

    test('-', () => {
      render(<CarDisplay />);

      expect(screen.getByText('BMW M4 Coupe')).toBeInTheDocument();
    });
  });
});
