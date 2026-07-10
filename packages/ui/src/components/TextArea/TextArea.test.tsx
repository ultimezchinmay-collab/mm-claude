import { render, screen } from '@testing-library/react-native';

import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('renders its label', () => {
    render(<TextArea label="Notes" value="" onChangeText={() => {}} />);
    expect(screen.getByText('Notes')).toBeTruthy();
  });

  it('renders the character counter when maxLength is set', () => {
    render(<TextArea label="Notes" value="hi" onChangeText={() => {}} maxLength={500} />);
    expect(screen.getByText('2 / 500 characters')).toBeTruthy();
  });

  it('renders the error message when provided', () => {
    render(<TextArea label="Notes" value="" onChangeText={() => {}} error="Required" />);
    expect(screen.getByText('Required')).toBeTruthy();
  });
});
