import { View } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { ArrowLeft01Icon, Location02Icon } from '@hugeicons/core-free-icons';

import { lightColors } from '../../tokens';
import { IconButton } from './IconButton';
import { Example } from '../catalogHelpers';

export const title = 'Icon Buttons';

const spacing = ['--space-8', '--border-radius-8'];

const pinOn = (color: string) => <HugeiconsIcon icon={Location02Icon} size={16} color={color} />;
const backArrow = (color: string) => <HugeiconsIcon icon={ArrowLeft01Icon} size={20} color={color} />;

function groups(iconColor: string, bg: string, border?: string) {
  return [
    { element: 'Icon', vars: [`--color-${iconColor}`] },
    { element: 'Background', vars: [`--color-${bg}`] },
    { element: 'Border', vars: border ? [`--color-${border}`] : ['transparent (no border)'] },
    { element: 'Spacing', vars: spacing },
  ];
}

export default function IconButtonCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Primary / Default" groups={groups('button-text-icon-light', 'primary-600')}>
        <IconButton variant="primary" icon={pinOn(lightColors.buttonTextIconLight)} onPress={() => {}} />
      </Example>
      <Example name="Primary / Hover" groups={groups('button-text-icon-light', 'primary-900')}>
        <IconButton
          variant="primary"
          icon={pinOn(lightColors.buttonTextIconLight)}
          previewState="hover"
          onPress={() => {}}
        />
      </Example>
      <Example name="Primary / Disabled" groups={groups('button-text-icon-light', 'primary-500')}>
        <IconButton variant="primary" icon={pinOn(lightColors.buttonTextIconLight)} disabled onPress={() => {}} />
      </Example>

      <Example name="Secondary / Default" groups={groups('primary-600', 'transparent', 'neutral-100')}>
        <IconButton variant="secondary" icon={pinOn(lightColors.primary[600])} onPress={() => {}} />
      </Example>
      <Example name="Secondary / Hover" groups={groups('primary-600', 'primary-50', 'primary-500')}>
        <IconButton
          variant="secondary"
          icon={pinOn(lightColors.primary[600])}
          previewState="hover"
          onPress={() => {}}
        />
      </Example>
      <Example name="Secondary / Disabled" groups={groups('primary-500', 'transparent', 'neutral-100')}>
        <IconButton variant="secondary" icon={pinOn(lightColors.primary[500])} disabled onPress={() => {}} />
      </Example>

      <Example name="Back / Default" groups={groups('neutral-900', 'transparent', 'neutral-100')}>
        <IconButton variant="back" icon={backArrow(lightColors.neutral[900])} onPress={() => {}} />
      </Example>
      <Example
        name="Back / Hover"
        groups={[
          { element: 'Icon', vars: ['--color-neutral-900'] },
          { element: 'Background', vars: ['--color-neutral-50 (self-authored hover)'] },
          { element: 'Border', vars: ['--color-neutral-300 (self-authored hover)'] },
          { element: 'Spacing', vars: spacing },
        ]}
      >
        <IconButton
          variant="back"
          icon={backArrow(lightColors.neutral[900])}
          previewState="hover"
          onPress={() => {}}
        />
      </Example>
      <Example
        name="Back / Disabled"
        groups={[
          { element: 'Icon', vars: ['--color-neutral-900 (dimmed)'] },
          { element: 'Background', vars: ['transparent (no border)'] },
          { element: 'Border', vars: ['--color-neutral-100'] },
          { element: 'Spacing', vars: spacing },
        ]}
      >
        <IconButton variant="back" icon={backArrow(lightColors.neutral[900])} disabled onPress={() => {}} />
      </Example>
    </View>
  );
}
