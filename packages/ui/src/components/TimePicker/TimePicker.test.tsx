import { fireEvent, render, screen } from '@testing-library/react-native';

import { TimePicker } from './TimePicker';

describe('TimePicker', () => {
  it('renders the placeholder when no value is set', () => {
    render(<TimePicker label="Time" value={null} onChange={() => {}} />);
    expect(screen.getByText('Select Time')).toBeTruthy();
  });

  it('renders the formatted value', () => {
    render(<TimePicker label="Time" value={new Date(2026, 0, 1, 16, 30)} onChange={() => {}} />);
    expect(screen.getByText('4:30 PM')).toBeTruthy();
  });

  it('opens the time selector on press and calls onChange when a period is picked', () => {
    const onChange = jest.fn();
    render(<TimePicker label="Time" value={new Date(2026, 0, 1, 9, 15)} onChange={onChange} testID="time-picker" />);
    fireEvent.press(screen.getByTestId('time-picker'));
    fireEvent.press(screen.getByTestId('time-picker-time-PM'));
    expect(onChange).toHaveBeenCalledWith(new Date(2026, 0, 1, 21, 15, 0, 0));
  });
});
