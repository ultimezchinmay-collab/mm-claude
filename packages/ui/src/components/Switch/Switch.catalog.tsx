import { useState } from 'react';
import { View } from 'react-native';

import { Switch } from './Switch';
import { Example } from '../catalogHelpers';

export const title = 'Toggle Switch';

function ToggleDemo() {
  const [value, setValue] = useState(false);
  return <Switch value={value} onValueChange={setValue} testID="switch-toggle" />;
}

export default function SwitchCatalog() {
  return (
    <View style={{ padding: 16, gap: 4 }}>
      <Example name="Default / Active (click to toggle)" groups={[
        { element: 'Track', vars: ['--color-neutral-300 (off) / --color-primary-600 (on)'] },
        { element: 'Thumb', vars: ['--color-white-900'] },
      ]}>
        <ToggleDemo />
      </Example>
      <Example name="Disabled" groups={[
        { element: 'Track', vars: ['--color-neutral-300 (dimmed)'] },
        { element: 'Thumb', vars: ['--color-white-900'] },
      ]}>
        <Switch value={false} disabled />
      </Example>
    </View>
  );
}
