import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { ArrowLeft01Icon, Location02Icon } from '@hugeicons/core-free-icons';

import { lightColors } from '../../tokens';
import { IconButton } from './IconButton';
import { Example } from '../storyHelpers';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons',
  component: IconButton,
  args: {
    icon: <HugeiconsIcon icon={Location02Icon} size={16} color={lightColors.buttonTextIconLight} />,
    onPress: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const iconLayoutVars = ['--space-8', '--border-radius-8'];

const pinOn = (color: string) => <HugeiconsIcon icon={Location02Icon} size={16} color={color} />;
const backArrow = (color: string) => <HugeiconsIcon icon={ArrowLeft01Icon} size={20} color={color} />;

export const IconPrimary: Story = { args: { variant: 'primary', icon: pinOn(lightColors.buttonTextIconLight) } };
export const IconPrimaryHover: Story = {
  args: { variant: 'primary', previewState: 'hover', icon: pinOn(lightColors.buttonTextIconLight) },
};
export const IconPrimaryDisabled: Story = {
  args: { variant: 'primary', disabled: true, icon: pinOn(lightColors.buttonTextIconLight) },
};

export const IconSecondary: Story = { args: { variant: 'secondary', icon: pinOn(lightColors.primary[600]) } };
export const IconSecondaryHover: Story = {
  args: { variant: 'secondary', previewState: 'hover', icon: pinOn(lightColors.primary[600]) },
};
export const IconSecondaryDisabled: Story = {
  args: { variant: 'secondary', disabled: true, icon: pinOn(lightColors.primary[500]) },
};

export const IconBack: Story = { args: { variant: 'back', icon: backArrow(lightColors.neutral[900]) } };
export const IconBackHover: Story = {
  args: { variant: 'back', icon: backArrow(lightColors.neutral[900]), previewState: 'hover' },
};

export const IconAllVariants: Story = {
  render: () => (
    <View style={{ padding: 16 }}>
      <Example vars={['--color-primary-600', ...iconLayoutVars]}>
        <IconButton variant="primary" icon={pinOn(lightColors.buttonTextIconLight)} onPress={() => {}} />
      </Example>
      <Example vars={['--color-primary-900', ...iconLayoutVars]}>
        <IconButton
          variant="primary"
          icon={pinOn(lightColors.buttonTextIconLight)}
          previewState="hover"
          onPress={() => {}}
        />
      </Example>
      <Example vars={['--color-primary-500', ...iconLayoutVars]}>
        <IconButton variant="primary" icon={pinOn(lightColors.buttonTextIconLight)} disabled onPress={() => {}} />
      </Example>

      <Example vars={['--color-neutral-100', ...iconLayoutVars]}>
        <IconButton variant="secondary" icon={pinOn(lightColors.primary[600])} onPress={() => {}} />
      </Example>
      <Example vars={['--color-primary-50', '--color-primary-500', ...iconLayoutVars]}>
        <IconButton
          variant="secondary"
          icon={pinOn(lightColors.primary[600])}
          previewState="hover"
          onPress={() => {}}
        />
      </Example>
      <Example vars={['--color-neutral-100', ...iconLayoutVars]}>
        <IconButton variant="secondary" icon={pinOn(lightColors.primary[500])} disabled onPress={() => {}} />
      </Example>

      <Example vars={['--color-neutral-100', ...iconLayoutVars]}>
        <IconButton variant="back" icon={backArrow(lightColors.neutral[900])} onPress={() => {}} />
      </Example>
      <Example
        vars={[
          '--color-neutral-50 (self-authored hover)',
          '--color-neutral-300 (self-authored hover)',
          ...iconLayoutVars,
        ]}
      >
        <IconButton
          variant="back"
          icon={backArrow(lightColors.neutral[900])}
          previewState="hover"
          onPress={() => {}}
        />
      </Example>
    </View>
  ),
};
