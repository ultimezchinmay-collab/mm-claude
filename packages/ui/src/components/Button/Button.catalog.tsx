import { View } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Calendar04Icon, Location02Icon } from '@hugeicons/core-free-icons';

import { lightColors } from '../../tokens';
import { Button } from './Button';
import { Example, LABEL_TYPE_VARS, SPACING_VARS, RADIUS_VARS } from '../catalogHelpers';

export const title = 'Buttons';

function icons(color: string) {
  return {
    leftIcon: <HugeiconsIcon icon={Location02Icon} size={16} color={color} />,
    rightIcon: <HugeiconsIcon icon={Calendar04Icon} size={16} color={color} />,
  };
}

const onLight = icons(lightColors.buttonTextIconLight);
const onPrimary = icons(lightColors.primary[600]);
const onPrimaryDim = icons(lightColors.primary[500]);

const pillSpacing = [...SPACING_VARS.filter((v) => v !== '--space-4'), ...RADIUS_VARS];
const textLinkSpacing = ['--space-4'];

function primaryGroups(bg: string) {
  return [
    { element: 'Label text', vars: ['--color-button-text-icon-light', ...LABEL_TYPE_VARS] },
    { element: 'Icon', vars: ['--color-button-text-icon-light'] },
    { element: 'Background', vars: [`--color-${bg}`] },
    { element: 'Border', vars: ['transparent (no border)', ...RADIUS_VARS] },
    { element: 'Spacing', vars: pillSpacing },
  ];
}

function secondaryGroups(border: string, label: string, bg?: string) {
  return [
    { element: 'Label text', vars: [`--color-${label}`, ...LABEL_TYPE_VARS] },
    { element: 'Icon', vars: [`--color-${label}`] },
    { element: 'Background', vars: bg ? [`--color-${bg}`] : ['transparent'] },
    { element: 'Border', vars: [`--color-${border}`, ...RADIUS_VARS] },
    { element: 'Spacing', vars: pillSpacing },
  ];
}

function textLinkGroups(label: string, underline?: boolean) {
  return [
    { element: 'Label text', vars: [`--color-${label}`, ...LABEL_TYPE_VARS] },
    { element: 'Icon', vars: [`--color-${label}`] },
    { element: 'Underline (hover only)', vars: underline ? [`--color-${label}`] : ['none'] },
    { element: 'Spacing', vars: textLinkSpacing },
  ];
}

export default function ButtonCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Primary / Default" groups={primaryGroups('primary-600')}>
        <Button variant="primary" label="Button Label" {...onLight} onPress={() => {}} />
      </Example>
      <Example name="Primary / Hover" groups={primaryGroups('primary-900')}>
        <Button variant="primary" label="Button Label" previewState="hover" {...onLight} onPress={() => {}} />
      </Example>
      <Example name="Primary / Disabled" groups={primaryGroups('primary-500')}>
        <Button variant="primary" label="Button Label" disabled {...onLight} onPress={() => {}} />
      </Example>

      <Example name="Secondary / Default" groups={secondaryGroups('neutral-100', 'primary-600')}>
        <Button variant="secondary" label="View PDF" {...onPrimary} onPress={() => {}} />
      </Example>
      <Example name="Secondary / Hover" groups={secondaryGroups('primary-500', 'primary-600', 'primary-50')}>
        <Button variant="secondary" label="View PDF" previewState="hover" {...onPrimary} onPress={() => {}} />
      </Example>
      <Example name="Secondary / Disabled" groups={secondaryGroups('neutral-100', 'primary-500')}>
        <Button variant="secondary" label="View PDF" disabled {...onPrimaryDim} onPress={() => {}} />
      </Example>

      <Example name="Text Link / Default" groups={textLinkGroups('primary-600')}>
        <Button variant="text-link" label="Skip To Home" {...onPrimary} onPress={() => {}} />
      </Example>
      <Example name="Text Link / Hover" groups={textLinkGroups('primary-600', true)}>
        <Button variant="text-link" label="Skip To Home" previewState="hover" {...onPrimary} onPress={() => {}} />
      </Example>
      <Example name="Text Link / Disabled" groups={textLinkGroups('primary-500')}>
        <Button variant="text-link" label="Skip To Home" disabled {...onPrimaryDim} onPress={() => {}} />
      </Example>
    </View>
  );
}
