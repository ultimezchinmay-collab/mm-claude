import { View } from 'react-native';

import { Typography } from './Typography';

export const title = 'Typography';

export default function TypographyCatalog() {
  return (
    <View style={{ gap: 8, padding: 16 }}>
      <Typography variant="displaySmall">displaySmall</Typography>
      <Typography variant="headlineMedium">headlineMedium</Typography>
      <Typography variant="titleLarge">titleLarge</Typography>
      <Typography variant="titleMedium">titleMedium</Typography>
      <Typography variant="bodyLarge">bodyLarge</Typography>
      <Typography variant="bodyMedium">bodyMedium</Typography>
      <Typography variant="bodySmall">bodySmall</Typography>
      <Typography variant="labelLarge">labelLarge</Typography>
      <Typography variant="labelSmall">labelSmall</Typography>
    </View>
  );
}
