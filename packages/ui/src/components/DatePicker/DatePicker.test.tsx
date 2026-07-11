import { fireEvent, render, screen } from '@testing-library/react-native';

import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  it('renders the placeholder when no value is set', () => {
    render(<DatePicker label="Date" value={null} onChange={() => {}} />);
    expect(screen.getByText('Select Date')).toBeTruthy();
  });

  it('renders the formatted value', () => {
    render(<DatePicker label="Date" value={new Date(2026, 0, 12)} onChange={() => {}} />);
    expect(screen.getByText('12 Jan 2026')).toBeTruthy();
  });

  it('opens the calendar on press and calls onChange when a day is picked', () => {
    const onChange = jest.fn();
    render(<DatePicker label="Date" value={new Date(2026, 0, 12)} onChange={onChange} testID="date-picker" />);
    fireEvent.press(screen.getByTestId('date-picker'));
    fireEvent.press(screen.getByTestId('date-picker-calendar-day-2026-01-15'));
    expect(onChange).toHaveBeenCalledWith(new Date(2026, 0, 15));
  });
});
