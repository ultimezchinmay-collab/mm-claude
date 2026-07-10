import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

function Controlled(args: React.ComponentProps<typeof TextField>) {
  const [value, setValue] = useState('');
  return <TextField {...args} value={value} onChangeText={setValue} />;
}

export const Default: Story = { render: (args) => <Controlled {...args} /> };
export const WithError: Story = {
  render: (args) => <Controlled {...args} error="This field is required" />,
};
export const Disabled: Story = { render: (args) => <Controlled {...args} disabled /> };
