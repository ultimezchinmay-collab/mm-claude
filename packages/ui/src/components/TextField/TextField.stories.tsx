import { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';

import { TextField } from './TextField';
import { Example } from '../storyHelpers';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  args: {
    label: 'Label',
    required: true,
    placeholder: 'Enter here',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

function Controlled(args: React.ComponentProps<typeof TextField>) {
  const [value, setValue] = useState(args.value ?? '');
  return <TextField {...args} value={value} onChangeText={setValue} />;
}

export const Default: Story = { render: (args) => <Controlled {...args} /> };
export const Hover: Story = { render: (args) => <Controlled {...args} previewState="hover" /> };
export const Active: Story = {
  render: (args) => <Controlled {...args} value="Qadir AK" previewState="focused" />,
};
export const Filled: Story = { render: (args) => <Controlled {...args} value="Qadir AK" /> };
export const WithHelperText: Story = {
  render: (args) => <Controlled {...args} helperText="Support Text" />,
};
export const WithError: Story = {
  render: (args) => <Controlled {...args} value="Qadir AK" error="Error helper text" />,
};
export const Disabled: Story = { render: (args) => <Controlled {...args} disabled /> };

const baseVars = ['--space-12', '--space-8', '--space-4', '--border-radius-8', '--type-family-primary', '--label', '--type-lh-label', '--caption', '--type-lh-caption', '--type-weight-medium-500'];

export const AllVariants: Story = {
  render: () => (
    <View style={{ padding: 16 }}>
      <Example vars={['--color-neutral-300', '--color-neutral-500', '--color-neutral-600', '--color-primary-600', '--color-white-900', ...baseVars]}>
        <TextField label="Label" required value="" onChangeText={() => {}} placeholder="Enter here" />
      </Example>
      <Example vars={['--color-neutral-500 (border)', '--color-neutral-500', '--color-neutral-600', '--color-primary-600', '--color-white-900', ...baseVars]}>
        <TextField
          label="Label"
          required
          value=""
          onChangeText={() => {}}
          placeholder="Enter here"
          previewState="hover"
        />
      </Example>
      <Example vars={['--color-secondary-600', '--color-neutral-900', '--color-neutral-600', '--color-primary-600', '--color-white-900', '--type-weight-bold-700', ...baseVars]}>
        <TextField
          label="Label"
          required
          value="Qadir AK"
          onChangeText={() => {}}
          previewState="focused"
        />
      </Example>
      <Example vars={['--color-neutral-300', '--color-neutral-900', '--color-neutral-600', '--color-primary-600', '--color-white-900', '--type-weight-bold-700', ...baseVars]}>
        <TextField label="Label" required value="Qadir AK" onChangeText={() => {}} />
      </Example>
      <Example vars={['--color-error-600', '--color-neutral-900', '--color-neutral-600', '--color-primary-600', '--color-white-900', '--type-weight-bold-700', ...baseVars]}>
        <TextField label="Label" required value="Qadir AK" onChangeText={() => {}} error="Error helper text" />
      </Example>
      <Example vars={['--color-neutral-100 (self-authored disabled)', '--color-neutral-500', '--color-neutral-600', '--color-white-900', ...baseVars]}>
        <TextField label="Label" required value="" onChangeText={() => {}} placeholder="Enter here" disabled />
      </Example>
    </View>
  ),
};
