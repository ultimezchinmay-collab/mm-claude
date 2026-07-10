import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';

import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  args: {
    label: 'Chip',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };
export const Disabled: Story = { args: { disabled: true } };
export const WithIcon: Story = { args: { icon: 'check' } };

export const AllStates: Story = {
  render: (args) => (
    <View style={{ flexDirection: 'row', gap: 8, padding: 16, flexWrap: 'wrap' }}>
      <Chip {...args} label="Default" />
      <Chip {...args} label="Selected" selected />
      <Chip {...args} label="Disabled" disabled />
      <Chip {...args} label="With icon" icon="check" />
    </View>
  ),
};
