import { View } from 'react-native';

import { Typography } from './Typography';
import { Example } from '../catalogHelpers';

export const title = 'Typography';

// Typography passes `variant` straight through to Paper's <Text>. Paper always
// colors text with theme.colors.onSurface regardless of variant (see
// react-native-paper's Text.tsx) — theme/theme.ts maps that role onto
// --color-neutral-900, so text color is real. Font family/size/weight/line-height
// per variant still come from Paper's own MD3 type scale (theme.fonts), since
// theme.ts doesn't override `fonts` — this design system's --type-* tokens use
// a different 8-tier scale that doesn't map 1:1 onto Paper's 15 MD3 variants.
const groups = [
  { element: 'Text color', vars: ['--color-neutral-900 (onSurface)'] },
  { element: 'Font family / size / weight / line-height', vars: ['Paper MD3 type scale (not wired to our --type-* tokens)'] },
];

export default function TypographyCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="displaySmall" groups={groups}>
        <Typography variant="displaySmall">displaySmall</Typography>
      </Example>
      <Example name="headlineMedium" groups={groups}>
        <Typography variant="headlineMedium">headlineMedium</Typography>
      </Example>
      <Example name="titleLarge" groups={groups}>
        <Typography variant="titleLarge">titleLarge</Typography>
      </Example>
      <Example name="titleMedium" groups={groups}>
        <Typography variant="titleMedium">titleMedium</Typography>
      </Example>
      <Example name="bodyLarge" groups={groups}>
        <Typography variant="bodyLarge">bodyLarge</Typography>
      </Example>
      <Example name="bodyMedium" groups={groups}>
        <Typography variant="bodyMedium">bodyMedium</Typography>
      </Example>
      <Example name="bodySmall" groups={groups}>
        <Typography variant="bodySmall">bodySmall</Typography>
      </Example>
      <Example name="labelLarge" groups={groups}>
        <Typography variant="labelLarge">labelLarge</Typography>
      </Example>
      <Example name="labelSmall" groups={groups}>
        <Typography variant="labelSmall">labelSmall</Typography>
      </Example>
    </View>
  );
}
