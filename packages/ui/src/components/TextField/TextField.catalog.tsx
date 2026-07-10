import { useState } from 'react';
import { View } from 'react-native';

import { TextField, type TextFieldProps } from './TextField';
import { Example } from '../catalogHelpers';

export const title = 'Text Field';

const baseVars = [
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

function Controlled({ defaultValue, ...rest }: { defaultValue?: string } & Partial<TextFieldProps>) {
  const [value, setValue] = useState(defaultValue ?? '');
  return (
    <TextField label="Label" required placeholder="Enter here" value={value} onChangeText={setValue} {...rest} />
  );
}

export default function TextFieldCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example
        vars={[
          '--color-neutral-300',
          '--color-neutral-500',
          '--color-neutral-600',
          '--color-primary-600',
          '--color-white-900',
          ...baseVars,
        ]}
      >
        <Controlled />
      </Example>
      <Example
        vars={[
          '--color-neutral-500 (border)',
          '--color-neutral-500',
          '--color-neutral-600',
          '--color-primary-600',
          '--color-white-900',
          ...baseVars,
        ]}
      >
        <Controlled previewState="hover" />
      </Example>
      <Example
        vars={[
          '--color-secondary-600',
          '--color-neutral-900',
          '--color-neutral-600',
          '--color-primary-600',
          '--color-white-900',
          '--type-weight-bold-700',
          ...baseVars,
        ]}
      >
        <Controlled defaultValue="Qadir AK" previewState="focused" />
      </Example>
      <Example
        vars={[
          '--color-neutral-300',
          '--color-neutral-900',
          '--color-neutral-600',
          '--color-primary-600',
          '--color-white-900',
          '--type-weight-bold-700',
          ...baseVars,
        ]}
      >
        <Controlled defaultValue="Qadir AK" />
      </Example>
      <Example
        vars={[
          '--color-error-600',
          '--color-neutral-900',
          '--color-neutral-600',
          '--color-primary-600',
          '--color-white-900',
          '--type-weight-bold-700',
          ...baseVars,
        ]}
      >
        <Controlled defaultValue="Qadir AK" error="Error helper text" />
      </Example>
      <Example
        vars={['--color-neutral-100 (self-authored disabled)', '--color-neutral-500', '--color-neutral-600', '--color-white-900', ...baseVars]}
      >
        <Controlled disabled />
      </Example>
    </View>
  );
}
