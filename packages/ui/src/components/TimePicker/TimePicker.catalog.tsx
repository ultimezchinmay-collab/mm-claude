import { useState } from 'react';
import { View } from 'react-native';

import { TimePicker } from './TimePicker';
import { Example } from '../catalogHelpers';

export const title = 'Time Picker';

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
    { element: 'Clock icon', vars: ['--color-neutral-500'] },
    { element: 'Spacing', vars: spacingVars },
  ];
  if (open) {
    g.push({ element: 'Selector panel', vars: ['--color-white-900 (background)', '--color-neutral-100 (border)'] });
    g.push({ element: 'Selected hour/minute row', vars: ['--color-primary-50 (background)', '--color-primary-600 (text)'] });
    g.push({ element: 'AM/PM button', vars: ['--color-primary-600 (selected)', '--color-neutral-100 (border)'] });
  }
  return g;
}

function Controlled() {
  const [value, setValue] = useState<Date | null>(null);
  return <TimePicker label="Time" required value={value} onChange={setValue} />;
}

export default function TimePickerCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Default (click to open the time selector)" groups={groups('--color-neutral-300', false)}>
        <Controlled />
      </Example>
      <Example name="Open" groups={groups('--color-secondary-600', false, true)}>
        <TimePicker label="Time" required value={new Date(2026, 0, 1, 16, 30)} onChange={() => {}} previewOpen />
      </Example>
      <Example name="Filled" groups={groups('--color-neutral-300', true)}>
        <TimePicker label="Time" required value={new Date(2026, 0, 1, 16, 30)} onChange={() => {}} />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100', false)}>
        <TimePicker label="Time" required value={null} onChange={() => {}} disabled />
      </Example>
    </View>
  );
}
