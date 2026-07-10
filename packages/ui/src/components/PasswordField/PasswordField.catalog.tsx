import { useState } from 'react';
import { View } from 'react-native';

import { PasswordField } from './PasswordField';
import { Example } from '../catalogHelpers';

export const title = 'Password Field';

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

function Controlled(props: { defaultValue?: string; defaultVisible?: boolean; disabled?: boolean }) {
  const [value, setValue] = useState(props.defaultValue ?? '');
  return (
    <PasswordField
      label="Label"
      required
      value={value}
      onChangeText={setValue}
      placeholder="Enter Password"
      defaultVisible={props.defaultVisible}
      disabled={props.disabled}
    />
  );
}

export default function PasswordFieldCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example vars={vars}>
        <Controlled />
      </Example>
      <Example vars={['--type-weight-bold-700', ...vars]}>
        <Controlled defaultValue="hunter2" defaultVisible />
      </Example>
      <Example vars={['--color-neutral-100 (self-authored disabled)', ...vars]}>
        <Controlled disabled />
      </Example>
    </View>
  );
}
