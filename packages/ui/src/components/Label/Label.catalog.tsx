import { View } from 'react-native';

import { Label } from './Label';
import { Example } from '../catalogHelpers';
import type { TagStatus } from '../statusColors';

export const title = 'Labels';

const spacingVars = ['--space-8', '--space-4', '--border-radius-8'];

function groups(bgVar: string) {
  return [
    { element: 'Label text', vars: ['--color-white-900', '--type-family-primary', '--type-weight-medium-500', '--caption', '--type-lh-caption'] },
    { element: 'Background', vars: [bgVar] },
    { element: 'Spacing', vars: spacingVars },
  ];
}

const statuses: { status: TagStatus; name: string; bg: string }[] = [
  { status: 'neutral', name: 'Neutral', bg: '--color-neutral-600' },
  { status: 'info', name: 'Information', bg: '--color-secondary-600' },
  { status: 'success', name: 'Success', bg: '--color-success-600' },
  { status: 'warning', name: 'Warning', bg: '--color-warning-600' },
  { status: 'error', name: 'Error', bg: '--color-error-600' },
];

export default function LabelCatalog() {
  return (
    <View style={{ padding: 16, gap: 4 }}>
      {statuses.map(({ status, name, bg }) => (
        <Example key={status} name={name} groups={groups(bg)}>
          <Label label={name} status={status} />
        </Example>
      ))}
    </View>
  );
}
