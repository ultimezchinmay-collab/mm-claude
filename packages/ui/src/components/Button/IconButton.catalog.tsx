import { View } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { ArrowLeft01Icon, Location02Icon } from '@hugeicons/core-free-icons';

import { lightColors } from '../../tokens';
import { IconButton } from './IconButton';
import { Example } from '../catalogHelpers';

export const title = 'Icon Buttons';

const iconLayoutVars = ['--space-8', '--border-radius-8'];

const pinOn = (color: string) => <HugeiconsIcon icon={Location02Icon} size={16} color={color} />;
const backArrow = (color: string) => <HugeiconsIcon icon={ArrowLeft01Icon} size={20} color={color} />;

export default function IconButtonCatalog() {
  return (
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
  );
}
