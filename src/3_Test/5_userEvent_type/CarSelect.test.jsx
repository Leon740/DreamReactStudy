import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CarSelect from './CarSelect';

// === Concept
// Create user action
// Compare expected results

describe('CarSelect', () => {
  describe('value', () => {
    test('+', () => {
      const value = 'Toyota Supra';

      render(<CarSelect value={value} />);

      expect(screen.getByRole('textbox', { id: 'input-id' })).toBeInTheDocument();
      expect(screen.getByRole('textbox', { id: 'input-id' })).toHaveValue(value);
    });

    test('-', () => {
      render(<CarSelect />);

      expect(screen.getByRole('textbox', { id: 'input-id' })).toBeInTheDocument();
      expect(screen.getByRole('textbox', { id: 'input-id' })).toHaveValue('BMW M4 Coupe');
    });
  });

  describe('onChange', () => {
    test('+', () => {
      const onChange = jest.fn();

      render(<CarSelect onChange={onChange} />);

      userEvent.type(screen.getByRole('textbox', { id: 'input-id' }), 'Supra');
      expect(onChange).toHaveBeenCalledTimes(5);
    });
  });
});
