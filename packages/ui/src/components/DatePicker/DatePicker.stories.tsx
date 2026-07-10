import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';

import { DatePicker } from './DatePicker';
import { Example } from '../storyHelpers';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  args: {
    label: 'Date',
    required: true,
    value: '',
    onPress: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};
export const WithValue: Story = { args: { value: '12 Jan 2026' } };
export const Disabled: Story = { args: { disabled: true } };

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
        <DatePicker label="Date" required value="" onPress={() => {}} />
      </Example>
      <Example vars={['--type-weight-bold-700', ...vars]}>
        <DatePicker label="Date" required value="12 Jan 2026" onPress={() => {}} />
      </Example>
      <Example vars={['--color-neutral-100 (self-authored disabled)', ...vars]}>
        <DatePicker label="Date" required value="" onPress={() => {}} disabled />
      </Example>
    </View>
  ),
};
