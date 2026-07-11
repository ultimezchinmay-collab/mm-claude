import { View } from 'react-native';

import { Badge } from './Badge';
import { Example } from '../catalogHelpers';
import type { TagStatus } from '../statusColors';

export const title = 'Badges';

const spacingVars = ['--space-8', '--space-4', '--border-radius-8'];

function groups(bgVar: string, textVar: string) {
  return [
    { element: 'Label text', vars: [textVar, '--type-family-primary', '--type-weight-medium-500', '--caption', '--type-lh-caption'] },
    { element: 'Background', vars: [bgVar] },
    { element: 'Spacing', vars: spacingVars },
  ];
}

const statuses: { status: TagStatus; name: string; bg: string; text: string }[] = [
  { status: 'neutral', name: 'Neutral', bg: '--color-neutral-50', text: '--color-neutral-600' },
  { status: 'info', name: 'Information', bg: '--color-secondary-50', text: '--color-secondary-600' },
  { status: 'success', name: 'Success', bg: '--color-success-50', text: '--color-success-600' },
  { status: 'warning', name: 'Warning', bg: '--color-warning-50', text: '--color-warning-600' },
  { status: 'error', name: 'Error', bg: '--color-error-50', text: '--color-error-600' },
];

export default function BadgeCatalog() {
  return (
    <View style={{ padding: 16, gap: 4 }}>
      {statuses.map(({ status, name, bg, text }) => (
        <Example key={status} name={name} groups={groups(bg, text)}>
          <Badge label={name} status={status} />
        </Example>
      ))}
    </View>
  );
}
