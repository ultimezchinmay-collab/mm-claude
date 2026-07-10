import { fireEvent, render, screen } from '@testing-library/react-native';

import { Dropdown, type DropdownOption } from './Dropdown';

const options: DropdownOption[] = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
];

describe('Dropdown', () => {
  it('renders the placeholder when nothing is selected', () => {
    render(<Dropdown label="Label" options={options} value={null} onChange={() => {}} placeholder="Select here" />);
    expect(screen.getByText('Select here')).toBeTruthy();
  });

  it('renders the selected option label', () => {
    render(<Dropdown label="Label" options={options} value="option-2" onChange={() => {}} />);
    expect(screen.getByText('Option 2')).toBeTruthy();
  });

  it('calls onChange when an option is pressed after opening', () => {
    const onChange = jest.fn();
    render(<Dropdown label="Label" options={options} value={null} onChange={onChange} previewOpen />);
    fireEvent.press(screen.getByText('Option 1'));
    expect(onChange).toHaveBeenCalledWith('option-1');
  });
});
