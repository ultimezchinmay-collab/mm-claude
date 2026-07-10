import { fireEvent, render, screen } from '@testing-library/react-native';

import { MultiSelectDropdown, type MultiSelectOption } from './MultiSelectDropdown';

const options: MultiSelectOption[] = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
];

describe('MultiSelectDropdown', () => {
  it('renders the placeholder when nothing is selected', () => {
    render(<MultiSelectDropdown label="Label" options={options} value={[]} onChange={() => {}} placeholder="Select here" />);
    expect(screen.getByText('Select here')).toBeTruthy();
  });

  it('renders a chip per selected option', () => {
    render(<MultiSelectDropdown label="Label" options={options} value={['option-1']} onChange={() => {}} />);
    expect(screen.getByText('Option 1')).toBeTruthy();
  });

  it('adds a value when an unselected option is pressed while open', () => {
    const onChange = jest.fn();
    render(<MultiSelectDropdown label="Label" options={options} value={[]} onChange={onChange} previewOpen />);
    fireEvent.press(screen.getByText('Option 1'));
    expect(onChange).toHaveBeenCalledWith(['option-1']);
  });
});
