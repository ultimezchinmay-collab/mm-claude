import { View } from 'react-native';

import { Typography } from './Typography';
import { Example } from '../catalogHelpers';

export const title = 'Typography';

// Typography currently passes `variant` straight through to react-native-web
// Paper's <Text>, which resolves size/weight/line-height from Paper's own MD3
// type scale — not this design system's typography tokens (a known, pre-existing
// gap; TypeScaleKey isn't wired to our tokens yet). Documented honestly below
// rather than claiming our --type-* variables apply.
const note = ['Paper MD3 type scale (not yet wired to our --type-* tokens)'];

export default function TypographyCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="displaySmall" groups={[{ element: 'Text', vars: note }]}>
        <Typography variant="displaySmall">displaySmall</Typography>
      </Example>
      <Example name="headlineMedium" groups={[{ element: 'Text', vars: note }]}>
        <Typography variant="headlineMedium">headlineMedium</Typography>
      </Example>
      <Example name="titleLarge" groups={[{ element: 'Text', vars: note }]}>
        <Typography variant="titleLarge">titleLarge</Typography>
      </Example>
      <Example name="titleMedium" groups={[{ element: 'Text', vars: note }]}>
        <Typography variant="titleMedium">titleMedium</Typography>
      </Example>
      <Example name="bodyLarge" groups={[{ element: 'Text', vars: note }]}>
        <Typography variant="bodyLarge">bodyLarge</Typography>
      </Example>
      <Example name="bodyMedium" groups={[{ element: 'Text', vars: note }]}>
        <Typography variant="bodyMedium">bodyMedium</Typography>
      </Example>
      <Example name="bodySmall" groups={[{ element: 'Text', vars: note }]}>
        <Typography variant="bodySmall">bodySmall</Typography>
      </Example>
      <Example name="labelLarge" groups={[{ element: 'Text', vars: note }]}>
        <Typography variant="labelLarge">labelLarge</Typography>
      </Example>
      <Example name="labelSmall" groups={[{ element: 'Text', vars: note }]}>
        <Typography variant="labelSmall">labelSmall</Typography>
      </Example>
    </View>
  );
}
