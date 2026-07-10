import { useState } from 'react';
import { View } from 'react-native';

import { MultiSelectDropdown, type MultiSelectOption } from './MultiSelectDropdown';
import { Example } from '../catalogHelpers';

export const title = 'Multi-Select Dropdown';

const options: MultiSelectOption[] = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
  { label: 'Option 5', value: 'option-5' },
  { label: 'Option 6', value: 'option-6' },
  { label: 'Option 7', value: 'option-7' },
];

const labelVars = ['--color-neutral-600', '--color-white-900 (label backdrop)', '--type-family-primary', '--type-weight-medium-500', '--caption', '--type-lh-caption', '--color-primary-600 (required *)'];
const spacingVars = ['--space-12', '--space-8', '--space-4', '--border-radius-8'];

function groups(border: string, hasChips?: boolean, open?: boolean) {
  const g = [
    { element: 'Label text', vars: labelVars },
    { element: 'Border', vars: [border, '--border-radius-8'] },
    { element: 'Placeholder text', vars: ['--color-neutral-500', '--type-weight-medium-500', '--label', '--type-lh-label'] },
    { element: 'Dropdown arrow icon', vars: ['--color-neutral-500'] },
    { element: 'Spacing', vars: spacingVars },
  ];
  if (hasChips) {
    g.push({
      element: 'Selected chips',
      vars: ['--color-primary-50 (background)', '--color-primary-500 (border)', '--color-primary-600 (label & close icon)', '--space-8', '--space-4'],
    });
  }
  if (open) {
    g.push({
      element: 'Options panel',
      vars: ['--color-white-900 (background)', '--color-neutral-100 (border)', '--space-12', '--space-4'],
    });
    g.push({ element: 'Option text + checkbox', vars: ['--color-primary-600 (selected) / --color-neutral-600', '--type-weight-medium-500', '--label', '--type-lh-label'] });
  }
  return g;
}

function Controlled(props: { defaultValue?: string[]; previewOpen?: boolean }) {
  const [value, setValue] = useState(props.defaultValue ?? []);
  return (
    <MultiSelectDropdown
      label="Label"
      required
      options={options}
      value={value}
      onChange={setValue}
      previewOpen={props.previewOpen}
    />
  );
}

export default function MultiSelectDropdownCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Default (click to open)" groups={groups('--color-neutral-300')}>
        <Controlled />
      </Example>
      <Example name="Open" groups={groups('--color-secondary-600', false, true)}>
        <Controlled previewOpen />
      </Example>
      <Example name="Filled (with chips)" groups={groups('--color-neutral-300', true)}>
        <Controlled defaultValue={['option-1', 'option-3', 'option-7']} />
      </Example>
    </View>
  );
}
