import { useState } from 'react';
import { View } from 'react-native';

import { DatePicker } from './DatePicker';
import { Example } from '../catalogHelpers';

export const title = 'Date Picker';

const labelVars = ['--color-neutral-600', '--color-white-900 (label backdrop)', '--type-family-primary', '--type-weight-medium-500', '--caption', '--type-lh-caption', '--color-primary-600 (required *)'];
const spacingVars = ['--space-12', '--space-8', '--space-4', '--border-radius-8'];

function valueVars(hasValue: boolean) {
  return hasValue
    ? ['--color-neutral-900', '--type-weight-bold-700', '--label', '--type-lh-label']
    : ['--color-neutral-500 (placeholder)', '--type-weight-medium-500', '--label', '--type-lh-label'];
}

function groups(border: string, hasValue: boolean) {
  return [
    { element: 'Label text', vars: labelVars },
    { element: 'Border', vars: [border, '--border-radius-8'] },
    { element: 'Value text', vars: valueVars(hasValue) },
    { element: 'Calendar icon', vars: ['--color-neutral-500'] },
    { element: 'Spacing', vars: spacingVars },
  ];
}

const SAMPLE_DATES = ['12 Jan 2026', '4 Mar 2026', '30 Jul 2026'];

/**
 * DatePicker only renders the trigger field — opening a real calendar UI is the
 * consumer's responsibility (see DatePicker.tsx). This demo cycles through sample
 * dates on click so the trigger is still genuinely interactive here.
 */
function Controlled() {
  const [index, setIndex] = useState(-1);
  const value = index === -1 ? '' : SAMPLE_DATES[index];
  return (
    <DatePicker
      label="Date"
      required
      value={value}
      onPress={() => setIndex((i) => (i + 1) % SAMPLE_DATES.length)}
    />
  );
}

export default function DatePickerCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Default (click to cycle sample dates)" groups={groups('--color-neutral-300', false)}>
        <Controlled />
      </Example>
      <Example name="Filled" groups={groups('--color-neutral-300', true)}>
        <DatePicker label="Date" required value="12 Jan 2026" onPress={() => {}} />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100', false)}>
        <DatePicker label="Date" required value="" onPress={() => {}} disabled />
      </Example>
    </View>
  );
}
