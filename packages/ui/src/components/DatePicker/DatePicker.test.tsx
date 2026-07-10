import { fireEvent, render, screen } from '@testing-library/react-native';

import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  it('renders the placeholder when no value is set', () => {
    render(<DatePicker label="Date" value="" onPress={() => {}} />);
    expect(screen.getByText('Select Date')).toBeTruthy();
  });

  it('renders the provided value', () => {
    render(<DatePicker label="Date" value="12 Jan 2026" onPress={() => {}} />);
    expect(screen.getByText('12 Jan 2026')).toBeTruthy();
  });

  it('calls onPress when tapped', () => {
    const onPress = jest.fn();
    render(<DatePicker label="Date" value="" onPress={onPress} testID="date-picker" />);
    fireEvent.press(screen.getByTestId('date-picker'));
    expect(onPress).toHaveBeenCalled();
  });
});
