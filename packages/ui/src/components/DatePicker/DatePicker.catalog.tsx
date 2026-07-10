import { View } from 'react-native';

import { DatePicker } from './DatePicker';
import { Example } from '../catalogHelpers';

export const title = 'Date Picker';

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

export default function DatePickerCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example vars={vars}>
        <DatePicker label="Date" required value="" onPress={() => {}} />
      </Example>
      <Example vars={['--type-weight-bold-700', ...vars]}>
        <DatePicker label="Date" required value="12 Jan 2026" onPress={() => {}} />
      </Example>
      <Example vars={['--color-neutral-100 (self-authored disabled)', ...vars]}>
        <DatePicker label="Date" required value="" onPress={() => {}} disabled />
      </Example>
    </View>
  );
}
