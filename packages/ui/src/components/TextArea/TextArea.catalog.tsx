import { useState } from 'react';
import { View } from 'react-native';

import { TextArea, type TextAreaProps } from './TextArea';
import { Example } from '../catalogHelpers';

export const title = 'Text Area';

const labelVars = ['--color-neutral-600', '--color-white-900 (label backdrop)', '--type-family-primary', '--type-weight-medium-500', '--caption', '--type-lh-caption', '--color-primary-600 (required *)'];
const spacingVars = ['--space-12', '--space-8', '--space-4', '--border-radius-8'];

function valueVars(hasValue: boolean) {
  return hasValue
    ? ['--color-neutral-900', '--type-weight-bold-700', '--label', '--type-lh-label']
    : ['--color-neutral-500 (placeholder)', '--type-weight-medium-500', '--label', '--type-lh-label'];
}

function groups(border: string, hasValue: boolean, helper: string) {
  return [
    { element: 'Label text', vars: labelVars },
    { element: 'Border', vars: [border, '--border-radius-8'] },
    { element: 'Value text', vars: valueVars(hasValue) },
    { element: 'Helper text (char counter)', vars: [helper, '--type-weight-medium-500', '--caption', '--type-lh-caption'] },
    { element: 'Spacing', vars: spacingVars },
  ];
}

function Controlled({ defaultValue, ...rest }: { defaultValue?: string } & Partial<TextAreaProps>) {
  const [value, setValue] = useState(defaultValue ?? '');
  return (
    <TextArea
      label="Label"
      required
      placeholder="Add description here"
      maxLength={500}
      value={value}
      onChangeText={setValue}
      {...rest}
    />
  );
}

export default function TextAreaCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Default" groups={groups('--color-neutral-300', false, '--color-neutral-500')}>
        <Controlled />
      </Example>
      <Example name="Error" groups={groups('--color-error-600', true, '--color-error-600 (overrides counter)')}>
        <Controlled defaultValue="Some notes" error="Error helper text" />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100', false, '--color-neutral-500')}>
        <Controlled disabled />
      </Example>
    </View>
  );
}
