import { render, screen } from '@testing-library/react-native';

import { TextField } from './TextField';

describe('TextField', () => {
  it('renders its label', () => {
    render(<TextField label="Email" value="" onChangeText={() => {}} />);
    // Paper's outlined TextInput renders the label in two places (floating + placeholder position).
    expect(screen.getAllByText('Email').length).toBeGreaterThan(0);
  });

  it('renders the error message when provided', () => {
    render(<TextField label="Email" value="" onChangeText={() => {}} error="Required" />);
    expect(screen.getByText('Required')).toBeTruthy();
  });
});
