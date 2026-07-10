import { View } from 'react-native';

import { TimePicker } from './TimePicker';
import { Example } from '../catalogHelpers';

export const title = 'Time Picker';

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

export default function TimePickerCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example vars={vars}>
        <TimePicker label="Time" required value="" onPress={() => {}} />
      </Example>
      <Example vars={['--type-weight-bold-700', ...vars]}>
        <TimePicker label="Time" required value="4:30 PM" onPress={() => {}} />
      </Example>
      <Example vars={['--color-neutral-100 (self-authored disabled)', ...vars]}>
        <TimePicker label="Time" required value="" onPress={() => {}} disabled />
      </Example>
    </View>
  );
}
