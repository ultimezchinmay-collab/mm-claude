import { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';

import { PasswordField } from './PasswordField';
import { Example } from '../storyHelpers';

const meta: Meta<typeof PasswordField> = {
  title: 'Components/PasswordField',
  component: PasswordField,
  args: {
    label: 'Label',
    required: true,
    placeholder: 'Enter Password',
  },
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

function Controlled(args: React.ComponentProps<typeof PasswordField>) {
  const [value, setValue] = useState(args.value ?? '');
  return <PasswordField {...args} value={value} onChangeText={setValue} />;
}

export const Hidden: Story = { render: (args) => <Controlled {...args} /> };
export const Shown: Story = { render: (args) => <Controlled {...args} value="hunter2" defaultVisible /> };
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
        <PasswordField label="Label" required value="" onChangeText={() => {}} placeholder="Enter Password" />
      </Example>
      <Example vars={['--type-weight-bold-700', ...vars]}>
        <PasswordField label="Label" required value="hunter2" onChangeText={() => {}} defaultVisible />
      </Example>
      <Example vars={['--color-neutral-100 (self-authored disabled)', ...vars]}>
        <PasswordField label="Label" required value="" onChangeText={() => {}} placeholder="Enter Password" disabled />
      </Example>
    </View>
  ),
};
