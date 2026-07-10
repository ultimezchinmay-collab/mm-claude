import { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';

import { SearchField } from './SearchField';
import { Example } from '../storyHelpers';

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  args: {
    placeholder: 'Search by Location',
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

function Controlled(args: React.ComponentProps<typeof SearchField>) {
  const [value, setValue] = useState(args.value ?? '');
  return <SearchField {...args} value={value} onChangeText={setValue} />;
}

export const Default: Story = { render: (args) => <Controlled {...args} /> };
export const Hover: Story = { render: (args) => <Controlled {...args} previewState="hover" /> };
export const Focused: Story = { render: (args) => <Controlled {...args} previewState="focused" /> };
export const Disabled: Story = { render: (args) => <Controlled {...args} disabled /> };

const vars = ['--space-12', '--space-8', '--border-radius-8', '--type-weight-medium-500', '--label', '--type-lh-label'];

export const AllVariants: Story = {
  render: () => (
    <View style={{ padding: 16 }}>
      <Example vars={['--color-neutral-100', ...vars]}>
        <SearchField value="" onChangeText={() => {}} placeholder="Search by Location" />
      </Example>
      <Example vars={['--color-neutral-300 (self-authored hover)', ...vars]}>
        <SearchField value="" onChangeText={() => {}} placeholder="Search by Location" previewState="hover" />
      </Example>
      <Example vars={['--color-secondary-600', ...vars]}>
        <SearchField value="" onChangeText={() => {}} placeholder="Search by Location" previewState="focused" />
      </Example>
      <Example vars={['--color-neutral-100 (disabled)', ...vars]}>
        <SearchField value="" onChangeText={() => {}} placeholder="Search by Location" disabled />
      </Example>
    </View>
  ),
};
