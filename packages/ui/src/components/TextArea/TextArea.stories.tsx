import { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';

import { TextArea } from './TextArea';
import { Example } from '../storyHelpers';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    label: 'Label',
    required: true,
    placeholder: 'Add description here',
    maxLength: 500,
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

function Controlled(args: React.ComponentProps<typeof TextArea>) {
  const [value, setValue] = useState(args.value ?? '');
  return <TextArea {...args} value={value} onChangeText={setValue} />;
}

export const Default: Story = { render: (args) => <Controlled {...args} /> };
export const WithError: Story = {
  render: (args) => <Controlled {...args} value="Some notes" error="Error helper text" />,
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
        <TextArea label="Label" required value="" onChangeText={() => {}} placeholder="Add description here" maxLength={500} />
      </Example>
      <Example vars={['--color-error-600', ...vars]}>
        <TextArea
          label="Label"
          required
          value="Some notes"
          onChangeText={() => {}}
          error="Error helper text"
        />
      </Example>
      <Example vars={['--color-neutral-100 (self-authored disabled)', ...vars]}>
        <TextArea label="Label" required value="" onChangeText={() => {}} placeholder="Add description here" disabled />
      </Example>
    </View>
  ),
};
