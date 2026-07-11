import { ScrollView, Text, View } from 'react-native';

import { webRadii, tabletRadii, mobileRadii } from './radii';
import { useThemeColors } from '../theme';

export const title = 'Radius';

function Swatch({ name, value, textColor, mutedColor }: { name: string; value: number; textColor: string; mutedColor: string }) {
  return (
    <View style={{ width: 130, marginRight: 12, marginBottom: 12, alignItems: 'center' }}>
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: value,
          backgroundColor: '#1DAA65',
        }}
      />
      <Text style={{ fontSize: 11, marginTop: 6, fontFamily: 'monospace', color: textColor }}>{name}</Text>
      <Text style={{ fontSize: 10, color: mutedColor }}>{value}</Text>
    </View>
  );
}

function Scale({
  title,
  scale,
}: {
  title: string;
  scale: typeof webRadii | typeof tabletRadii | typeof mobileRadii;
}) {
  const colors = useThemeColors();
  const textColor = colors.neutral[900];
  const mutedColor = colors.neutral[500];

  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8, color: textColor }}>{title}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {Object.entries(scale).map(([key, value]) => (
          <Swatch key={key} name={`--${key}`} value={value} textColor={textColor} mutedColor={mutedColor} />
        ))}
      </View>
    </View>
  );
}

export default function RadiiCatalog() {
  return (
    <ScrollView style={{ padding: 12 }}>
      <Scale title="Web" scale={webRadii} />
      <Scale title="Tablet" scale={tabletRadii} />
      <Scale title="Mobile" scale={mobileRadii} />
    </ScrollView>
  );
}
