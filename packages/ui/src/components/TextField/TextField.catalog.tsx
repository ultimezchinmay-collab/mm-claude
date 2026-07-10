import { useState } from 'react';
import { View } from 'react-native';

import { TextField, type TextFieldProps } from './TextField';
import { Example } from '../catalogHelpers';

export const title = 'Text Field';

const labelVars = ['--color-neutral-600', '--color-white-900 (label backdrop)', '--type-family-primary', '--type-weight-medium-500', '--caption', '--type-lh-caption', '--color-primary-600 (required *)'];
const spacingVars = ['--space-12', '--space-8', '--space-4', '--border-radius-8'];

function valueVars(hasValue: boolean) {
  return hasValue
    ? ['--color-neutral-900', '--type-weight-bold-700', '--label', '--type-lh-label']
    : ['--color-neutral-500 (placeholder)', '--type-weight-medium-500', '--label', '--type-lh-label'];
}

function groups(border: string, hasValue: boolean, helper?: string) {
  const g = [
    { element: 'Label text', vars: labelVars },
    { element: 'Border', vars: [border, '--border-radius-8'] },
    { element: 'Value text', vars: valueVars(hasValue) },
    { element: 'Spacing', vars: spacingVars },
  ];
  if (helper) g.push({ element: 'Helper text', vars: [helper, '--type-weight-medium-500', '--caption', '--type-lh-caption'] });
  return g;
}

function Controlled({ defaultValue, ...rest }: { defaultValue?: string } & Partial<TextFieldProps>) {
  const [value, setValue] = useState(defaultValue ?? '');
  return (
    <TextField label="Label" required placeholder="Enter here" value={value} onChangeText={setValue} {...rest} />
  );
}

export default function TextFieldCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Default" groups={groups('--color-neutral-300', false)}>
        <Controlled />
      </Example>
      <Example name="Hover" groups={groups('--color-neutral-500', false)}>
        <Controlled previewState="hover" />
      </Example>
      <Example name="Focused (with value)" groups={groups('--color-secondary-600', true)}>
        <Controlled defaultValue="Qadir AK" previewState="focused" />
      </Example>
      <Example name="Filled" groups={groups('--color-neutral-300', true)}>
        <Controlled defaultValue="Qadir AK" />
      </Example>
      <Example name="Error" groups={groups('--color-error-600', true, '--color-error-600')}>
        <Controlled defaultValue="Qadir AK" error="Error helper text" />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100', false)}>
        <Controlled disabled />
      </Example>
    </View>
  );
}
