import { useState } from 'react';
import { View } from 'react-native';

import { Chip } from './Chip';
import { Example } from '../catalogHelpers';

export const title = 'Chip';

const spacingVars = ['--space-12', '--space-8', '--border-radius-8'];

function groups(border: string, bg: string, withIcon?: boolean) {
  const g = [
    { element: 'Label text', vars: ['--color-neutral-900', '--type-family-primary', '--type-weight-medium-500', '--label', '--type-lh-label'] },
    { element: 'Background', vars: [bg] },
    { element: 'Border', vars: [border, '--border-radius-8'] },
    { element: 'Spacing', vars: spacingVars },
  ];
  if (withIcon) g.push({ element: 'Close icon', vars: ['--color-primary-600'] });
  return g;
}

/** Real toggle — click to select/unselect, matching the Figma "Default"/"Selected" states. */
function ToggleChip() {
  const [selected, setSelected] = useState(false);
  return (
    <Chip
      label={selected ? 'Selected' : 'Default'}
      selected={selected}
      onPress={() => setSelected((s) => !s)}
      onClose={() => setSelected(false)}
    />
  );
}

export default function ChipCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Default (click to select)" groups={groups('--color-neutral-100', 'transparent')}>
        <ToggleChip />
      </Example>
      <Example name="Selected (click x to remove)" groups={groups('--color-primary-500', '--color-primary-50', true)}>
        <Chip label="Selected" selected onClose={() => {}} />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100', 'transparent')}>
        <Chip label="Disabled" disabled />
      </Example>
    </View>
  );
}
