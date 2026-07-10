import { useState } from 'react';
import { View } from 'react-native';

import { Dropdown, type DropdownOption } from './Dropdown';
import { Example } from '../catalogHelpers';

export const title = 'Dropdown';

const options: DropdownOption[] = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
];

const labelVars = ['--color-neutral-600', '--color-white-900 (label backdrop)', '--type-family-primary', '--type-weight-medium-500', '--caption', '--type-lh-caption', '--color-primary-600 (required *)'];
const spacingVars = ['--space-12', '--space-8', '--space-4', '--border-radius-8'];

function valueVars(hasValue: boolean) {
  return hasValue
    ? ['--color-neutral-900', '--type-weight-bold-700', '--label', '--type-lh-label']
    : ['--color-neutral-500 (placeholder)', '--type-weight-medium-500', '--label', '--type-lh-label'];
}

function groups(border: string, hasValue: boolean, open?: boolean) {
  const g = [
    { element: 'Label text', vars: labelVars },
    { element: 'Border', vars: [border, '--border-radius-8'] },
    { element: 'Value text', vars: valueVars(hasValue) },
    { element: 'Dropdown arrow icon', vars: ['--color-neutral-500'] },
    { element: 'Spacing', vars: spacingVars },
  ];
  if (open) {
    g.push({
      element: 'Options panel',
      vars: ['--color-white-900 (background)', '--color-neutral-100 (border)', '--space-12', '--space-4'],
    });
    g.push({ element: 'Option text', vars: ['--color-primary-600 (selected) / --color-neutral-600', '--type-weight-medium-500', '--label', '--type-lh-label'] });
  }
  return g;
}

function Controlled(props: { defaultValue?: string | null; previewOpen?: boolean }) {
  const [value, setValue] = useState(props.defaultValue ?? null);
  return (
    <Dropdown
      label="Label"
      required
      options={options}
      value={value}
      onChange={setValue}
      previewOpen={props.previewOpen}
    />
  );
}

export default function DropdownCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Default (click to open)" groups={groups('--color-neutral-300', false)}>
        <Controlled />
      </Example>
      <Example name="Open" groups={groups('--color-secondary-600', false, true)}>
        <Controlled previewOpen />
      </Example>
      <Example name="Filled" groups={groups('--color-neutral-300', true)}>
        <Controlled defaultValue="option-2" />
      </Example>
    </View>
  );
}
