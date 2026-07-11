import { useState } from 'react';
import { View } from 'react-native';

import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';
import { Example } from '../catalogHelpers';

export const title = 'Radio';

function groups(border: string, dot?: string) {
  const g = [{ element: 'Outer ring', vars: [border] }];
  if (dot) g.push({ element: 'Inner dot', vars: [dot] });
  return g;
}

function ToggleRadio() {
  const [selected, setSelected] = useState(false);
  return <Radio selected={selected} onPress={() => setSelected((s) => !s)} testID="radio-toggle" />;
}

function GroupDemo() {
  const options = [
    { label: 'Default', value: 'default' },
    { label: 'Hover', value: 'hover' },
    { label: 'After Select', value: 'after-select' },
    { label: 'Disable', value: 'disable' },
  ];
  const [value, setValue] = useState('after-select');
  return <RadioGroup options={options} value={value} onChange={setValue} testID="radio-group" />;
}

export default function RadioCatalog() {
  return (
    <View style={{ padding: 16, gap: 4 }}>
      <Example name="Default (click to select)" groups={groups('--color-neutral-300')}>
        <ToggleRadio />
      </Example>
      <Example name="Hover" groups={groups('--color-neutral-500')}>
        <Radio previewState="hover" />
      </Example>
      <Example name="Selected" groups={groups('--color-primary-600', '--color-primary-600')}>
        <Radio selected />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100')}>
        <Radio disabled />
      </Example>
      <Example
        name="Radio Group (click a row to select)"
        groups={[
          { element: 'Label text', vars: ['--color-neutral-900', '--type-weight-medium-500', '--label'] },
          { element: 'Radio', vars: ['--color-neutral-300 (default) / --color-primary-600 (selected)'] },
          { element: 'Spacing', vars: ['--space-8', '--space-4'] },
        ]}
      >
        <GroupDemo />
      </Example>
    </View>
  );
}
