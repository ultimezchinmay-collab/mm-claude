import { fireEvent, render, screen } from '@testing-library/react-native';

import { PasswordField } from './PasswordField';

describe('PasswordField', () => {
  it('renders its label', () => {
    render(<PasswordField label="Password" value="" onChangeText={() => {}} testID="password" />);
    expect(screen.getByText('Password')).toBeTruthy();
  });

  it('toggles visibility when the eye icon is pressed', () => {
    render(<PasswordField label="Password" value="secret" onChangeText={() => {}} testID="password" />);
    const input = screen.getByDisplayValue('secret');
    expect(input.props.secureTextEntry).toBe(true);

    fireEvent.press(screen.getByTestId('password-toggle'));
    expect(input.props.secureTextEntry).toBe(false);
  });
});
