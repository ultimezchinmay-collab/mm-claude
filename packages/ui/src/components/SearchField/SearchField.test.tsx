import { render, screen } from '@testing-library/react-native';

import { SearchField } from './SearchField';

describe('SearchField', () => {
  it('renders its placeholder', () => {
    render(<SearchField value="" onChangeText={() => {}} placeholder="Search by Location" />);
    expect(screen.getByPlaceholderText('Search by Location')).toBeTruthy();
  });

  it('renders the current value', () => {
    render(<SearchField value="clinic" onChangeText={() => {}} />);
    expect(screen.getByDisplayValue('clinic')).toBeTruthy();
  });
});
