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

const vars = [
  '--color-neutral-300',
  '--color-neutral-500',
  '--color-neutral-600',
  '--color-primary-600',
  '--color-white-900',
  '--space-12',
  '--space-8',
  '--space-4',
  '--border-radius-8',
  '--type-family-primary',
  '--label',
  '--type-lh-label',
  '--caption',
  '--type-lh-caption',
  '--type-weight-medium-500',
];

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
      <Example vars={vars}>
        <Controlled />
      </Example>
      <Example vars={['--color-secondary-600 (open)', '--color-neutral-100 (panel border)', ...vars]}>
        <Controlled previewOpen />
      </Example>
      <Example vars={['--type-weight-bold-700', ...vars]}>
        <Controlled defaultValue="option-2" />
      </Example>
    </View>
  );
}
