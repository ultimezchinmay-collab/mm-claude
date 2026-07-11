import { ScrollView, Text, View } from 'react-native';

import { lightColors, darkColors } from './colors';
import { toKebabCase } from './cssVariables';
import { useThemeColors } from '../theme';

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

function Swatch({ name, value, textColor, mutedColor }: { name: string; value: string; textColor: string; mutedColor: string }) {
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
      <Text style={{ fontSize: 11, marginTop: 4, fontFamily: 'monospace', color: textColor }}>{name}</Text>
      <Text style={{ fontSize: 10, color: mutedColor }}>{value}</Text>
    </View>
  );
}

function Palette({ title, colors }: { title: string; colors: typeof lightColors | typeof darkColors }) {
  const themeColors = useThemeColors();
  const textColor = themeColors.neutral[900];
  const mutedColor = themeColors.neutral[500];

  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8, color: textColor }}>{title}</Text>

      {SCALE_FAMILIES.map((family) => (
        <View key={family} style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 13, fontWeight: '600', marginBottom: 4, color: textColor }}>{family}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {SCALE_KEYS.map((key) => (
              <Swatch
                key={key}
                name={`--color-${family}-${key}`}
                value={colors[family][key]}
                textColor={textColor}
                mutedColor={mutedColor}
              />
            ))}
          </View>
        </View>
      ))}

      <Text style={{ fontSize: 13, fontWeight: '600', marginBottom: 4, color: textColor }}>background</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {FLAT_KEYS.map((key) => (
          <Swatch
            key={key}
            name={`--color-${toKebabCase(key)}`}
            value={colors[key]}
            textColor={textColor}
            mutedColor={mutedColor}
          />
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
