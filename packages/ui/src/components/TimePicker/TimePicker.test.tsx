import { fireEvent, render, screen } from '@testing-library/react-native';

import { TimePicker } from './TimePicker';

describe('TimePicker', () => {
  it('renders the placeholder when no value is set', () => {
    render(<TimePicker label="Time" value="" onPress={() => {}} />);
    expect(screen.getByText('Select Time')).toBeTruthy();
  });

  it('renders the provided value', () => {
    render(<TimePicker label="Time" value="4:30 PM" onPress={() => {}} />);
    expect(screen.getByText('4:30 PM')).toBeTruthy();
  });

  it('calls onPress when tapped', () => {
    const onPress = jest.fn();
    render(<TimePicker label="Time" value="" onPress={onPress} testID="time-picker" />);
    fireEvent.press(screen.getByTestId('time-picker'));
    expect(onPress).toHaveBeenCalled();
  });
});
