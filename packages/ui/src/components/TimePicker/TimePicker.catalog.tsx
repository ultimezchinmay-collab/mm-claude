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

function groups(border: string, hasValue: boolean) {
  return [
    { element: 'Label text', vars: labelVars },
    { element: 'Border', vars: [border, '--border-radius-8'] },
    { element: 'Value text', vars: valueVars(hasValue) },
    { element: 'Clock icon', vars: ['--color-neutral-500'] },
    { element: 'Spacing', vars: spacingVars },
  ];
}

const SAMPLE_TIMES = ['4:30 PM', '9:00 AM', '11:45 PM'];

/**
 * TimePicker only renders the trigger field — opening a real time picker UI is
 * the consumer's responsibility (see TimePicker.tsx). This demo cycles through
 * sample times on click so the trigger is still genuinely interactive here.
 */
function Controlled() {
  const [index, setIndex] = useState(-1);
  const value = index === -1 ? '' : SAMPLE_TIMES[index];
  return (
    <TimePicker
      label="Time"
      required
      value={value}
      onPress={() => setIndex((i) => (i + 1) % SAMPLE_TIMES.length)}
    />
  );
}

export default function TimePickerCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Default (click to cycle sample times)" groups={groups('--color-neutral-300', false)}>
        <Controlled />
      </Example>
      <Example name="Filled" groups={groups('--color-neutral-300', true)}>
        <TimePicker label="Time" required value="4:30 PM" onPress={() => {}} />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100', false)}>
        <TimePicker label="Time" required value="" onPress={() => {}} disabled />
      </Example>
    </View>
  );
}
