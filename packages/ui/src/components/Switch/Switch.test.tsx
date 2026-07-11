import { fireEvent, render, screen } from '@testing-library/react-native';

import { Switch } from './Switch';

describe('Switch', () => {
  it('renders on and off without throwing', () => {
    render(<Switch value={false} testID="sw" />);
    expect(screen.getByTestId('sw')).toBeTruthy();
  });

  it('calls onValueChange with the toggled value when pressed', () => {
    const onValueChange = jest.fn();
    render(<Switch value={false} onValueChange={onValueChange} testID="sw" />);
    fireEvent.press(screen.getByTestId('sw'));
    expect(onValueChange).toHaveBeenCalledWith(true);
  });
});
