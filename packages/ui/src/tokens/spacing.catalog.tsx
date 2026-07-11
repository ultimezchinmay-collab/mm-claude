import { ScrollView, Text, View } from 'react-native';

import { webSpacing, tabletSpacing, mobileSpacing } from './spacing';
import { useThemeColors } from '../theme';

export const title = 'Spacing';

function Row({ name, value, textColor, mutedColor }: { name: string; value: number; textColor: string; mutedColor: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <Text style={{ width: 120, fontSize: 12, fontFamily: 'monospace', color: textColor }}>{name}</Text>
      <View style={{ width: value, height: 16, backgroundColor: '#1DAA65', borderRadius: 2 }} />
      <Text style={{ marginLeft: 8, fontSize: 11, color: mutedColor }}>{value}</Text>
    </View>
  );
}

function Scale({
  title,
  scale,
}: {
  title: string;
  scale: typeof webSpacing | typeof tabletSpacing | typeof mobileSpacing;
}) {
  const colors = useThemeColors();
  const textColor = colors.neutral[900];
  const mutedColor = colors.neutral[500];

  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8, color: textColor }}>{title}</Text>
      {Object.entries(scale).map(([key, value]) => (
        <Row key={key} name={`--${key}`} value={value} textColor={textColor} mutedColor={mutedColor} />
      ))}
    </View>
  );
}

export default function SpacingCatalog() {
  return (
    <ScrollView style={{ padding: 12 }}>
      <Scale title="Web" scale={webSpacing} />
      <Scale title="Tablet" scale={tabletSpacing} />
      <Scale title="Mobile" scale={mobileSpacing} />
    </ScrollView>
  );
}
