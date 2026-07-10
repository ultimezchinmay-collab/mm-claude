import { useState } from 'react';
import { View } from 'react-native';

import { TextArea, type TextAreaProps } from './TextArea';
import { Example } from '../catalogHelpers';

export const title = 'Text Area';

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
      <Example vars={vars}>
        <Controlled />
      </Example>
      <Example vars={['--color-error-600', ...vars]}>
        <Controlled defaultValue="Some notes" error="Error helper text" />
      </Example>
      <Example vars={['--color-neutral-100 (self-authored disabled)', ...vars]}>
        <Controlled disabled />
      </Example>
    </View>
  );
}
