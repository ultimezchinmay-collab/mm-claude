import { useState } from 'react';
import { View } from 'react-native';

import { Checkbox } from './Checkbox';
import { Example } from '../catalogHelpers';

export const title = 'Checkbox';

function groups(border: string, bg: string) {
  const boxVars = border === bg ? [border, '--border-radius-8'] : [border, bg, '--border-radius-8'];
  return [
    { element: 'Box', vars: boxVars },
    { element: 'Check icon', vars: ['--color-white-900'] },
  ];
}

function ToggleCheckbox() {
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onChange={setChecked} testID="checkbox-toggle" />;
}

export default function CheckboxCatalog() {
  return (
    <View style={{ padding: 16, gap: 4 }}>
      <Example name="Default (click to check)" groups={groups('--color-neutral-300', 'transparent')}>
        <ToggleCheckbox />
      </Example>
      <Example name="Hover" groups={groups('--color-neutral-500', 'transparent')}>
        <Checkbox previewState="hover" />
      </Example>
      <Example name="Checked" groups={groups('--color-primary-600', '--color-primary-600')}>
        <Checkbox checked />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100', 'transparent')}>
        <Checkbox disabled />
      </Example>
    </View>
  );
}
