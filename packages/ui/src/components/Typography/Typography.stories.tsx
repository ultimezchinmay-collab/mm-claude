import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Foundations/Typography',
  component: Typography,
  args: {
    children: 'The quick brown fox',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 8, padding: 16 }}>
      <Typography variant="displaySmall">displaySmall</Typography>
      <Typography variant="headlineMedium">headlineMedium</Typography>
      <Typography variant="titleLarge">titleLarge</Typography>
      <Typography variant="titleMedium">titleMedium</Typography>
      <Typography variant="bodyLarge">bodyLarge</Typography>
      <Typography variant="bodyMedium">bodyMedium</Typography>
      <Typography variant="bodySmall">bodySmall</Typography>
      <Typography variant="labelLarge">labelLarge</Typography>
      <Typography variant="labelSmall">labelSmall</Typography>
    </View>
  ),
};
