import { fireEvent, render, screen } from '@testing-library/react-native';

import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

describe('Radio', () => {
  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    render(<Radio onPress={onPress} testID="radio" />);
    fireEvent.press(screen.getByTestId('radio'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});

describe('RadioGroup', () => {
  const options = [
    { label: 'Option 1', value: 'one' },
    { label: 'Option 2', value: 'two' },
  ];

  it('renders every option label', () => {
    render(<RadioGroup options={options} value={null} onChange={() => {}} />);
    expect(screen.getByText('Option 1')).toBeTruthy();
    expect(screen.getByText('Option 2')).toBeTruthy();
  });

  it('calls onChange with the pressed option value', () => {
    const onChange = jest.fn();
    render(<RadioGroup options={options} value="one" onChange={onChange} testID="group" />);
    fireEvent.press(screen.getByTestId('group-two'));
    expect(onChange).toHaveBeenCalledWith('two');
  });
});
