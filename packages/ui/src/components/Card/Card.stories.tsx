import { Text } from 'react-native-paper';
import type { Meta, StoryObj } from '@storybook/react-native';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'Card title',
    subtitle: 'Card subtitle',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: { variant: 'elevated' },
  render: (args) => (
    <Card {...args}>
      <Text variant="bodyMedium">Card content goes here.</Text>
    </Card>
  ),
};
export const Outlined: Story = { ...Elevated, args: { variant: 'outlined' } };
export const Filled: Story = { ...Elevated, args: { variant: 'filled' } };
