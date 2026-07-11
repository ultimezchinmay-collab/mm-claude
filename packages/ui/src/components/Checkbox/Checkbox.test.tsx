import { fireEvent, render, screen } from '@testing-library/react-native';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders unchecked and checked without throwing', () => {
    render(<Checkbox testID="cb" />);
    expect(screen.getByTestId('cb')).toBeTruthy();
  });

  it('calls onChange with the toggled value when pressed', () => {
    const onChange = jest.fn();
    render(<Checkbox checked={false} onChange={onChange} testID="cb" />);
    fireEvent.press(screen.getByTestId('cb'));
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
