import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Calendar04Icon, Location02Icon } from '@hugeicons/core-free-icons';

import { lightColors } from '../../tokens';
import { Button } from './Button';
import { Example, LABEL_TYPE_VARS, LAYOUT_VARS } from '../storyHelpers';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons',
  component: Button,
  args: {
    label: 'Button Label',
    onPress: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

function icons(color: string) {
  return {
    leftIcon: <HugeiconsIcon icon={Location02Icon} size={16} color={color} />,
    rightIcon: <HugeiconsIcon icon={Calendar04Icon} size={16} color={color} />,
  };
}

const onLight = icons(lightColors.buttonTextIconLight);
const onPrimary = icons(lightColors.primary[600]);
const onPrimaryDim = icons(lightColors.primary[500]);

export const Primary: Story = { args: { variant: 'primary', ...onLight } };
export const PrimaryHover: Story = { args: { variant: 'primary', previewState: 'hover', ...onLight } };
export const PrimaryDisabled: Story = { args: { variant: 'primary', disabled: true, ...onLight } };

export const Secondary: Story = { args: { variant: 'secondary', label: 'View PDF', ...onPrimary } };
export const SecondaryHover: Story = {
  args: { variant: 'secondary', label: 'View PDF', previewState: 'hover', ...onPrimary },
};
export const SecondaryDisabled: Story = {
  args: { variant: 'secondary', label: 'View PDF', disabled: true, ...onPrimaryDim },
};

export const TextLink: Story = { args: { variant: 'text-link', label: 'Skip To Home', ...onPrimary } };
export const TextLinkHover: Story = {
  args: { variant: 'text-link', label: 'Skip To Home', previewState: 'hover', ...onPrimary },
};
export const TextLinkDisabled: Story = {
  args: { variant: 'text-link', label: 'Skip To Home', disabled: true, ...onPrimaryDim },
};

const primaryVars = (color: string) => [
  `--color-${color}`,
  '--color-button-text-icon-light',
  ...LAYOUT_VARS,
  ...LABEL_TYPE_VARS,
];
const secondaryVars = (border: string, label: string, bg?: string) => [
  ...(bg ? [`--color-${bg}`] : []),
  `--color-${border}`,
  `--color-${label}`,
  ...LAYOUT_VARS,
  ...LABEL_TYPE_VARS,
];
const textLinkVars = (label: string) => [`--color-${label}`, '--space-4', ...LABEL_TYPE_VARS];

export const AllVariants: Story = {
  render: () => (
    <View style={{ padding: 16 }}>
      <Example vars={primaryVars('primary-600')}>
        <Button variant="primary" label="Button Label" {...onLight} onPress={() => {}} />
      </Example>
      <Example vars={primaryVars('primary-900')}>
        <Button variant="primary" label="Button Label" previewState="hover" {...onLight} onPress={() => {}} />
      </Example>
      <Example vars={primaryVars('primary-500')}>
        <Button variant="primary" label="Button Label" disabled {...onLight} onPress={() => {}} />
      </Example>

      <Example vars={secondaryVars('neutral-100', 'primary-600')}>
        <Button variant="secondary" label="View PDF" {...onPrimary} onPress={() => {}} />
      </Example>
      <Example vars={secondaryVars('primary-500', 'primary-600', 'primary-50')}>
        <Button variant="secondary" label="View PDF" previewState="hover" {...onPrimary} onPress={() => {}} />
      </Example>
      <Example vars={secondaryVars('neutral-100', 'primary-500')}>
        <Button variant="secondary" label="View PDF" disabled {...onPrimaryDim} onPress={() => {}} />
      </Example>

      <Example vars={textLinkVars('primary-600')}>
        <Button variant="text-link" label="Skip To Home" {...onPrimary} onPress={() => {}} />
      </Example>
      <Example vars={textLinkVars('primary-600')}>
        <Button variant="text-link" label="Skip To Home" previewState="hover" {...onPrimary} onPress={() => {}} />
      </Example>
      <Example vars={textLinkVars('primary-500')}>
        <Button variant="text-link" label="Skip To Home" disabled {...onPrimaryDim} onPress={() => {}} />
      </Example>
    </View>
  ),
};
