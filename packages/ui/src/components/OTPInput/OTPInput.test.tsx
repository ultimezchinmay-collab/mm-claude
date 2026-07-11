import { fireEvent, render, screen } from '@testing-library/react-native';

import { OTPInput } from './OTPInput';

describe('OTPInput', () => {
  it('renders the given number of boxes', () => {
    render(<OTPInput length={6} value={[]} onChange={() => {}} testID="otp" />);
    for (let i = 0; i < 6; i++) {
      expect(screen.getByTestId(`otp-${i}`)).toBeTruthy();
    }
  });

  it('calls onChange when a digit is entered', () => {
    const onChange = jest.fn();
    render(<OTPInput length={6} value={[]} onChange={onChange} testID="otp" />);
    fireEvent.changeText(screen.getByTestId('otp-0'), '5');
    expect(onChange).toHaveBeenCalledWith(['5']);
  });

  it('disables Resend OTP while a countdown is active', () => {
    const onResend = jest.fn();
    render(<OTPInput value={[]} onChange={() => {}} resendSeconds={30} onResend={onResend} />);
    fireEvent.press(screen.getByText('Resend OTP'));
    expect(onResend).not.toHaveBeenCalled();
  });
});
