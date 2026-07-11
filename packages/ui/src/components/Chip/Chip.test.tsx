import { fireEvent, render, screen } from '@testing-library/react-native';

import { Chip } from './Chip';

describe('Chip', () => {
  it('renders its label', () => {
    render(<Chip label="Cardiology" />);
    expect(screen.getByText('Cardiology')).toBeTruthy();
  });

  it('renders selected and disabled states without throwing', () => {
    render(<Chip label="Cardiology" selected disabled />);
    expect(screen.getByText('Cardiology')).toBeTruthy();
  });

  it('only shows the close icon when selected, and fires onClose when pressed', () => {
    const onClose = jest.fn();
    render(<Chip label="Cardiology" selected onClose={onClose} testID="chip" />);
    fireEvent.press(screen.getByTestId('chip-close'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
