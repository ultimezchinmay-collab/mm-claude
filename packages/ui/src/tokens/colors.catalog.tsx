import { ScrollView, Text, View } from 'react-native';

import { lightColors, darkColors } from './colors';
import { toKebabCase } from './cssVariables';

export const title = 'Colors';

const SCALE_KEYS = [900, 600, 500, 300, 100, 50] as const;
const SCALE_FAMILIES = ['neutral', 'white', 'primary', 'secondary', 'success', 'error', 'warning'] as const;
const FLAT_KEYS = [
  'background',
  'dashboardBackground',
  'buttonBackground',
  'buttonTextIconDark',
  'buttonTextIconLight',
  'cardBackground',
] as const;

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <View style={{ width: 140, marginRight: 8, marginBottom: 12 }}>
      <View
        style={{
          height: 56,
          borderRadius: 8,
          backgroundColor: value,
          borderWidth: 1,
          borderColor: '#8884',
        }}
      />
      <Text style={{ fontSize: 11, marginTop: 4, fontFamily: 'monospace' }}>{name}</Text>
      <Text style={{ fontSize: 10, opacity: 0.6 }}>{value}</Text>
    </View>
  );
}

function Palette({ title, colors }: { title: string; colors: typeof lightColors | typeof darkColors }) {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8 }}>{title}</Text>

      {SCALE_FAMILIES.map((family) => (
        <View key={family} style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 13, fontWeight: '600', marginBottom: 4 }}>{family}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {SCALE_KEYS.map((key) => (
              <Swatch key={key} name={`--color-${family}-${key}`} value={colors[family][key]} />
            ))}
          </View>
        </View>
      ))}

      <Text style={{ fontSize: 13, fontWeight: '600', marginBottom: 4 }}>background</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {FLAT_KEYS.map((key) => (
          <Swatch key={key} name={`--color-${toKebabCase(key)}`} value={colors[key]} />
        ))}
      </View>
    </View>
  );
}

export default function ColorsCatalog() {
  return (
    <ScrollView style={{ padding: 12 }}>
      <Palette title="Light" colors={lightColors} />
      <Palette title="Dark" colors={darkColors} />
    </ScrollView>
  );
}
