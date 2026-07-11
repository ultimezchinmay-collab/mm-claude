import { fireEvent, render, screen } from '@testing-library/react-native';

import { PhoneNumberInput } from './PhoneNumberInput';

describe('PhoneNumberInput', () => {
  it('renders the country code and label', () => {
    render(<PhoneNumberInput label="Mobile Number" countryCode="+91" value="" onChangeText={() => {}} />);
    expect(screen.getByText('+91')).toBeTruthy();
    expect(screen.getByText('Mobile Number')).toBeTruthy();
  });

  it('calls onChangeText as the number is typed', () => {
    const onChangeText = jest.fn();
    render(<PhoneNumberInput label="Mobile Number" countryCode="+91" value="" onChangeText={onChangeText} testID="phone" />);
    fireEvent.changeText(screen.getByTestId('phone'), '8836490087');
    expect(onChangeText).toHaveBeenCalledWith('8836490087');
  });
});
