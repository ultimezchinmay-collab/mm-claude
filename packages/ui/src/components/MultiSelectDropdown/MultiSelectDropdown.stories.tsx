import { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';

import { MultiSelectDropdown, type MultiSelectOption } from './MultiSelectDropdown';
import { Example } from '../storyHelpers';

const options: MultiSelectOption[] = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
  { label: 'Option 5', value: 'option-5' },
  { label: 'Option 6', value: 'option-6' },
  { label: 'Option 7', value: 'option-7' },
];

const meta: Meta<typeof MultiSelectDropdown> = {
  title: 'Components/MultiSelectDropdown',
  component: MultiSelectDropdown,
  args: {
    label: 'Label',
    required: true,
    options,
    placeholder: 'Select here',
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelectDropdown>;

function Controlled(args: React.ComponentProps<typeof MultiSelectDropdown>) {
  const [value, setValue] = useState(args.value ?? []);
  return <MultiSelectDropdown {...args} value={value} onChange={setValue} />;
}

export const Default: Story = { render: (args) => <Controlled {...args} /> };
export const Open: Story = { render: (args) => <Controlled {...args} previewOpen /> };
export const Selected: Story = {
  render: (args) => <Controlled {...args} value={['option-1', 'option-3', 'option-7']} />,
};
export const Disabled: Story = { render: (args) => <Controlled {...args} disabled /> };

const vars = [
  '--color-neutral-300',
  '--color-neutral-500',
  '--color-neutral-600',
  '--color-primary-600',
  '--color-white-900',
  '--space-12',
  '--space-8',
  '--space-4',
  '--border-radius-8',
  '--type-family-primary',
  '--label',
  '--type-lh-label',
  '--caption',
  '--type-lh-caption',
  '--type-weight-medium-500',
];

export const AllVariants: Story = {
  render: () => (
    <View style={{ padding: 16 }}>
      <Example vars={vars}>
        <MultiSelectDropdown label="Label" required options={options} value={[]} onChange={() => {}} />
      </Example>
      <Example vars={['--color-secondary-600 (open)', '--color-neutral-100 (panel border)', ...vars]}>
        <MultiSelectDropdown label="Label" required options={options} value={[]} onChange={() => {}} previewOpen />
      </Example>
      <Example vars={['--color-primary-50 (chip bg)', '--color-primary-500 (chip border)', ...vars]}>
        <MultiSelectDropdown
          label="Label"
          required
          options={options}
          value={['option-1', 'option-3', 'option-7']}
          onChange={() => {}}
        />
      </Example>
    </View>
  ),
};
