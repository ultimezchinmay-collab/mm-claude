import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { Card } from './Card';

export const title = 'Card';

export default function CardCatalog() {
  return (
    <View style={{ padding: 16, gap: 16 }}>
      <Card title="Card title" subtitle="Card subtitle" variant="elevated">
        <Text variant="bodyMedium">Card content goes here.</Text>
      </Card>
      <Card title="Card title" subtitle="Card subtitle" variant="outlined">
        <Text variant="bodyMedium">Card content goes here.</Text>
      </Card>
      <Card title="Card title" subtitle="Card subtitle" variant="filled">
        <Text variant="bodyMedium">Card content goes here.</Text>
      </Card>
    </View>
  );
}
