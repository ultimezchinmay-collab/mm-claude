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
      <Example vars={vars}>
        <Controlled />
      </Example>
      <Example vars={['--color-secondary-600 (open)', '--color-neutral-100 (panel border)', ...vars]}>
        <Controlled previewOpen />
      </Example>
      <Example vars={['--color-primary-50 (chip bg)', '--color-primary-500 (chip border)', ...vars]}>
        <Controlled defaultValue={['option-1', 'option-3', 'option-7']} />
      </Example>
    </View>
  );
}
