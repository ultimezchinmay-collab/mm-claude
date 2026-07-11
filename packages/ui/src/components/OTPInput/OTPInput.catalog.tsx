import { useState } from 'react';
import { View } from 'react-native';

import { OTPInput } from './OTPInput';
import { Example } from '../catalogHelpers';

export const title = 'OTP Input';

const groups = (border: string) => [
  { element: 'Label text', vars: ['--color-neutral-600', '--type-weight-medium-500', '--caption', '--type-lh-caption', '--color-primary-600 (required *)'] },
  { element: 'Box border', vars: [border, '--border-radius-8'] },
  { element: 'Value text', vars: ['--color-neutral-900', '--type-weight-medium-500', '--label'] },
  { element: 'Countdown text', vars: ['--color-neutral-500', '--type-weight-medium-500', '--caption', '--type-lh-caption'] },
  { element: 'Resend OTP link', vars: ['--color-primary-600', '--type-weight-bold-700', '--label', '--type-lh-label'] },
  { element: 'Spacing', vars: ['--space-12', '--space-8', '--space-4'] },
];

function Controlled() {
  const [value, setValue] = useState<string[]>([]);
  return <OTPInput value={value} onChange={setValue} resendSeconds={30} />;
}

export default function OTPInputCatalog() {
  return (
    <View style={{ padding: 16, gap: 8 }}>
      <Example name="Default (type to auto-advance)" groups={groups('--color-neutral-300')}>
        <Controlled />
      </Example>
      <Example name="Error" groups={groups('--color-error-600')}>
        <OTPInput value={['1', '2', '3', 'f', '', '']} onChange={() => {}} error="Invalid code" resendSeconds={30} />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100')}>
        <OTPInput value={[]} onChange={() => {}} disabled />
      </Example>
    </View>
  );
}
