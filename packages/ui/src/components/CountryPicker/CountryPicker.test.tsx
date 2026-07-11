import { fireEvent, render, screen } from '@testing-library/react-native';

import { CountryPicker, type CountryOption } from './CountryPicker';

const options: CountryOption[] = [
  { name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { name: 'United States', dialCode: '+1', flag: '🇺🇸' },
];

describe('CountryPicker', () => {
  it('renders the placeholder when nothing is selected', () => {
    render(<CountryPicker label="Country" options={options} value={null} onChange={() => {}} placeholder="Select Country" />);
    expect(screen.getByText('Select Country')).toBeTruthy();
  });

  it('renders the selected country name', () => {
    render(<CountryPicker label="Country" options={options} value={options[0]} onChange={() => {}} />);
    expect(screen.getByText('India')).toBeTruthy();
  });

  it('calls onChange when an option is pressed after opening', () => {
    const onChange = jest.fn();
    render(<CountryPicker label="Country" options={options} value={null} onChange={onChange} previewOpen />);
    fireEvent.press(screen.getByText('United States'));
    expect(onChange).toHaveBeenCalledWith(options[1]);
  });
});
