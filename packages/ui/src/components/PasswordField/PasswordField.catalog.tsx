import { useState } from 'react';
import { View } from 'react-native';

import { PasswordField } from './PasswordField';
import { Example } from '../catalogHelpers';

export const title = 'Password Field';

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
    { element: 'Show/hide icon', vars: ['--color-neutral-500'] },
    { element: 'Spacing', vars: spacingVars },
  ];
}

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
      <Example name="Default (click the eye icon to reveal)" groups={groups('--color-neutral-300', false)}>
        <Controlled />
      </Example>
      <Example name="Visible (with value)" groups={groups('--color-neutral-300', true)}>
        <Controlled defaultValue="hunter2" defaultVisible />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100', false)}>
        <Controlled disabled />
      </Example>
    </View>
  );
}
