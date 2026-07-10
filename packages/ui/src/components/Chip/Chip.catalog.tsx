import { View } from 'react-native';

import { Chip } from './Chip';

export const title = 'Chip';

export default function ChipCatalog() {
  return (
    <View style={{ flexDirection: 'row', gap: 8, padding: 16, flexWrap: 'wrap' }}>
      <Chip label="Default" />
      <Chip label="Selected" selected />
      <Chip label="Disabled" disabled />
      <Chip label="With icon" icon="check" />
    </View>
  );
}
