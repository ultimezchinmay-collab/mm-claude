import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { Card } from './Card';
import { Example } from '../catalogHelpers';

export const title = 'Card';

// Card wraps react-native-paper's Card. Paper resolves title/subtitle/content
// text and surface/border colors from theme roles this design system doesn't
// define (surface, surfaceVariant, outline, onSurface, onSurfaceVariant aren't
// in tokens/colors.ts), so Card currently renders with Paper's own MD3 defaults
// rather than our tokens — a real, pre-existing gap, documented honestly below
// rather than guessing which of our variables "should" apply.
const note = (role: string) => [`Paper MD3 default: ${role} (not wired to our tokens)`];

function groups(surfaceRole: string, borderRole?: string) {
  return [
    { element: 'Title text', vars: note('onSurface / titleLarge') },
    { element: 'Subtitle text', vars: note('onSurfaceVariant / bodyMedium') },
    { element: 'Content text', vars: note('onSurface / bodyMedium') },
    { element: 'Surface', vars: [...note(surfaceRole), '--border-radius-8 (roundness, ours)'] },
    { element: 'Border', vars: borderRole ? note(borderRole) : ['none'] },
  ];
}

export default function CardCatalog() {
  return (
    <View style={{ padding: 16, gap: 16 }}>
      <Example name="Elevated" groups={groups('elevation.level1')}>
        <Card title="Card title" subtitle="Card subtitle" variant="elevated" onPress={() => {}}>
          <Text variant="bodyMedium">Card content goes here.</Text>
        </Card>
      </Example>
      <Example name="Outlined" groups={groups('surface', 'outline')}>
        <Card title="Card title" subtitle="Card subtitle" variant="outlined" onPress={() => {}}>
          <Text variant="bodyMedium">Card content goes here.</Text>
        </Card>
      </Example>
      <Example name="Filled" groups={groups('surfaceVariant')}>
        <Card title="Card title" subtitle="Card subtitle" variant="filled" onPress={() => {}}>
          <Text variant="bodyMedium">Card content goes here.</Text>
        </Card>
      </Example>
    </View>
  );
}
