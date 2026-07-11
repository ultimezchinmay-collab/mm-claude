import { useState } from 'react';
import { View } from 'react-native';

import { CountryPicker, type CountryOption } from './CountryPicker';
import { Example } from '../catalogHelpers';

export const title = 'Country Code Picker';

const options: CountryOption[] = [
  { name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
];

const labelVars = ['--color-neutral-600', '--color-white-900 (label backdrop)', '--type-family-primary', '--type-weight-medium-500', '--caption', '--type-lh-caption', '--color-primary-600 (required *)'];
const spacingVars = ['--space-12', '--space-8', '--space-4', '--border-radius-8'];

function groups(border: string, hasValue: boolean, open?: boolean) {
  const g = [
    { element: 'Label text', vars: labelVars },
    { element: 'Border', vars: [border, '--border-radius-8'] },
    { element: 'Flag / globe icon', vars: hasValue ? ['emoji flag (no token)'] : ['--color-neutral-500'] },
    { element: 'Value text', vars: hasValue
      ? ['--color-neutral-900', '--type-weight-bold-700', '--label', '--type-lh-label']
      : ['--color-neutral-500 (placeholder)', '--type-weight-medium-500', '--label', '--type-lh-label'] },
    { element: 'Dropdown arrow icon', vars: ['--color-neutral-500'] },
    { element: 'Spacing', vars: spacingVars },
  ];
  if (open) {
    g.push({ element: 'Options panel', vars: ['--color-white-900 (background)', '--color-neutral-100 (border)', '--space-12', '--space-4'] });
  }
  return g;
}

function Controlled(props: { defaultValue?: CountryOption | null; previewOpen?: boolean }) {
  const [value, setValue] = useState<CountryOption | null>(props.defaultValue ?? null);
  return (
    <CountryPicker label="Country" required options={options} value={value} onChange={setValue} previewOpen={props.previewOpen} />
  );
}

export default function CountryPickerCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Default (click to open)" groups={groups('--color-neutral-300', false)}>
        <Controlled />
      </Example>
      <Example name="Open" groups={groups('--color-secondary-600', false, true)}>
        <Controlled previewOpen />
      </Example>
      <Example name="Selected" groups={groups('--color-neutral-300', true)}>
        <Controlled defaultValue={options[0]} />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100', false)}>
        <CountryPicker label="Country" required options={options} value={null} onChange={() => {}} disabled />
      </Example>
    </View>
  );
}
