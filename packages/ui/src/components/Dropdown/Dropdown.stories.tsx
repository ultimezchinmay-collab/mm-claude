import { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';

import { Dropdown, type DropdownOption } from './Dropdown';
import { Example } from '../storyHelpers';

const options: DropdownOption[] = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    label: 'Label',
    required: true,
    options,
    placeholder: 'Select here',
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

function Controlled(args: React.ComponentProps<typeof Dropdown>) {
  const [value, setValue] = useState(args.value ?? null);
  return <Dropdown {...args} value={value} onChange={setValue} />;
}

export const Default: Story = { render: (args) => <Controlled {...args} /> };
export const Open: Story = { render: (args) => <Controlled {...args} previewOpen /> };
export const Selected: Story = { render: (args) => <Controlled {...args} value="option-2" /> };
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
        <Dropdown label="Label" required options={options} value={null} onChange={() => {}} />
      </Example>
      <Example vars={['--color-secondary-600 (open)', '--color-neutral-100 (panel border)', ...vars]}>
        <Dropdown label="Label" required options={options} value={null} onChange={() => {}} previewOpen />
      </Example>
      <Example vars={['--type-weight-bold-700', ...vars]}>
        <Dropdown label="Label" required options={options} value="option-2" onChange={() => {}} />
      </Example>
    </View>
  ),
};
