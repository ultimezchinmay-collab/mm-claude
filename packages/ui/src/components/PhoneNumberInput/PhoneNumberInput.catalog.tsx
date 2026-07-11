import { useState } from 'react';
import { View } from 'react-native';

import { PhoneNumberInput } from './PhoneNumberInput';
import { Example } from '../catalogHelpers';

export const title = 'Phone Number Input';

function groups(border: string) {
  return [
    { element: 'Label text', vars: ['--color-neutral-600', '--color-white-900 (label backdrop)', '--type-family-primary', '--type-weight-medium-500', '--caption', '--type-lh-caption', '--color-primary-600 (required *)'] },
    { element: 'Border', vars: [border, '--border-radius-8'] },
    { element: 'Country code prefix', vars: ['--color-neutral-500', '--type-weight-medium-500'] },
    { element: 'Divider', vars: ['--color-neutral-300'] },
    { element: 'Value text', vars: ['--color-neutral-900', '--type-weight-bold-700', '--label', '--type-lh-label'] },
    { element: 'Spacing', vars: ['--space-12', '--space-8', '--space-4'] },
  ];
}

function Controlled() {
  const [value, setValue] = useState('8836490087');
  return <PhoneNumberInput label="Mobile Number" required countryCode="+91" value={value} onChangeText={setValue} />;
}

export default function PhoneNumberInputCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Filled (editable)" groups={groups('--color-neutral-300')}>
        <Controlled />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100')}>
        <PhoneNumberInput label="Mobile Number" required countryCode="+91" value="8836490087" onChangeText={() => {}} disabled />
      </Example>
    </View>
  );
}
