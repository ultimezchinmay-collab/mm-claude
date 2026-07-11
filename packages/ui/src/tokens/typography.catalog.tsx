import { ScrollView, Text, View } from 'react-native';

import {
  fontFamilyVariables,
  fontSizeVariables,
  fontWeightVariables,
  lineHeightVariables,
  type CssVariable,
} from './cssVariables';
import { mobileTypography } from './typography';
import { useThemeColors } from '../theme';

export const title = 'Typography Tokens';

function Row({ name, value, textColor, mutedColor }: CssVariable & { textColor: string; mutedColor: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <Text style={{ width: 220, fontSize: 12, fontFamily: 'monospace', color: textColor }}>{name}</Text>
      <Text style={{ fontSize: 12, color: mutedColor }}>{value}</Text>
    </View>
  );
}

function Section({ title, entries }: { title: string; entries: CssVariable[] }) {
  const colors = useThemeColors();
  const textColor = colors.neutral[900];
  const mutedColor = colors.neutral[600];

  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8, color: textColor }}>{title}</Text>
      {entries.map((entry) => (
        <Row key={entry.name} {...entry} textColor={textColor} mutedColor={mutedColor} />
      ))}
    </View>
  );
}

function mobileFontSizeVariables(): CssVariable[] {
  return Object.entries(mobileTypography.fontSize).map(([key, value]) => ({ name: `--${key}`, value: `${value}px` }));
}

function mobileLineHeightVariables(): CssVariable[] {
  return Object.entries(mobileTypography.lineHeight).map(([key, value]) => ({
    name: `--${key}`,
    value: `${value}px`,
  }));
}

export default function TypographyTokensCatalog() {
  return (
    <ScrollView style={{ padding: 12 }}>
      <Section title="Font Size (Web)" entries={fontSizeVariables()} />
      <Section title="Font Size (Mobile)" entries={mobileFontSizeVariables()} />
      <Section title="Line Height (Web)" entries={lineHeightVariables()} />
      <Section title="Line Height (Mobile)" entries={mobileLineHeightVariables()} />
      <Section title="Font Family" entries={fontFamilyVariables()} />
      <Section title="Font Weight" entries={fontWeightVariables()} />
    </ScrollView>
  );
}
