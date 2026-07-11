import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { Card } from './Card';
import { Example } from '../catalogHelpers';

export const title = 'Card';

// Card wraps react-native-paper's Card. Paper resolves title/subtitle/content
// text and surface/border colors from its own MD3 theme roles (surface,
// surfaceVariant, outline, onSurface, onSurfaceVariant) — theme/theme.ts maps
// each of those roles onto our tokens (see buildMD3Colors), so these are real,
// not guessed.
function groups(surfaceVar: string, borderVar?: string) {
  return [
    { element: 'Title text', vars: ['--color-neutral-900 (onSurface, titleLarge)'] },
    { element: 'Subtitle text', vars: ['--color-neutral-600 (onSurfaceVariant, bodyMedium)'] },
    { element: 'Content text', vars: ['--color-neutral-900 (onSurface, bodyMedium)'] },
    { element: 'Surface', vars: [surfaceVar, '--border-radius-8 (roundness, ours)'] },
    { element: 'Border', vars: borderVar ? [borderVar] : ['none'] },
  ];
}

export default function CardCatalog() {
  return (
    <View style={{ padding: 16, gap: 16 }}>
      <Example name="Elevated" groups={groups('elevation.level1 (derived from --color-background + --color-primary-600)')}>
        <Card title="Card title" subtitle="Card subtitle" variant="elevated" onPress={() => {}}>
          <Text variant="bodyMedium">Card content goes here.</Text>
        </Card>
      </Example>
      <Example name="Outlined" groups={groups('--color-white-900 (surface)', '--color-neutral-100 (outline)')}>
        <Card title="Card title" subtitle="Card subtitle" variant="outlined" onPress={() => {}}>
          <Text variant="bodyMedium">Card content goes here.</Text>
        </Card>
      </Example>
      <Example name="Filled" groups={groups('--color-neutral-50 (surfaceVariant)')}>
        <Card title="Card title" subtitle="Card subtitle" variant="filled" onPress={() => {}}>
          <Text variant="bodyMedium">Card content goes here.</Text>
        </Card>
      </Example>
    </View>
  );
}
